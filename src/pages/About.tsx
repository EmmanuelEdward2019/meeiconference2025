import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Target, Users, TrendingUp, Award } from "lucide-react";
import { Card } from "@/components/ui/card";
import objectivesImg from "@/assets/objectives.jpg";

const About = () => {
  const objectives = [
    {
      icon: Target,
      title: "Reduce Import Dependency",
      description: "Develop strategic frameworks to strengthen domestic manufacturing capacity and reduce reliance on imports."
    },
    {
      icon: Users,
      title: "Foster Bilateral Cooperation",
      description: "Create lasting partnerships between Nigerian and Turkish businesses, governments, and institutions."
    },
    {
      icon: TrendingUp,
      title: "Drive Industrial Growth",
      description: "Accelerate Nigeria's industrial transformation through technology transfer and investment."
    },
    {
      icon: Award,
      title: "Share Best Practices",
      description: "Exchange knowledge and expertise on successful manufacturing and industrialization strategies."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={objectivesImg} 
            alt="Conference" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/90 to-background/95" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About the <span className="text-secondary">Summit</span>
            </h1>
            <p className="text-xl text-gray-200">
              A landmark event bringing together Nigeria and Türkiye to forge strategic partnerships 
              in manufacturing and industrial development
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center">
              Our <span className="text-secondary">Mission</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              The Nigeria-Türkiye Business & Investment Summit 2025 is designed to address one of 
              Nigeria's most pressing economic challenges: import dependency. By leveraging Türkiye's 
              proven industrialization success and manufacturing expertise, this summit creates a 
              platform for meaningful dialogue, partnership formation, and actionable solutions.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our mission is to facilitate knowledge transfer, encourage foreign direct investment, 
              and establish long-term bilateral cooperation that will transform Nigeria's manufacturing 
              landscape and contribute to sustainable economic growth.
            </p>
          </div>
        </div>
      </section>

      {/* Objectives */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Summit <span className="text-secondary">Objectives</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {objectives.map((objective, index) => (
              <Card
                key={index}
                className="p-8 hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <objective.icon className="w-12 h-12 text-secondary mb-4" />
                <h3 className="text-2xl font-semibold mb-4">{objective.title}</h3>
                <p className="text-muted-foreground">{objective.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Topics */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">
              Key <span className="text-secondary">Topics</span>
            </h2>
            <div className="space-y-6">
              {[
                {
                  title: "Manufacturing Policy Frameworks",
                  description: "Examining successful industrial policies and their application in Nigeria's context"
                },
                {
                  title: "Technology Transfer & Innovation",
                  description: "Strategies for adopting and adapting Turkish manufacturing technologies"
                },
                {
                  title: "Infrastructure Development",
                  description: "Building industrial zones and supporting infrastructure for manufacturing"
                },
                {
                  title: "Investment Opportunities",
                  description: "Identifying and structuring viable manufacturing investment projects"
                },
                {
                  title: "Skills Development & Training",
                  description: "Creating workforce capabilities for modern manufacturing"
                },
                {
                  title: "Trade Facilitation",
                  description: "Improving bilateral trade mechanisms and reducing barriers"
                }
              ].map((topic, index) => (
                <Card key={index} className="p-6 hover:border-secondary transition-colors">
                  <h3 className="text-xl font-semibold mb-2">{topic.title}</h3>
                  <p className="text-muted-foreground">{topic.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Attend */}
      <section className="py-20 bg-primary-dark text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Why <span className="text-secondary">Attend</span>?
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              "Network with 500+ industry leaders and decision-makers",
              "Access exclusive B2B matchmaking sessions",
              "Gain insights from 50+ expert speakers",
              "Explore concrete investment opportunities",
              "Participate in sector-specific workshops",
              "Connect with Turkish manufacturers and exporters"
            ].map((reason, index) => (
              <Card key={index} className="p-6 bg-white/10 border-white/20 backdrop-blur-sm">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">{index + 1}</span>
                  </div>
                  <p className="text-white">{reason}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
