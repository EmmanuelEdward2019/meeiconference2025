import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Check } from "lucide-react";

const Register = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    country: "",
    organization: "",
    jobTitle: "",
    industry: "",
    package: "",
    dietaryRequirements: "",
    specialAccommodations: "",
    interests: [] as string[],
  });
  const navigate = useNavigate();
  const { toast } = useToast();

  const packages = [
    {
      name: "Standard Delegate",
      price: "$500",
      features: [
        "Access to all conference sessions",
        "Conference materials and bag",
        "Lunch and refreshments",
        "Networking reception access",
        "Certificate of attendance"
      ]
    },
    {
      name: "Premium Delegate",
      price: "$850",
      features: [
        "All Standard Delegate benefits",
        "Reserved seating in plenary sessions",
        "VIP networking events",
        "Exclusive roundtable discussions",
        "One-on-one meeting facilitation",
        "Access to speaker dinner"
      ]
    },
    {
      name: "Corporate Package",
      price: "$2,500",
      features: [
        "3 Premium Delegate passes",
        "Exhibition booth (6 sqm)",
        "Company profile in brochure",
        "Logo on event website",
        "Priority B2B matchmaking",
        "Social media mentions"
      ]
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { error } = await supabase.from("registrations").insert([
        {
          full_name: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          country: formData.country,
          organization: formData.organization,
          job_title: formData.jobTitle,
          industry: formData.industry,
          delegate_package: formData.package,
          dietary_requirements: formData.dietaryRequirements,
          special_accommodations: formData.specialAccommodations,
          interests: formData.interests,
        },
      ]);

      if (error) throw error;

      toast({
        title: "Registration Submitted!",
        description: "Thank you for registering. We'll contact you shortly.",
      });
      navigate("/");
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to submit registration. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleInterestChange = (interest: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      interests: checked
        ? [...prev.interests, interest]
        : prev.interests.filter(i => i !== interest)
    }));
  };

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-primary-dark to-background text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Register for the <span className="text-secondary">Summit</span>
            </h1>
            <p className="text-xl text-gray-200">
              Secure your spot at Nigeria-Türkiye's premier business event
            </p>
          </div>
        </div>
      </section>

      {/* Registration Packages */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Registration <span className="text-secondary">Packages</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            {packages.map((pkg, index) => (
              <Card
                key={index}
                className={`p-8 hover:shadow-xl transition-all duration-300 ${
                  index === 1 ? 'border-4 border-secondary scale-105' : ''
                }`}
              >
                {index === 1 && (
                  <div className="bg-secondary text-white text-center py-2 -mx-8 -mt-8 mb-6 rounded-t-lg font-semibold">
                    MOST POPULAR
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                <div className="text-4xl font-bold text-secondary mb-6">{pkg.price}</div>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Card className="p-8">
              <h2 className="text-3xl font-bold mb-8 text-center">
                Complete Your <span className="text-secondary">Registration</span>
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div>
                  <h3 className="text-xl font-semibold mb-4">Personal Information</h3>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="fullName">Full Name *</Label>
                      <Input 
                        id="fullName" 
                        value={formData.fullName}
                        onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                        placeholder="John Doe" 
                        className="mt-1" 
                        required 
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        placeholder="john.doe@example.com" 
                        className="mt-1" 
                        required 
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input 
                        id="phone" 
                        type="tel" 
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        placeholder="+234 XXX XXX XXXX" 
                        className="mt-1" 
                        required 
                      />
                    </div>
                    <div>
                      <Label htmlFor="country">Country *</Label>
                      <Input 
                        id="country" 
                        value={formData.country}
                        onChange={(e) => setFormData({...formData, country: e.target.value})}
                        placeholder="Nigeria" 
                        className="mt-1" 
                        required 
                      />
                    </div>
                  </div>
                </div>

                {/* Organization Information */}
                <div>
                  <h3 className="text-xl font-semibold mb-4">Organization Information</h3>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="organization">Organization Name *</Label>
                      <Input 
                        id="organization" 
                        value={formData.organization}
                        onChange={(e) => setFormData({...formData, organization: e.target.value})}
                        placeholder="Company Name" 
                        className="mt-1" 
                        required 
                      />
                    </div>
                    <div>
                      <Label htmlFor="jobTitle">Job Title *</Label>
                      <Input 
                        id="jobTitle" 
                        value={formData.jobTitle}
                        onChange={(e) => setFormData({...formData, jobTitle: e.target.value})}
                        placeholder="CEO, Director, Manager, etc." 
                        className="mt-1" 
                        required 
                      />
                    </div>
                    <div>
                      <Label htmlFor="industry">Industry Sector</Label>
                      <Select value={formData.industry} onValueChange={(value) => setFormData({...formData, industry: value})}>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select industry" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="manufacturing">Manufacturing</SelectItem>
                          <SelectItem value="automotive">Automotive</SelectItem>
                          <SelectItem value="textile">Textile & Garment</SelectItem>
                          <SelectItem value="food">Food Processing</SelectItem>
                          <SelectItem value="pharma">Pharmaceutical</SelectItem>
                          <SelectItem value="construction">Construction</SelectItem>
                          <SelectItem value="technology">Technology</SelectItem>
                          <SelectItem value="government">Government</SelectItem>
                          <SelectItem value="finance">Banking & Finance</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                {/* Additional Options */}
                <div>
                  <h3 className="text-xl font-semibold mb-4">Areas of Interest</h3>
                  <div className="space-y-3">
                    {['Manufacturing', 'Technology Transfer', 'Joint Ventures', 'Investment Opportunities', 'B2B Matchmaking'].map((interest) => (
                      <div key={interest} className="flex items-center space-x-2">
                        <Checkbox 
                          id={interest}
                          checked={formData.interests.includes(interest)}
                          onCheckedChange={(checked) => handleInterestChange(interest, checked as boolean)}
                        />
                        <Label htmlFor={interest} className="font-normal cursor-pointer">
                          {interest}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Special Requirements */}
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="dietary">Dietary Requirements</Label>
                    <Textarea
                      id="dietary"
                      value={formData.dietaryRequirements}
                      onChange={(e) => setFormData({...formData, dietaryRequirements: e.target.value})}
                      placeholder="Any dietary restrictions or preferences..."
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="accommodations">Special Accommodations</Label>
                    <Textarea
                      id="accommodations"
                      value={formData.specialAccommodations}
                      onChange={(e) => setFormData({...formData, specialAccommodations: e.target.value})}
                      placeholder="Any special accommodations needed..."
                      className="mt-1"
                    />
                  </div>
                </div>

                <Button type="submit" className="btn-secondary w-full text-lg py-6" disabled={loading}>
                  {loading ? "Submitting..." : "Complete Registration"}
                </Button>

                <p className="text-center text-sm text-muted-foreground">
                  By registering, you agree to our terms and conditions
                </p>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Free Event Notice */}
      <section className="py-20 bg-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Free Event - Registration Required
          </h2>
          <p className="text-xl mb-4">
            This is a complimentary event, but registration is mandatory
          </p>
          <p className="text-lg opacity-90">
            Limited spots available • Register now to secure your place
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Register;
