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
import { LogOut, Users, Globe, Monitor, BarChart3 } from "lucide-react";
import logo from "@/assets/logo.png";

interface VisitorAnalytic {
  id: string;
  session_id: string;
  page_path: string;
  referrer: string | null;
  country: string | null;
  city: string | null;
  device_type: string | null;
  browser: string | null;
  os: string | null;
  visited_at: string;
}

interface AnalyticsStats {
  totalVisitors: number;
  uniqueVisitors: number;
  topPages: { page: string; count: number }[];
  topCountries: { country: string; count: number }[];
  deviceBreakdown: { device: string; count: number }[];
}

const Analytics = () => {
  const [analytics, setAnalytics] = useState<VisitorAnalytic[]>([]);
  const [stats, setStats] = useState<AnalyticsStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
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
    fetchAnalytics();
  };

  const fetchAnalytics = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from("visitor_analytics")
        .select("*")
        .order("visited_at", { ascending: false })
        .limit(100);

      if (error) throw error;
      
      const analyticsData = data || [];
      setAnalytics(analyticsData);
      
      // Calculate stats
      const uniqueSessions = new Set(analyticsData.map(a => a.session_id)).size;
      
      // Top pages
      const pageCounts = analyticsData.reduce((acc, a) => {
        acc[a.page_path] = (acc[a.page_path] || 0) + 1;
        return acc;
      }, {} as Record<string, number>);
      const topPages = Object.entries(pageCounts)
        .map(([page, count]) => ({ page, count }))
        .sort((a, b) => b.count - a.count)
        .slice(0, 5);

      // Top countries
      const countryCounts = analyticsData
        .filter(a => a.country)
        .reduce((acc, a) => {
          acc[a.country!] = (acc[a.country!] || 0) + 1;
          return acc;
        }, {} as Record<string, number>);
      const topCountries = Object.entries(countryCounts)
        .map(([country, count]) => ({ country, count }))
        .sort((a, b) => b.count - a.count)
        .slice(0, 5);

      // Device breakdown
      const deviceCounts = analyticsData
        .filter(a => a.device_type)
        .reduce((acc, a) => {
          acc[a.device_type!] = (acc[a.device_type!] || 0) + 1;
          return acc;
        }, {} as Record<string, number>);
      const deviceBreakdown = Object.entries(deviceCounts)
        .map(([device, count]) => ({ device, count }));

      setStats({
        totalVisitors: analyticsData.length,
        uniqueVisitors: uniqueSessions,
        topPages,
        topCountries,
        deviceBreakdown
      });
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

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/");
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
            <h1 className="text-2xl font-bold">Analytics Dashboard</h1>
          </div>
          <div className="flex gap-2">
            <Button onClick={() => navigate("/admin")} variant="outline">
              Admin Dashboard
            </Button>
            <Button onClick={handleLogout} variant="outline" className="gap-2">
              <LogOut size={16} />
              Logout
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Stats Cards */}
        {stats && (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card className="p-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-medium text-muted-foreground">Total Visitors</h3>
                <BarChart3 className="w-5 h-5 text-secondary" />
              </div>
              <p className="text-3xl font-bold">{stats.totalVisitors}</p>
            </Card>

            <Card className="p-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-medium text-muted-foreground">Unique Visitors</h3>
                <Users className="w-5 h-5 text-secondary" />
              </div>
              <p className="text-3xl font-bold">{stats.uniqueVisitors}</p>
            </Card>

            <Card className="p-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-medium text-muted-foreground">Countries</h3>
                <Globe className="w-5 h-5 text-secondary" />
              </div>
              <p className="text-3xl font-bold">{stats.topCountries.length}</p>
            </Card>

            <Card className="p-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-medium text-muted-foreground">Device Types</h3>
                <Monitor className="w-5 h-5 text-secondary" />
              </div>
              <p className="text-3xl font-bold">{stats.deviceBreakdown.length}</p>
            </Card>
          </div>
        )}

        {/* Top Pages and Countries */}
        {stats && (
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="p-6">
              <h2 className="text-xl font-bold mb-4">Top Pages</h2>
              <div className="space-y-3">
                {stats.topPages.map((item, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-sm">{item.page}</span>
                    <span className="font-semibold">{item.count}</span>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6">
              <h2 className="text-xl font-bold mb-4">Top Countries</h2>
              <div className="space-y-3">
                {stats.topCountries.map((item, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-sm">{item.country}</span>
                    <span className="font-semibold">{item.count}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        )}

        {/* Device Breakdown */}
        {stats && stats.deviceBreakdown.length > 0 && (
          <Card className="p-6 mb-8">
            <h2 className="text-xl font-bold mb-4">Device Breakdown</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.deviceBreakdown.map((item, index) => (
                <div key={index} className="text-center">
                  <p className="text-2xl font-bold text-secondary">{item.count}</p>
                  <p className="text-sm text-muted-foreground capitalize">{item.device}</p>
                </div>
              ))}
            </div>
          </Card>
        )}

        {/* Recent Visitors Table */}
        <Card className="p-6">
          <h2 className="text-xl font-bold mb-4">Recent Visitors</h2>
          {loading ? (
            <p>Loading analytics...</p>
          ) : analytics.length === 0 ? (
            <p className="text-center text-muted-foreground py-8">
              No visitor data yet.
            </p>
          ) : (
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Page</TableHead>
                    <TableHead>Country</TableHead>
                    <TableHead>City</TableHead>
                    <TableHead>Device</TableHead>
                    <TableHead>Browser</TableHead>
                    <TableHead>OS</TableHead>
                    <TableHead>Time</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {analytics.map((visit) => (
                    <TableRow key={visit.id}>
                      <TableCell className="font-medium">{visit.page_path}</TableCell>
                      <TableCell>{visit.country || "N/A"}</TableCell>
                      <TableCell>{visit.city || "N/A"}</TableCell>
                      <TableCell className="capitalize">{visit.device_type || "N/A"}</TableCell>
                      <TableCell>{visit.browser || "N/A"}</TableCell>
                      <TableCell>{visit.os || "N/A"}</TableCell>
                      <TableCell>
                        {new Date(visit.visited_at).toLocaleString()}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </Card>
      </main>
    </div>
  );
};

export default Analytics;
