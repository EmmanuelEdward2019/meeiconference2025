import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import meetingImg from "@/assets/meeting-room.jpeg";

const Speakers = () => {
  const speakerCategories = [
    {
      category: "Keynote Speakers",
      speakers: [
        {
          name: "Dr. Yavuz Selim Silay",
          title: "Host & Master of Ceremony, CEO, Istanbul Consulting Group",
          country: "Türkiye",
          description: "Leading expert in international business consulting and strategic partnerships"
        },
        {
          name: "Dr. Daniel Deji Ayodele",
          title: "Founder, MEEI Program",
          country: "Nigeria",
          description: "Visionary leader driving empowerment and employment initiatives across Africa"
        },
        {
          name: "Shehu Mohammed Bello",
          title: "Chairman, Revenue Mobilization Allocation & Fiscal Commission",
          country: "Nigeria",
          description: "Key policymaker in Nigeria's fiscal and economic development strategies"
        },
        {
          name: "Dr. Hasan Sert",
          title: "AK Party MKYK Member & Chairman, AfroTurk TV",
          country: "Türkiye",
          description: "Prominent figure in Türkiye-Africa relations and media communication"
        },
        {
          name: "Yavuz Altun",
          title: "CEO, Happy Center (Retail Sector)",
          country: "Türkiye",
          description: "Leading retail industry expert with extensive market experience"
        }
      ]
    },
    {
      category: "Energy & Transportation Panel",
      speakers: [
        {
          name: "Bülent Şen",
          title: "World Energy Council",
          country: "Türkiye",
          description: "Global energy expert and strategic advisor on sustainable energy solutions"
        }
      ]
    },
    {
      category: "Manufacturing, Retail & Export Panel",
      speakers: [
        {
          name: "Yasin Altay",
          title: "Istanbul Chamber of Commerce (Import/Export)",
          country: "Türkiye",
          description: "Expert in international trade and export development strategies"
        },
        {
          name: "Yavuz Altun",
          title: "CEO, Happy Center",
          country: "Türkiye",
          description: "Retail sector leader with deep insights into consumer markets"
        }
      ]
    },
    {
      category: "Food, Agriculture & Livestock Panel",
      speakers: [
        {
          name: "Zeki Güvercin",
          title: "CEO, Agroconnect",
          country: "Türkiye",
          description: "Agricultural technology and supply chain innovation specialist"
        },
        {
          name: "Tevfik Fikret Koca",
          title: "President, Food, Agriculture & Livestock Producers Association",
          country: "Türkiye",
          description: "Leading voice in Turkish agricultural production and policy"
        }
      ]
    },
    {
      category: "Healthcare Panel",
      speakers: [
        {
          name: "Prof. Dr. Abdulhakim Coşkun",
          title: "Managing Partner, Detagen Healthcare",
          country: "Türkiye",
          description: "Healthcare innovation expert with extensive medical industry experience"
        }
      ]
    },
    {
      category: "Defense & Technology Cooperation Panel",
      speakers: [
        {
          name: "Yasin Şahin",
          title: "EU & Technology Transfer Expert",
          country: "Türkiye",
          description: "Specialist in technology transfer and European Union cooperation frameworks"
        }
      ]
    },
    {
      category: "Additional Distinguished Speakers",
      speakers: [
        {
          name: "Nurten Ural",
          title: "Turkish Consulate in Michigan, USA",
          country: "Türkiye",
          description: "Diplomatic representative fostering international business relations"
        }
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
            src={meetingImg} 
            alt="Speakers" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary-dark/80" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Featured <span className="text-secondary">Speakers</span>
            </h1>
            <p className="text-xl text-gray-200">
              Distinguished experts, industry leaders, and policymakers driving 
              Nigeria-Türkiye economic cooperation and industrial growth
            </p>
          </div>
        </div>
      </section>

      {/* Summit Host */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <Badge variant="secondary" className="text-lg px-6 py-2 mb-4">Summit Host</Badge>
              <h2 className="text-3xl font-bold mb-6">Master of Ceremony</h2>
            </div>
            <Card className="p-8 border-4 border-secondary">
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="w-32 h-32 bg-gradient-to-br from-primary to-secondary rounded-lg flex-shrink-0" />
                <div className="flex-1 text-center md:text-left">
                  <Badge variant="secondary" className="mb-3">Türkiye</Badge>
                  <h3 className="text-2xl font-bold mb-2">Dr. Yavuz Selim Silay</h3>
                  <p className="text-lg text-secondary font-semibold mb-3">
                    CEO, Istanbul Consulting Group
                  </p>
                  <p className="text-muted-foreground">
                    Leading expert in international business consulting and strategic partnerships, 
                    facilitating cross-border cooperation and investment opportunities.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Speakers by Category */}
      {speakerCategories.map((category, catIndex) => (
        <section
          key={catIndex}
          className={`py-20 ${catIndex % 2 === 0 ? 'bg-muted' : 'bg-background'}`}
        >
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              {category.category}
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {category.speakers.map((speaker, index) => (
                <Card
                  key={index}
                  className="p-8 hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 hover:border-secondary"
                >
                  <div className="flex gap-6">
                    <div className="w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-lg flex-shrink-0" />
                    <div className="flex-1">
                      <Badge
                        variant="secondary"
                        className="mb-2"
                      >
                        {speaker.country}
                      </Badge>
                      <h3 className="text-xl font-bold mb-1">{speaker.name}</h3>
                      <p className="text-sm text-secondary font-semibold mb-3">
                        {speaker.title}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {speaker.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Panel Sessions Info */}
      <section className="py-20 bg-primary-dark text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Sectoral <span className="text-secondary">Panel Sessions</span>
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              The summit features moderated panel discussions across five key industry sectors:
            </p>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              {[
                "Energy & Transportation",
                "Manufacturing, Retail & Export",
                "Food, Agriculture & Livestock",
                "Healthcare",
                "Defense & Technology Cooperation"
              ].map((sector, index) => (
                <Card key={index} className="p-6 bg-white/10 border-white/20 backdrop-blur-sm">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold">{index + 1}</span>
                    </div>
                    <p className="text-white font-semibold">{sector}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* More Speakers Coming */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Additional <span className="text-secondary">Speakers</span> & Panelists
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            We are finalizing additional distinguished speakers and industry experts. 
            Stay tuned for more announcements!
          </p>
          <Badge variant="secondary" className="px-6 py-3 text-lg">
            More Updates Coming Soon
          </Badge>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Speakers;
