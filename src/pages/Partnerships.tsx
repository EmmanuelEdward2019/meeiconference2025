import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Handshake, Target, TrendingUp, Globe, Users, Award } from "lucide-react";

const Partnerships = () => {
  const opportunities = [
    {
      icon: Handshake,
      title: "Joint Ventures",
      description: "Form strategic alliances for manufacturing projects in Nigeria"
    },
    {
      icon: Target,
      title: "Technology Transfer",
      description: "Access Turkish manufacturing expertise and modern technologies"
    },
    {
      icon: TrendingUp,
      title: "Market Entry",
      description: "Leverage partnerships to enter Nigerian and Turkish markets"
    },
    {
      icon: Globe,
      title: "Export Opportunities",
      description: "Develop export-oriented manufacturing capabilities"
    },
    {
      icon: Users,
      title: "Skills Development",
      description: "Collaborate on workforce training and capacity building"
    },
    {
      icon: Award,
      title: "Investment Projects",
      description: "Co-invest in high-potential manufacturing ventures"
    }
  ];

  const sectors = [
    {
      name: "Automotive & Parts Manufacturing",
      potential: "Assembly plants, component manufacturing, after-market parts"
    },
    {
      name: "Textile & Garment Industry",
      potential: "Fabric production, garment manufacturing, fashion accessories"
    },
    {
      name: "Food Processing & Packaging",
      potential: "Processing plants, packaging solutions, cold chain infrastructure"
    },
    {
      name: "Pharmaceutical Manufacturing",
      potential: "API production, tablet manufacturing, packaging facilities"
    },
    {
      name: "Electronics & Appliances",
      potential: "Assembly operations, component manufacturing, after-sales"
    },
    {
      name: "Construction Materials",
      potential: "Cement, steel, ceramics, insulation materials production"
    },
    {
      name: "Plastics & Packaging",
      potential: "Polymer processing, packaging materials, plastic products"
    },
    {
      name: "Agricultural Machinery",
      potential: "Farm equipment, irrigation systems, processing machinery"
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
              Strategic <span className="text-secondary">Partnerships</span>
            </h1>
            <p className="text-xl text-gray-200">
              Building lasting bilateral business relationships between Nigeria and Türkiye
            </p>
          </div>
        </div>
      </section>

      {/* Partnership Opportunities */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Partnership <span className="text-secondary">Opportunities</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {opportunities.map((opp, index) => (
              <Card
                key={index}
                className="p-8 hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 hover:border-secondary"
              >
                <opp.icon className="w-12 h-12 text-secondary mb-4" />
                <h3 className="text-xl font-semibold mb-3">{opp.title}</h3>
                <p className="text-muted-foreground">{opp.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Priority Sectors */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-center">
              Priority <span className="text-secondary">Sectors</span>
            </h2>
            <p className="text-center text-muted-foreground mb-12">
              High-potential manufacturing sectors for Nigeria-Türkiye partnerships
            </p>

            <div className="space-y-4">
              {sectors.map((sector, index) => (
                <Card
                  key={index}
                  className="p-6 hover:border-secondary transition-all duration-300"
                >
                  <h3 className="text-xl font-semibold mb-2">{sector.name}</h3>
                  <p className="text-muted-foreground">{sector.potential}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* B2B Matchmaking */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              B2B <span className="text-secondary">Matchmaking</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              The summit features structured B2B matchmaking sessions designed to connect Nigerian and 
              Turkish businesses with compatible interests and complementary capabilities.
            </p>

            <div className="grid md:grid-cols-2 gap-8 text-left mt-12">
              <Card className="p-8">
                <h3 className="text-2xl font-semibold mb-4">For Nigerian Businesses</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                    <span>Meet Turkish manufacturers and technology providers</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                    <span>Explore joint venture and licensing opportunities</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                    <span>Access technology transfer programs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                    <span>Find investment and financing partners</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-8">
                <h3 className="text-2xl font-semibold mb-4">For Turkish Businesses</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span>Access Nigeria's growing market of 200+ million</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span>Identify local manufacturing and distribution partners</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span>Explore export opportunities to West Africa</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span>Establish manufacturing presence in Nigeria</span>
                  </li>
                </ul>
              </Card>
            </div>

            <Link to="/register" className="inline-block mt-12">
              <Button className="btn-secondary text-lg px-12">
                Register for B2B Matchmaking
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-primary-dark text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Partnership <span className="text-secondary">Success</span> Model
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-200 mb-8 leading-relaxed">
              Türkiye's transformation from an import-dependent economy to a manufacturing powerhouse 
              provides valuable lessons for Nigeria. Through strategic partnerships, technology transfer, 
              and focused industrial policy, similar success can be achieved.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              {[
                { stat: "$254B", label: "Turkish Manufacturing Output (2024)" },
                { stat: "16,000+", label: "Turkish Manufacturing Companies" },
                { stat: "$180B", label: "Turkish Annual Exports" }
              ].map((item, index) => (
                <Card key={index} className="p-6 bg-white/10 border-white/20 backdrop-blur-sm text-center">
                  <div className="text-4xl font-bold text-secondary mb-2">{item.stat}</div>
                  <p className="text-white">{item.label}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Partnerships;
