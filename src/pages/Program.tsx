import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import conferenceImg from "@/assets/conference.jpg";

const Program = () => {
  const mainProgram = [
    {
      time: "10:00 – 10:30",
      session: "Arrival & Welcome Coffee Reception",
      details: ""
    },
    {
      time: "10:30 – 10:35",
      session: "National Anthem – Nigeria & Türkiye",
      details: ""
    },
    {
      time: "10:35 – 10:45",
      session: "Opening Welcome Remarks",
      details: "Master of Ceremony: Shaandre Cavin Finnies"
    },
    {
      time: "10:45 – 11:00",
      session: "Opening Address",
      details: "Dr. Daniel Deji Ayodele"
    },
    {
      time: "11:00 – 11:20",
      session: "Chief Guest / Keynote Speaker",
      details: "Shehu Mohammed Bello, Chairman, RMFAC (Nigeria)"
    },
    {
      time: "11:20 – 11:35",
      session: "Keynote Speaker 2",
      details: "Ismail Aktaş, TÜRSIP General President"
    },
    {
      time: "11:35 – 11:50",
      session: "Keynote Speaker 3",
      details: "Mehmet Gökdemir, CEO, Textile Engineering Project"
    },
    {
      time: "11:50 – 12:05",
      session: "Keynote Speaker 4",
      details: "Atilla Özlü, CEO & President, Ayaz Group Limited"
    },
    {
      time: "12:05 – 12:20",
      session: "Coffee & Tea Break",
      details: ""
    },
    {
      time: "12:20 – 1:10",
      session: "Panel Session",
      details: "'Accelerating Bilateral Industrial Growth Through Collaboration' - Moderated by Dr. Daniel Deji Ayodele"
    },
    {
      time: "1:10 – 2:00",
      session: "Networking Lunch",
      details: ""
    },
    {
      time: "2:00 – 2:30",
      session: "Recognition & Appreciation Ceremony",
      details: "Award Presentation"
    },
    {
      time: "2:30 – 3:30",
      session: "B2B Business Matchmaking & Networking",
      details: ""
    }
  ];

  const panelists = [
    "Musa Akgül – Senior Collaboration Expert, EU / Turkish Ministry of Justice",
    "Vasim İdrisoğlu – President, United Education",
    "Mehmet Gökdemir – CEO, Textile Engineering Project",
    "Dr. Adekule Badmus – United Nations Ambassador, President, The Global Clusters"
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={conferenceImg} 
            alt="Program" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary-dark/80" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Summit <span className="text-secondary">Program</span>
            </h1>
            <p className="text-xl text-gray-200">
              A comprehensive program designed to foster bilateral trade, investment, 
              and industrial collaboration between Nigeria and Türkiye
            </p>
          </div>
        </div>
      </section>

      {/* Event Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              TÜRKIYE–NIGERIA BUSINESS EXCHANGE <span className="text-secondary">FORUM 2025</span>
            </h2>
            <div className="flex flex-wrap justify-center gap-6 mt-8">
              <div className="flex items-center gap-2 text-lg">
                <MapPin className="text-secondary" />
                <span>Hilton Istanbul Bosphorus Hotel, Türkiye</span>
              </div>
              <div className="flex items-center gap-2 text-lg">
                <Calendar className="text-secondary" />
                <span>18 November 2025</span>
              </div>
              <div className="flex items-center gap-2 text-lg">
                <Clock className="text-secondary" />
                <span>10:00 AM – 3:30 PM</span>
              </div>
            </div>
            <div className="mt-8">
              <Badge variant="secondary" className="text-lg px-6 py-3">
                Theme: The Role of Manufacturing in Reducing Import Dependency in Nigeria
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Main Program Schedule */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="text-lg px-6 py-2 mb-4">Program Schedule</Badge>
              <h2 className="text-4xl font-bold mb-4">
                Main <span className="text-secondary">Program</span>
              </h2>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b-2 border-secondary">
                    <th className="text-left p-4 font-bold text-lg bg-secondary/10">Time</th>
                    <th className="text-left p-4 font-bold text-lg bg-secondary/10">Activity</th>
                  </tr>
                </thead>
                <tbody>
                  {mainProgram.map((item, index) => (
                    <tr key={index} className="border-b border-border hover:bg-muted/50 transition-colors">
                      <td className="p-4 font-semibold text-secondary whitespace-nowrap align-top">
                        {item.time}
                      </td>
                      <td className="p-4">
                        <div className="font-bold mb-1">{item.session}</div>
                        {item.details && <div className="text-muted-foreground">{item.details}</div>}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Panel Session Details */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">
                Panel Session <span className="text-secondary">Details</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-6">
                'Accelerating Bilateral Industrial Growth Through Collaboration'
              </p>
              <p className="text-lg text-muted-foreground">
                Moderated by <span className="text-secondary font-semibold">Dr. Daniel Deji Ayodele</span>
              </p>
            </div>
            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">Panelists</h3>
              <div className="grid gap-4">
                {panelists.map((panelist, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-muted/50">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-2 h-2 rounded-full bg-secondary" />
                    </div>
                    <p className="text-lg">{panelist}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Join Us at the Summit</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Be part of this transformative event shaping the future of Nigeria-Türkiye trade relations
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" variant="secondary">
              <Link to="/register">Register Now</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-green-800 hover:bg-white hover:text-primary-dark">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Program;
