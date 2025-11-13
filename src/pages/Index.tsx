import { Link } from "react-router-dom";
import { Calendar, MapPin, Users, Award, Building2, Handshake } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import conference from "@/assets/conference.jpg";
import businessBreakfast from "@/assets/business-breakfast.jpeg";
import agriculture from "@/assets/agriculture-2.jpg";
import telecommunications from "@/assets/telecommunications-2.jpg";
import logistics from "@/assets/logistics-2.jpg";
import meetingRoom from "@/assets/meeting-room.jpeg";
import hiltonHotel from "@/assets/hilton-hotel.jpg";
import networking from "@/assets/networking.jpeg";
import partnerIstanbulConsulting from "@/assets/partner-istanbul-consulting.jpg";
import partnerMinistry from "@/assets/partner-ministry-foreign-affairs.jpg";
import partnerVega from "@/assets/partner-vega.png";
import partnerPreston from "@/assets/partner-preston.jpg";
import partnerTurcaf from "@/assets/partner-turcaf.png";
import partnerTurkishAirlines from "@/assets/partner-turkish-airlines.png";
import drYavuzSilay from "@/assets/dr-yavuz-silay.png";
import speakerMartinsArebun from "@/assets/speaker-martins-arebun.png";
import speakerChiefGreen from "@/assets/speaker-chief-green.jpeg";
import speakerDanielAyodele from "@/assets/speaker-daniel-ayodele.png";
import speakerShehuBello from "@/assets/speaker-shehu-bello.jpg";
import speakerHasanSert from "@/assets/speaker-hasan-sert.jpg";
import speakerYavuzAltun from "@/assets/speaker-yavuz-altun.jpg";
import speakerYasinAltay from "@/assets/speaker-yasin-altay.jpg";
import speakerAbdulhakimCoskun from "@/assets/speaker-abdulhakim-coskun.png";

const Index = () => {
  const speakers = [
    { name: "Martins Arebun", title: "MEEI President", country: "Nigeria", image: speakerMartinsArebun },
    { name: "Chief (Dr.) J. N. Green-Amakwe", title: "Special Adviser to Governor of Abia State on Investment Promotion/PPP", country: "Nigeria", image: speakerChiefGreen },
    { name: "Dr. Daniel Deji Ayodele", title: "Founder, MEEI Program", country: "Nigeria", image: speakerDanielAyodele },
    { name: "Shehu Mohammed Bello", title: "Chairman, Revenue Mobilization Allocation & Fiscal Commission", country: "Nigeria", image: speakerShehuBello },
    { name: "Dr. Hasan Sert", title: "AK Party MKYK Member & Chairman, AfroTurk TV", country: "Türkiye", image: speakerHasanSert },
    { name: "Yavuz Altun", title: "CEO, Happy Center (Retail Sector)", country: "Türkiye", image: speakerYavuzAltun },
    { name: "Yasin Altay", title: "Istanbul Chamber of Commerce (Import/Export)", country: "Türkiye", image: speakerYasinAltay },
    { name: "Prof. Dr. Abdulhakim Coşkun", title: "Managing Partner, Detagen Healthcare", country: "Türkiye", image: speakerAbdulhakimCoskun },
  ];

  const features = [
    {
      icon: Users,
      title: "World-Class Speakers",
      description: "Industry leaders and policymakers from Nigeria and Türkiye"
    },
    {
      icon: Handshake,
      title: "Strategic Networking",
      description: "Connect with key decision-makers and potential partners"
    },
    {
      icon: Building2,
      title: "Investment Opportunities",
      description: "Explore manufacturing and industrial investment projects"
    },
    {
      icon: Award,
      title: "Expert Insights",
      description: "Gain valuable knowledge on reducing import dependency"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
          style={{ filter: 'brightness(0.55)' }}
        >
          <source src="/video-1.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 hero-gradient opacity-70 z-10" />
        
        <div className="container mx-auto px-4 z-20 text-center text-white pt-20">
          <div className="animate-fade-in-up">
            <div className="inline-block mb-6 mt-8 md:mt-0 px-6 py-2 bg-secondary/20 backdrop-blur-sm rounded-full border border-secondary/30">
              <span className="text-secondary font-semibold">Main Program: 19th November 2025</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Nigeria-Türkiye<br />
              <span className="text-secondary">Business & Investment</span><br />
              <span className="text-primary-glow">Summit 2025</span>
            </h1>

            <p className="text-xl md:text-2xl mb-4 max-w-4xl mx-auto text-gray-200 font-light">
              "The Role of Manufacturing in Reducing Import Dependency in Nigeria:<br />
              A Strategic Approach to Industrial Growth and Economic Stability"
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-4 my-8 mt-12 md:mt-8 text-lg">
              <div className="flex items-center gap-2">
                <Calendar className="text-secondary" size={24} />
                <span>Main Event: 18th November 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="text-secondary" size={24} />
                <span>Hilton Istanbul Bosphorus Hotel, Istanbul, Türkiye</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12 mb-8 md:mb-0">
              <Link to="/register">
                <Button className="btn-secondary text-lg px-12 py-6">
                  REGISTER NOW
                </Button>
              </Link>
              <Link to="/about">
                <Button className="btn-primary text-lg px-12 py-6">
                  LEARN MORE
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Summit <span className="text-secondary">Overview</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The Nigeria-Türkiye Business & Investment Summit 2025 brings together industry leaders, 
              policymakers, and investors to explore strategic opportunities in manufacturing and industrial 
              development. This landmark event focuses on reducing Nigeria's import dependency through 
              Turkish expertise and investment partnerships, fostering sustainable economic growth and 
              creating a framework for long-term bilateral cooperation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in-up border-2 hover:border-secondary"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <feature.icon className="w-12 h-12 text-secondary mb-4" />
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing Focus Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Transforming Nigeria's <span className="text-secondary">Manufacturing Sector</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                This summit addresses the critical challenge of import dependency through strategic 
                manufacturing partnerships. Learn from Türkiye's successful industrialization model and 
                discover concrete opportunities for technology transfer, joint ventures, and capacity building.
              </p>
              <ul className="space-y-4">
                {[
                  "Industrial policy frameworks and implementation strategies",
                  "Technology transfer and manufacturing excellence",
                  "Infrastructure development for industrial zones",
                  "Access to Turkish manufacturing expertise and investment"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/about" className="inline-block mt-8">
                <Button className="btn-primary">Explore Topics</Button>
              </Link>
            </div>
            <div className="animate-fade-in-up">
              <img
                src={meetingRoom}
                alt="Manufacturing facility"
                className="rounded-lg shadow-2xl hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Speakers Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Featured <span className="text-secondary">Speakers</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Learn from distinguished leaders shaping the future of Nigeria-Türkiye economic cooperation
            </p>
          </div>

          {/* Master of Ceremony - Dr. Yavuz Selim Silay */}
          <div className="max-w-4xl mx-auto mb-16 animate-fade-in-up">
            <div className="text-center mb-6">
              <div className="inline-block px-6 py-2 bg-secondary/20 backdrop-blur-sm rounded-full border border-secondary/30 mb-4">
                <span className="text-secondary font-semibold text-lg">Master of Ceremony</span>
              </div>
            </div>
            <Card className="p-8 border-4 border-secondary hover:shadow-2xl transition-all duration-300">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-shrink-0">
                  <img
                    src={drYavuzSilay}
                    alt="Dr. Yavuz Selim Silay"
                    className="w-40 h-40 rounded-lg object-cover shadow-lg"
                  />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <div className="inline-block px-4 py-1 bg-primary/20 rounded-full mb-3">
                    <span className="text-primary font-semibold">Türkiye</span>
                  </div>
                  <h3 className="text-3xl font-bold mb-2">Dr. Yavuz Selim Silay</h3>
                  <p className="text-xl text-secondary font-semibold mb-4">
                    Founder AFROTURK TV & İstanbul Consulting Group
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Leading expert in international business consulting and strategic partnerships, 
                    facilitating cross-border cooperation and investment opportunities between Nigeria and Türkiye.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Other Speakers Grid */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {speakers.map((speaker, index) => (
              <Card
                key={index}
                className="p-6 text-center hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in-up border-2 hover:border-primary"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {speaker.image ? (
                  <img
                    src={speaker.image}
                    alt={speaker.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover shadow-lg"
                  />
                ) : (
                  <div className="w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-full mx-auto mb-4" />
                )}
                <h3 className="text-xl font-semibold mb-2">{speaker.name}</h3>
                <p className="text-sm text-muted-foreground mb-1">{speaker.title}</p>
                <p className="text-sm text-secondary font-semibold">{speaker.country}</p>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/speakers">
              <Button className="btn-secondary">View All Speakers</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="py-20 bg-primary-dark text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up order-2 md:order-1">
              <img
                src={networking}
                alt="Business partnership"
                className="rounded-lg shadow-2xl hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="animate-fade-in-up order-1 md:order-2">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Strategic <span className="text-secondary">Partnerships</span>
              </h2>
              <p className="text-lg mb-6 leading-relaxed text-gray-200">
                The summit provides unparalleled opportunities for Nigerian and Turkish businesses to forge 
                strategic partnerships. Engage in B2B matchmaking sessions, explore joint venture opportunities, 
                and access exclusive networking events with key decision-makers from both nations.
              </p>
              <Link to="/partnerships">
                <Button className="btn-secondary">Partnership Opportunities</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Venue Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Premium <span className="text-secondary">Venue</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Experience world-class facilities at the prestigious Hilton Hotel, Istanbul
            </p>
          </div>

          <div className="max-w-5xl mx-auto animate-fade-in-up">
            <img
              src={hiltonHotel}
              alt="Hilton Hotel Istanbul"
              className="rounded-lg shadow-2xl w-full mb-8"
            />
            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-4">Hilton Istanbul Bosphorus Hotel</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-secondary mb-3">Location</h4>
                  <p className="text-muted-foreground">
                    Istanbul, Türkiye<br />
                    Easy access to Istanbul's business district<br />
                    Close to Sabiha Gökçen International Airport
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-secondary mb-3">Facilities</h4>
                  <ul className="text-muted-foreground space-y-2">
                    <li>• State-of-the-art conference rooms</li>
                    <li>• Luxury accommodation</li>
                    <li>• Premium dining options</li>
                    <li>• Business center & networking lounges</li>
                  </ul>
                </div>
              </div>
              <Link to="/hotels" className="inline-block mt-6">
                <Button className="btn-primary">View Hotel Details</Button>
              </Link>
            </Card>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="text-secondary">Partners</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Collaborating with leading organizations to make this summit a success
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {[
                  { src: partnerIstanbulConsulting, alt: "Istanbul Consulting Group" },
                  { src: partnerMinistry, alt: "Federal Ministry of Foreign Affairs Nigeria" },
                  { src: partnerVega, alt: "VEGA" },
                  { src: partnerPreston, alt: "Preston Consults" },
                  { src: partnerTurcaf, alt: "TURCAF" },
                  { src: partnerTurkishAirlines, alt: "Turkish Airlines" },
                ].map((partner, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <Card className="p-8 h-40 flex items-center justify-center hover:shadow-lg transition-all duration-300">
                      <img
                        src={partner.src}
                        alt={partner.alt}
                        className="max-h-24 max-w-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                      />
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex" />
              <CarouselNext className="hidden md:flex" />
            </Carousel>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-dark to-hero-overlay text-white">
        <div className="container mx-auto px-4 text-center animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Join the <span className="text-secondary">Summit</span>?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-200">
            Secure your spot at Nigeria-Türkiye's most significant business event of 2025
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register">
              <Button className="btn-secondary text-lg px-12 py-6">
                REGISTER NOW
              </Button>
            </Link>
            <Link to="/contact">
              <Button className="btn-primary text-lg px-12 py-6">
                CONTACT US
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
