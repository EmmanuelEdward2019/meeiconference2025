import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Download, LogOut, Eye, Trash2 } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import logo from "@/assets/logo.png";

interface Registration {
  id: string;
  full_name: string;
  email: string;
  phone: string;
  country: string;
  organization: string;
  job_title: string;
  industry: string | null;
  delegate_package: string;
  dietary_requirements: string | null;
  special_accommodations: string | null;
  interests: string[];
  created_at: string;
}

interface ContactSubmission {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string | null;
  organization: string | null;
  subject: string;
  message: string;
  created_at: string;
}

const Admin = () => {
  const [registrations, setRegistrations] = useState<Registration[]>([]);
  const [contacts, setContacts] = useState<ContactSubmission[]>([]);
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const [selectedRegistration, setSelectedRegistration] = useState<Registration | null>(null);
  const [selectedContact, setSelectedContact] = useState<ContactSubmission | null>(null);
  const [deleting, setDeleting] = useState<string | null>(null);
  const [selectedRegIds, setSelectedRegIds] = useState<Set<string>>(new Set());
  const [selectedContactIds, setSelectedContactIds] = useState<Set<string>>(new Set());
  const [confirmBulk, setConfirmBulk] = useState<null | { type: "registrations" | "contacts" }>(null);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    
    if (!session) {
      navigate("/auth");
      return;
    }

    // Check if user has admin role
    const { data: roleData, error: roleError } = await supabase
      .from("user_roles")
      .select("role")
      .eq("user_id", session.user.id)
      .eq("role", "admin")
      .maybeSingle();

    if (roleError || !roleData) {
      toast({
        title: "Access Denied",
        description: "You don't have admin privileges.",
        variant: "destructive",
      });
      navigate("/");
      return;
    }

    setIsAdmin(true);
    fetchRegistrations();
    fetchContacts();
  };

  const fetchRegistrations = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from("registrations")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      setRegistrations(data || []);
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const fetchContacts = async () => {
    try {
      const { data, error } = await supabase
        .from("contact_submissions")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      setContacts(data || []);
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const deleteRegistration = async (id: string) => {
    setDeleting(id);
    try {
      const { error } = await supabase.from("registrations").delete().eq("id", id);
      if (error) throw error;
      setRegistrations(prev => prev.filter(r => r.id !== id));
      toast({ title: "Registration deleted" });
    } catch (error: any) {
      toast({ title: "Error", description: error.message, variant: "destructive" });
    } finally {
      setDeleting(null);
    }
  };

  const bulkDeleteRegistrations = async () => {
    try {
      const ids = Array.from(selectedRegIds);
      if (ids.length === 0) return;
      const { error } = await supabase.from("registrations").delete().in("id", ids);
      if (error) throw error;
      setRegistrations(prev => prev.filter(r => !selectedRegIds.has(r.id)));
      setSelectedRegIds(new Set());
      toast({ title: "Selected registrations deleted" });
    } catch (error: any) {
      toast({ title: "Error", description: error.message, variant: "destructive" });
    } finally {
      setConfirmBulk(null);
    }
  };

  const deleteContact = async (id: string) => {
    setDeleting(id);
    try {
      const { error } = await supabase.from("contact_submissions").delete().eq("id", id);
      if (error) throw error;
      setContacts(prev => prev.filter(c => c.id !== id));
      toast({ title: "Contact deleted" });
    } catch (error: any) {
      toast({ title: "Error", description: error.message, variant: "destructive" });
    } finally {
      setDeleting(null);
    }
  };

  const bulkDeleteContacts = async () => {
    try {
      const ids = Array.from(selectedContactIds);
      if (ids.length === 0) return;
      const { error } = await supabase.from("contact_submissions").delete().in("id", ids);
      if (error) throw error;
      setContacts(prev => prev.filter(c => !selectedContactIds.has(c.id)));
      setSelectedContactIds(new Set());
      toast({ title: "Selected contacts deleted" });
    } catch (error: any) {
      toast({ title: "Error", description: error.message, variant: "destructive" });
    } finally {
      setConfirmBulk(null);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/");
  };

  const exportToCSV = () => {
    const headers = [
      "Full Name",
      "Email",
      "Phone",
      "Country",
      "Organization",
      "Job Title",
      "Industry",
      "Delegate Package",
      "Dietary Requirements",
      "Special Accommodations",
      "Interests",
      "Registration Date",
    ];

    const csvData = registrations.map((reg) => [
      reg.full_name,
      reg.email,
      reg.phone,
      reg.country,
      reg.organization,
      reg.job_title,
      reg.industry || "",
      reg.delegate_package,
      reg.dietary_requirements || "",
      reg.special_accommodations || "",
      reg.interests.join("; "),
      new Date(reg.created_at).toLocaleString(),
    ]);

    const csv = [
      headers.join(","),
      ...csvData.map((row) => row.map((cell) => `"${cell}"`).join(",")),
    ].join("\n");

    const blob = new Blob([csv], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `registrations_${new Date().toISOString().split("T")[0]}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);

    toast({ title: "Export successful!" });
  };

  const exportContactsToCSV = () => {
    const headers = [
      "First Name",
      "Last Name",
      "Email",
      "Phone",
      "Organization",
      "Subject",
      "Message",
      "Date",
    ];

    const csvData = contacts.map((c) => [
      c.first_name,
      c.last_name,
      c.email,
      c.phone || "",
      c.organization || "",
      c.subject,
      c.message.replace(/\n/g, " ").replace(/"/g, '""'),
      new Date(c.created_at).toLocaleString(),
    ]);

    const csv = [
      headers.join(","),
      ...csvData.map((row) => row.map((cell) => `"${cell}"`).join(",")),
    ].join("\n");

    const blob = new Blob([csv], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `contacts_${new Date().toISOString().split("T")[0]}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);

    toast({ title: "Contacts exported!" });
  };

  if (!isAdmin) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Checking permissions...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-muted">
      <header className="bg-background border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img src={logo} alt="MEEI Conference" className="h-12" />
            <h1 className="text-2xl font-bold">Admin Dashboard</h1>
          </div>
          <div className="flex gap-2">
            <Button onClick={() => navigate("/analytics")} variant="outline">
              Analytics
            </Button>
            <Button onClick={handleLogout} variant="outline" className="gap-2">
              <LogOut size={16} />
              Logout
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 space-y-8">
        {/* Registrations Section */}
        <Card className="p-6">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-2xl font-bold mb-2">Registrations</h2>
              <p className="text-muted-foreground">
                Total: {registrations.length} registrations
              </p>
            </div>
            <div className="flex gap-2">
              <Button onClick={exportToCSV} className="btn-primary gap-2" disabled={registrations.length === 0}>
                <Download size={16} />
                Export to CSV
              </Button>
              <Button
                variant="destructive"
                disabled={selectedRegIds.size === 0}
                onClick={() => setConfirmBulk({ type: "registrations" })}
              >
                Delete selected ({selectedRegIds.size})
              </Button>
            </div>
          </div>

          {loading ? (
            <p>Loading registrations...</p>
          ) : registrations.length === 0 ? (
            <p className="text-center text-muted-foreground py-8">
              No registrations yet.
            </p>
          ) : (
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>
                      <input
                        type="checkbox"
                        checked={registrations.length > 0 && selectedRegIds.size === registrations.length}
                        onChange={(e) => {
                          if (e.target.checked) setSelectedRegIds(new Set(registrations.map(r => r.id)));
                          else setSelectedRegIds(new Set());
                        }}
                      />
                    </TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Phone</TableHead>
                    <TableHead>Country</TableHead>
                    <TableHead>Organization</TableHead>
                    <TableHead>Package</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {registrations.map((reg) => (
                    <TableRow key={reg.id}>
                      <TableCell>
                        <input
                          type="checkbox"
                          checked={selectedRegIds.has(reg.id)}
                          onChange={(e) => {
                            setSelectedRegIds(prev => {
                              const next = new Set(prev);
                              if (e.target.checked) next.add(reg.id);
                              else next.delete(reg.id);
                              return next;
                            });
                          }}
                        />
                      </TableCell>
                      <TableCell className="font-medium">{reg.full_name}</TableCell>
                      <TableCell>{reg.email}</TableCell>
                      <TableCell>{reg.phone}</TableCell>
                      <TableCell>{reg.country}</TableCell>
                      <TableCell>{reg.organization}</TableCell>
                      <TableCell>{reg.delegate_package}</TableCell>
                      <TableCell>
                        {new Date(reg.created_at).toLocaleDateString()}
                      </TableCell>
                      <TableCell className="text-right space-x-2">
                        <Button variant="outline" size="sm" onClick={() => setSelectedRegistration(reg)} className="gap-1">
                          <Eye size={14} /> View
                        </Button>
                        <Button variant="destructive" size="sm" onClick={() => deleteRegistration(reg.id)} disabled={deleting === reg.id} className="gap-1">
                          <Trash2 size={14} /> {deleting === reg.id ? "Deleting..." : "Delete"}
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </Card>

        {/* Contact Submissions Section */}
        <Card className="p-6">
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-2">Contact Form Submissions</h2>
            <p className="text-muted-foreground">
              Total: {contacts.length} submissions
            </p>
          </div>

          <div className="flex justify-between items-center mb-4">
            <div className="text-sm text-muted-foreground">
              {selectedContactIds.size > 0 ? `${selectedContactIds.size} selected` : ""}
            </div>
            <div className="flex gap-2">
              <Button variant="outline" onClick={exportContactsToCSV} disabled={contacts.length === 0} className="gap-2">
                <Download size={16} />
                Export contacts CSV
              </Button>
            <Button
              variant="destructive"
              disabled={selectedContactIds.size === 0}
              onClick={() => setConfirmBulk({ type: "contacts" })}
            >
              Delete selected ({selectedContactIds.size})
            </Button>
            </div>
          </div>

          {loading ? (
            <p>Loading contact submissions...</p>
          ) : contacts.length === 0 ? (
            <p className="text-center text-muted-foreground py-8">
              No contact submissions yet.
            </p>
          ) : (
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>
                      <input
                        type="checkbox"
                        checked={contacts.length > 0 && selectedContactIds.size === contacts.length}
                        onChange={(e) => {
                          if (e.target.checked) setSelectedContactIds(new Set(contacts.map(c => c.id)));
                          else setSelectedContactIds(new Set());
                        }}
                      />
                    </TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Phone</TableHead>
                    <TableHead>Organization</TableHead>
                    <TableHead>Subject</TableHead>
                    <TableHead>Message</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {contacts.map((contact) => (
                    <TableRow key={contact.id}>
                      <TableCell>
                        <input
                          type="checkbox"
                          checked={selectedContactIds.has(contact.id)}
                          onChange={(e) => {
                            setSelectedContactIds(prev => {
                              const next = new Set(prev);
                              if (e.target.checked) next.add(contact.id);
                              else next.delete(contact.id);
                              return next;
                            });
                          }}
                        />
                      </TableCell>
                      <TableCell className="font-medium">
                        {contact.first_name} {contact.last_name}
                      </TableCell>
                      <TableCell>{contact.email}</TableCell>
                      <TableCell>{contact.phone || "N/A"}</TableCell>
                      <TableCell>{contact.organization || "N/A"}</TableCell>
                      <TableCell>{contact.subject}</TableCell>
                      <TableCell className="max-w-xs truncate">
                        {contact.message}
                      </TableCell>
                      <TableCell>
                        {new Date(contact.created_at).toLocaleDateString()}
                      </TableCell>
                      <TableCell className="text-right space-x-2">
                        <Button variant="outline" size="sm" onClick={() => setSelectedContact(contact)} className="gap-1">
                          <Eye size={14} /> View
                        </Button>
                        <Button variant="destructive" size="sm" onClick={() => deleteContact(contact.id)} disabled={deleting === contact.id} className="gap-1">
                          <Trash2 size={14} /> {deleting === contact.id ? "Deleting..." : "Delete"}
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </Card>

        {/* Bulk delete confirmation */}
        <Dialog open={!!confirmBulk} onOpenChange={() => setConfirmBulk(null)}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Confirm bulk delete</DialogTitle>
            </DialogHeader>
            <div className="text-sm">
              {confirmBulk?.type === "registrations"
                ? `Delete ${selectedRegIds.size} selected registration(s)? This cannot be undone.`
                : `Delete ${selectedContactIds.size} selected contact(s)? This cannot be undone.`}
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setConfirmBulk(null)}>Cancel</Button>
              <Button
                variant="destructive"
                onClick={() => confirmBulk?.type === "registrations" ? bulkDeleteRegistrations() : bulkDeleteContacts()}
              >
                Delete
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        {/* Registration View Dialog */}
        <Dialog open={!!selectedRegistration} onOpenChange={() => setSelectedRegistration(null)}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Registration Details</DialogTitle>
            </DialogHeader>
            {selectedRegistration && (
              <div className="space-y-2 text-sm">
                <div><strong>Name:</strong> {selectedRegistration.full_name}</div>
                <div><strong>Email:</strong> {selectedRegistration.email}</div>
                <div><strong>Phone:</strong> {selectedRegistration.phone}</div>
                <div><strong>Country:</strong> {selectedRegistration.country}</div>
                <div><strong>Organization:</strong> {selectedRegistration.organization}</div>
                <div><strong>Job Title:</strong> {selectedRegistration.job_title}</div>
                <div><strong>Industry:</strong> {selectedRegistration.industry || "N/A"}</div>
                <div><strong>Package:</strong> {selectedRegistration.delegate_package}</div>
                <div><strong>Dietary Requirements:</strong> {selectedRegistration.dietary_requirements || "N/A"}</div>
                <div><strong>Special Accommodations:</strong> {selectedRegistration.special_accommodations || "N/A"}</div>
                <div><strong>Interests:</strong> {selectedRegistration.interests?.join(", ") || "N/A"}</div>
                <div><strong>Date:</strong> {new Date(selectedRegistration.created_at).toLocaleString()}</div>
              </div>
            )}
            <DialogFooter>
              <Button variant="outline" onClick={() => setSelectedRegistration(null)}>Close</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        {/* Contact View Dialog */}
        <Dialog open={!!selectedContact} onOpenChange={() => setSelectedContact(null)}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Contact Submission</DialogTitle>
            </DialogHeader>
            {selectedContact && (
              <div className="space-y-2 text-sm">
                <div><strong>Name:</strong> {selectedContact.first_name} {selectedContact.last_name}</div>
                <div><strong>Email:</strong> {selectedContact.email}</div>
                <div><strong>Phone:</strong> {selectedContact.phone || "N/A"}</div>
                <div><strong>Organization:</strong> {selectedContact.organization || "N/A"}</div>
                <div><strong>Subject:</strong> {selectedContact.subject}</div>
                <div><strong>Message:</strong> {selectedContact.message}</div>
                <div><strong>Date:</strong> {new Date(selectedContact.created_at).toLocaleString()}</div>
              </div>
            )}
            <DialogFooter>
              <Button variant="outline" onClick={() => setSelectedContact(null)}>Close</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </main>
    </div>
  );
};

export default Admin;
