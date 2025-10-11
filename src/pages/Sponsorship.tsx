import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import networkingImg from "@/assets/networking.jpeg";

const Sponsorship = () => {
  const packages = [
    {
      name: "Platinum",
      price: "$50,000",
      color: "from-gray-400 to-gray-600",
      benefits: [
        "Premier logo placement on all materials",
        "10 complimentary delegate passes",
        "Exclusive VIP dinner with speakers",
        "15-minute keynote speaking slot",
        "Branded exhibition booth (20 sqm)",
        "Full-page ad in conference brochure",
        "Social media promotion",
        "Logo on main stage backdrop",
        "Press release mention",
        "Post-event attendee list"
      ]
    },
    {
      name: "Gold",
      price: "$30,000",
      color: "from-yellow-400 to-yellow-600",
      benefits: [
        "Logo on conference materials",
        "6 complimentary delegate passes",
        "VIP networking reception access",
        "10-minute speaking opportunity",
        "Exhibition booth (12 sqm)",
        "Half-page ad in brochure",
        "Social media mentions",
        "Logo on event website",
        "Email campaign inclusion"
      ]
    },
    {
      name: "Silver",
      price: "$15,000",
      color: "from-gray-300 to-gray-500",
      benefits: [
        "Logo on select materials",
        "4 complimentary delegate passes",
        "Networking reception access",
        "Exhibition booth (8 sqm)",
        "Quarter-page ad in brochure",
        "Social media mention",
        "Logo on website"
      ]
    },
    {
      name: "Bronze",
      price: "$7,500",
      color: "from-orange-400 to-orange-600",
      benefits: [
        "Logo on website",
        "2 complimentary delegate passes",
        "Exhibition space (4 sqm)",
        "Listing in brochure",
        "Social media mention"
      ]
    }
  ];

  const customOpportunities = [
    "Session Sponsorship",
    "Lunch/Dinner Sponsorship",
    "Coffee Break Sponsorship",
    "Networking Reception Sponsorship",
    "Conference Bag Sponsorship",
    "Delegate Badge Sponsorship",
    "Wi-Fi Sponsorship",
    "Mobile App Sponsorship"
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={networkingImg} 
            alt="Sponsorship" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/90 to-background/95" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Sponsorship <span className="text-secondary">Opportunities</span>
            </h1>
            <p className="text-xl text-gray-200">
              Partner with us to showcase your brand to 500+ industry leaders and decision-makers
            </p>
          </div>
        </div>
      </section>

      {/* Why Sponsor */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Why <span className="text-secondary">Sponsor</span>?
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Brand Visibility",
                description: "Gain exposure to high-level delegates from Nigeria and Türkiye"
              },
              {
                title: "Thought Leadership",
                description: "Position your organization as an industry innovator"
              },
              {
                title: "Business Development",
                description: "Connect with potential clients, partners, and investors"
              },
              {
                title: "Market Access",
                description: "Showcase products/services to key decision-makers"
              },
              {
                title: "Networking",
                description: "Exclusive access to VIP events and networking sessions"
              },
              {
                title: "Media Coverage",
                description: "Benefit from extensive media promotion and PR"
              }
            ].map((item, index) => (
              <Card key={index} className="p-6 hover:border-secondary transition-colors">
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsorship Packages */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4 text-center">
            Sponsorship <span className="text-secondary">Packages</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Choose the package that best fits your objectives. All packages can be customized.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {packages.map((pkg, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 flex flex-col"
              >
                <div className={`h-2 w-full bg-gradient-to-r ${pkg.color} rounded-t-lg mb-6`} />
                <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                <div className="text-3xl font-bold text-secondary mb-6">{pkg.price}</div>
                <ul className="space-y-3 flex-1">
                  {pkg.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="mt-6">
                  <Button className="btn-primary w-full">Get Started</Button>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Opportunities */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-center">
              Custom <span className="text-secondary">Opportunities</span>
            </h2>
            <p className="text-center text-muted-foreground mb-12">
              Looking for something specific? We offer various custom sponsorship opportunities to suit your needs.
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              {customOpportunities.map((opportunity, index) => (
                <Card key={index} className="p-4 hover:border-secondary transition-colors">
                  <div className="flex items-center gap-3">
                    <Badge variant="secondary" className="flex-shrink-0">Custom</Badge>
                    <span className="font-semibold">{opportunity}</span>
                  </div>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-lg mb-6">
                Interested in creating a custom sponsorship package?
              </p>
              <Link to="/contact">
                <Button className="btn-secondary text-lg px-12">
                  Contact Our Team
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Become a <span className="text-secondary">Sponsor</span> Today
          </h2>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto mb-8">
            Limited sponsorship slots available. Secure your position now!
          </p>
          <Link to="/contact">
            <Button className="btn-secondary text-lg px-12">
              Download Sponsorship Brochure
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Sponsorship;
