import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ceremonyImg from "@/assets/ceremony.jpg";

const Guests = () => {
  const guestCategories = [
    {
      category: "Presidential & Gubernatorial Delegations",
      guests: [
        "State Governors from Nigeria's industrial states",
        "Senior Presidential aides and advisors",
        "Members of the National Assembly",
        "Turkish government delegation members"
      ]
    },
    {
      category: "Banking & Finance Leaders",
      guests: [
        "Central Bank of Nigeria officials",
        "Commercial bank CEOs and MDs",
        "Development finance institution heads",
        "Turkish banking sector representatives"
      ]
    },
    {
      category: "Investment & Private Equity",
      guests: [
        "Nigerian Sovereign Investment Authority",
        "Private equity fund managers",
        "Venture capital investors",
        "Turkish investment fund representatives"
      ]
    },
    {
      category: "Trade & Commerce Officials",
      guests: [
        "Nigeria Export Promotion Council",
        "Nigerian Investment Promotion Commission",
        "Trade attachés and commercial counselors",
        "Turkish trade organization officials"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={ceremonyImg} 
            alt="Executive Guests" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/90 to-background/95" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Executive <span className="text-secondary">Guests</span>
            </h1>
            <p className="text-xl text-gray-200">
              Distinguished guests and delegates attending the summit
            </p>
          </div>
        </div>
      </section>

      {/* Expected Attendance */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Expected <span className="text-secondary">Attendance</span>
          </h2>
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { number: "500+", label: "Total Delegates" },
              { number: "100+", label: "CEOs & Senior Executives" },
              { number: "50+", label: "Government Officials" },
              { number: "30+", label: "Turkish Companies" }
            ].map((stat, index) => (
              <Card key={index} className="p-6 text-center hover:scale-105 transition-transform">
                <div className="text-4xl font-bold text-secondary mb-2">{stat.number}</div>
                <p className="text-muted-foreground">{stat.label}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Guest Categories */}
      {guestCategories.map((category, catIndex) => (
        <section
          key={catIndex}
          className={`py-20 ${catIndex % 2 === 0 ? 'bg-muted' : 'bg-background'}`}
        >
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">
              {category.category}
            </h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {category.guests.map((guest, index) => (
                <Card
                  key={index}
                  className="p-6 hover:border-secondary transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <Badge variant="secondary">Confirmed</Badge>
                    <p className="font-semibold">{guest}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Who Should Attend */}
      <section className="py-20 bg-primary-dark text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Who Should <span className="text-secondary">Attend</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Business Leaders",
                items: ["CEOs & Managing Directors", "Business Development Heads", "Procurement Officers", "Supply Chain Managers"]
              },
              {
                title: "Government & Policy",
                items: ["Ministers & Commissioners", "Policy Advisors", "Economic Development Officers", "Trade Negotiators"]
              },
              {
                title: "Finance & Investment",
                items: ["Investors & Fund Managers", "Banking Executives", "Financial Advisors", "Project Finance Specialists"]
              }
            ].map((group, index) => (
              <Card key={index} className="p-8 bg-white/10 border-white/20 backdrop-blur-sm">
                <h3 className="text-2xl font-semibold mb-6 text-secondary">{group.title}</h3>
                <ul className="space-y-3">
                  {group.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                      <span className="text-white">{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Guests;
