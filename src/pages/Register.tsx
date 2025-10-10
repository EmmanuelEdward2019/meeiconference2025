import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Check } from "lucide-react";

const Register = () => {
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

              <form className="space-y-6">
                {/* Personal Information */}
                <div>
                  <h3 className="text-xl font-semibold mb-4">Personal Information</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input id="firstName" placeholder="John" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input id="lastName" placeholder="Doe" className="mt-1" />
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input id="email" type="email" placeholder="john.doe@example.com" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input id="phone" type="tel" placeholder="+234 XXX XXX XXXX" className="mt-1" />
                  </div>
                </div>

                {/* Organization Information */}
                <div>
                  <h3 className="text-xl font-semibold mb-4">Organization Information</h3>
                  <div className="space-y-6">
                    <div>
                      <Label htmlFor="organization">Organization Name *</Label>
                      <Input id="organization" placeholder="Company Name" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="jobTitle">Job Title *</Label>
                      <Input id="jobTitle" placeholder="CEO, Director, Manager, etc." className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="industry">Industry Sector *</Label>
                      <Select>
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

                {/* Registration Package */}
                <div>
                  <h3 className="text-xl font-semibold mb-4">Select Package *</h3>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose registration package" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="standard">Standard Delegate - $500</SelectItem>
                      <SelectItem value="premium">Premium Delegate - $850</SelectItem>
                      <SelectItem value="corporate">Corporate Package - $2,500</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Additional Options */}
                <div>
                  <h3 className="text-xl font-semibold mb-4">Additional Options</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="b2b" />
                      <Label htmlFor="b2b" className="font-normal cursor-pointer">
                        Register for B2B Matchmaking Sessions (+$100)
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="accommodation" />
                      <Label htmlFor="accommodation" className="font-normal cursor-pointer">
                        Request accommodation assistance
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="dietary" />
                      <Label htmlFor="dietary" className="font-normal cursor-pointer">
                        I have special dietary requirements
                      </Label>
                    </div>
                  </div>
                </div>

                {/* Terms */}
                <div className="flex items-start space-x-2 pt-4">
                  <Checkbox id="terms" />
                  <Label htmlFor="terms" className="text-sm font-normal cursor-pointer">
                    I agree to the terms and conditions and privacy policy. I consent to receive 
                    information about the summit via email.
                  </Label>
                </div>

                <Button className="btn-secondary w-full text-lg py-6">
                  Complete Registration & Pay
                </Button>

                <p className="text-center text-sm text-muted-foreground">
                  Secure payment processing • All major credit cards accepted
                </p>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Early Bird Notice */}
      <section className="py-20 bg-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Early Bird Discount Available!
          </h2>
          <p className="text-xl mb-4">
            Register before August 31, 2025 and save 20% on all packages
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
