import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin, Award } from "lucide-react";
import conferenceImg from "@/assets/conference.jpg";

const Program = () => {
  const mainProgram = [
    {
      time: "09:00 – 10:00 AM",
      session: "Arrival & Registration",
      details: "Delegates check-in, networking tea, and media welcome"
    },
    {
      time: "10:00 – 10:10 AM",
      session: "Opening Ceremony",
      details: "National Anthems (Türkiye & Nigeria). Opening remarks by the host"
    },
    {
      time: "10:10 – 10:20 AM",
      session: "Welcome Address",
      details: "Dr. Yavuz Selim Silay, Host & Master of Ceremony"
    },
    {
      time: "10:20 – 10:40 AM",
      session: "Keynote Address 1",
      details: "Dr. Daniel Deji Ayodele, Founder, MEEI Program"
    },
    {
      time: "10:40 – 11:00 AM",
      session: "Keynote Address 2",
      details: "Shehu Mohammed Bello, Chairman, Revenue Mobilization Allocation & Fiscal Commission (Nigeria)"
    },
    {
      time: "11:00 – 11:20 AM",
      session: "Keynote Address 3",
      details: "Dr. Hasan Sert, AK Party MKYK Member & Chairman, AfroTurk TV"
    },
    {
      time: "11:20 – 11:40 AM",
      session: "Keynote Address 4",
      details: "Yavuz Altun, CEO, Happy Center (Retail Sector)"
    },
    {
      time: "11:40 – 12:00 PM",
      session: "Tea & Coffee Break",
      details: "Networking & informal discussions"
    },
    {
      time: "12:00 – 1:45 PM",
      session: "Sectoral Panel Sessions",
      details: "Moderated discussions on key industry sectors"
    },
    {
      time: "1:45 – 2:15 PM",
      session: "Award & Recognition Session",
      details: "Recognition of outstanding contributors to Türkiye–Nigeria cooperation"
    },
    {
      time: "2:15 – 2:45 PM",
      session: "Closing Remarks & Group Photo",
      details: "Summary, acknowledgements, and official group photograph"
    },
    {
      time: "2:45 – 3:00 PM",
      session: "Music & Networking",
      details: "Light music and closing refreshments"
    }
  ];

  const sectoralPanels = [
    {
      sector: "Sector 1: Energy & Transportation",
      speakers: "Featuring Bülent Şen, World Energy Council, and invited partners"
    },
    {
      sector: "Sector 2: Manufacturing, Retail & Export",
      speakers: "Featuring Yavuz Altun, Yasin Altay (Istanbul Chamber of Commerce)"
    },
    {
      sector: "Sector 3: Food, Agriculture & Livestock",
      speakers: "Featuring Zeki Güvercin (Agroconnect), Tevfik Fikret Koca (Food Producers Association)"
    },
    {
      sector: "Sector 4: Healthcare",
      speakers: "Featuring Prof. Dr. Abdulhakim Coşkun, Managing Partner, Detagen Healthcare"
    },
    {
      sector: "Sector 5: Defense & Technology Cooperation",
      speakers: "Featuring Yasin Şahin, EU & Technology Transfer Expert"
    }
  ];

  const sideActivities = [
    {
      date: "20th October",
      activity: "Arrival of Delegation & Istanbul City Tour"
    },
    {
      date: "21st October",
      activity: "Factory Visits & Company Tours"
    },
    {
      date: "22nd October",
      activity: "Main Summit Program",
      highlight: true
    },
    {
      date: "23rd October",
      activity: "Private B2B Meetings & Media Engagements"
    },
    {
      date: "24th October",
      activity: "Visit to Parliament House & Dinner with Minister of Agriculture (Ankara)"
    },
    {
      date: "25th October",
      activity: "Departure of Delegation"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={conferenceImg} 
            alt="Program Schedule" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary-dark/80" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Summit <span className="text-secondary">Program</span>
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              A comprehensive five-day program featuring keynote addresses, panel discussions, 
              factory visits, and strategic networking opportunities
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-lg">
              <div className="flex items-center gap-2">
                <Calendar className="text-secondary" size={24} />
                <span>Main Event: 22nd October 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="text-secondary" size={24} />
                <span>Hilton Hotel, Kozyatağı Istanbul</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">
              Event <span className="text-secondary">Overview</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              The summit spans five days from October 20th to 25th, 2025, with the main program 
              taking place on October 22nd at the prestigious Hilton Hotel Kozyatağı in Istanbul.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="p-6 text-center hover:scale-105 transition-transform">
              <Calendar className="w-12 h-12 text-secondary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">5 Days</h3>
              <p className="text-muted-foreground">Full program including side activities</p>
            </Card>
            <Card className="p-6 text-center hover:scale-105 transition-transform">
              <Clock className="w-12 h-12 text-secondary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">6 Hours</h3>
              <p className="text-muted-foreground">Main summit program on Oct 22nd</p>
            </Card>
            <Card className="p-6 text-center hover:scale-105 transition-transform">
              <Award className="w-12 h-12 text-secondary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">5 Panels</h3>
              <p className="text-muted-foreground">Sectoral panel discussions</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Main Program Schedule */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="text-lg px-6 py-2 mb-4">22nd October 2025</Badge>
              <h2 className="text-4xl font-bold mb-4">
                Main <span className="text-secondary">Program</span>
              </h2>
              <p className="text-muted-foreground">
                Detailed schedule for the main summit day
              </p>
            </div>

            <div className="space-y-4">
              {mainProgram.map((item, index) => (
                <Card 
                  key={index} 
                  className="p-6 hover:border-secondary transition-all hover:scale-102"
                >
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <div className="flex items-center gap-3 md:w-48 flex-shrink-0">
                      <Clock className="w-5 h-5 text-secondary" />
                      <span className="font-semibold text-primary">{item.time}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold mb-1">{item.session}</h3>
                      <p className="text-muted-foreground">{item.details}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sectoral Panels */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">
              Sectoral <span className="text-secondary">Panel Sessions</span>
            </h2>
            <p className="text-center text-muted-foreground mb-12">
              Five moderated panel discussions focusing on key industry sectors critical 
              to Nigeria-Türkiye economic cooperation
            </p>

            <div className="space-y-4">
              {sectoralPanels.map((panel, index) => (
                <Card key={index} className="p-6 hover:border-secondary transition-colors">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2">{panel.sector}</h3>
                      <p className="text-muted-foreground">{panel.speakers}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Side Activities */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">
              Side <span className="text-secondary">Activities</span>
            </h2>
            <p className="text-center text-muted-foreground mb-12">
              Beyond the main summit, delegates will participate in factory visits, 
              B2B meetings, and high-level governmental engagements
            </p>

            <div className="space-y-4">
              {sideActivities.map((activity, index) => (
                <Card 
                  key={index} 
                  className={`p-6 transition-all ${
                    activity.highlight 
                      ? 'border-4 border-secondary scale-105' 
                      : 'hover:border-secondary'
                  }`}
                >
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <div className="flex items-center gap-3 md:w-40 flex-shrink-0">
                      <Calendar className="w-5 h-5 text-secondary" />
                      <span className="font-bold text-primary">{activity.date}</span>
                    </div>
                    <div className="flex-1">
                      <p className={`text-lg ${activity.highlight ? 'font-bold text-secondary' : ''}`}>
                        {activity.activity}
                      </p>
                    </div>
                    {activity.highlight && (
                      <Badge variant="secondary" className="w-fit">Main Event</Badge>
                    )}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to <span className="text-secondary">Participate</span>?
          </h2>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto mb-8">
            Register now to secure your spot at this landmark summit and be part of 
            shaping the future of Nigeria-Türkiye economic cooperation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/register">
              <button className="btn-secondary text-lg px-12 py-4">
                Register Now
              </button>
            </a>
            <a href="/contact">
              <button className="btn-primary text-lg px-12 py-4">
                Contact Us
              </button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Program;
