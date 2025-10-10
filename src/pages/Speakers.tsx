import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Speakers = () => {
  const speakerCategories = [
    {
      category: "Government Ministers & Officials",
      speakers: [
        {
          name: "Dr. Amina Mohammed",
          title: "Minister of Industry, Trade and Investment",
          country: "Nigeria",
          description: "Leading Nigeria's industrial transformation agenda"
        },
        {
          name: "Mehmet Muş",
          title: "Minister of Trade",
          country: "Türkiye",
          description: "Spearheading Turkish export and trade initiatives"
        },
        {
          name: "Prof. Yemi Osinbajo",
          title: "Former Vice President",
          country: "Nigeria",
          description: "Expert on economic policy and development"
        },
        {
          name: "Dr. Fatih Dönmez",
          title: "Minister of Energy and Natural Resources",
          country: "Türkiye",
          description: "Driving sustainable energy solutions"
        }
      ]
    },
    {
      category: "Industry Leaders & CEOs",
      speakers: [
        {
          name: "Aliko Dangote",
          title: "President & CEO, Dangote Group",
          country: "Nigeria",
          description: "Africa's leading industrialist and investor"
        },
        {
          name: "Mustafa Koç",
          title: "Chairman, Koç Holding",
          country: "Türkiye",
          description: "Leading Turkish conglomerate with global reach"
        },
        {
          name: "Tony Elumelu",
          title: "Chairman, Heirs Holdings",
          country: "Nigeria",
          description: "Pioneer of African entrepreneurship and investment"
        },
        {
          name: "Murat Ülker",
          title: "Chairman, Yıldız Holding",
          country: "Türkiye",
          description: "Global FMCG and food manufacturing leader"
        }
      ]
    },
    {
      category: "Manufacturing & Industrial Experts",
      speakers: [
        {
          name: "Engr. Mansur Ahmed",
          title: "Director General, Manufacturers Association of Nigeria",
          country: "Nigeria",
          description: "Championing Nigerian manufacturing sector growth"
        },
        {
          name: "Can Fuat Gürlesel",
          title: "President, Turkish Exporters Assembly",
          country: "Türkiye",
          description: "Leading Turkish export sector development"
        },
        {
          name: "Dr. Bola Tinubu Jr.",
          title: "CEO, Novarick Homes & Properties",
          country: "Nigeria",
          description: "Innovation in construction and manufacturing"
        },
        {
          name: "Erdem Çenesiz",
          title: "CEO, STFA Investment Holding",
          country: "Türkiye",
          description: "Infrastructure and industrial development expert"
        }
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
              Featured <span className="text-secondary">Speakers</span>
            </h1>
            <p className="text-xl text-gray-200">
              Learn from distinguished leaders, policymakers, and industry experts shaping the future 
              of Nigeria-Türkiye economic cooperation
            </p>
          </div>
        </div>
      </section>

      {/* Speakers by Category */}
      {speakerCategories.map((category, catIndex) => (
        <section
          key={catIndex}
          className={`py-20 ${catIndex % 2 === 0 ? 'bg-background' : 'bg-muted'}`}
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

      {/* More Speakers Coming */}
      <section className="py-20 bg-primary-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            More <span className="text-secondary">Speakers</span> to be Announced
          </h2>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto mb-8">
            We're confirming additional distinguished speakers and panelists. Check back soon for updates!
          </p>
          <Badge variant="secondary" className="px-6 py-3 text-lg">
            50+ Speakers Expected
          </Badge>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Speakers;
