import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Star, Phone, Mail, Wifi, Coffee, Car, Utensils } from "lucide-react";
import hiltonHotel from "@/assets/hilton-hotel.jpg";
import hiltonInterior from "@/assets/hilton-hotel-interior.jpg";
import breakfastImg from "@/assets/business-breakfast-5.jpeg";

const Hotels = () => {
  const mainVenue = {
    name: "Hilton Istanbul Kozyatağı",
    rating: 5,
    address: "Kozyatağı, Istanbul, Türkiye",
    phone: "+90 XXX XXX XXXX",
    email: "reservations@hiltonkozyatagi.com",
    features: [
      "State-of-the-art conference facilities",
      "524 luxury rooms and suites",
      "Multiple restaurants and bars",
      "Indoor pool and fitness center",
      "Business center and meeting rooms",
      "Spa and wellness facilities",
      "Free high-speed Wi-Fi",
      "Airport shuttle service"
    ],
    specialRate: "Exclusive summit rates available for delegates"
  };

  const nearbyHotels = [
    {
      name: "Marriott Istanbul Asia",
      rating: 5,
      distance: "2.5 km from venue",
      priceRange: "$$$"
    },
    {
      name: "DoubleTree by Hilton",
      rating: 4,
      distance: "1.8 km from venue",
      priceRange: "$$"
    },
    {
      name: "Radisson Blu Bosphorus",
      rating: 5,
      distance: "3.2 km from venue",
      priceRange: "$$$"
    },
    {
      name: "Novotel Istanbul Kozyatağı",
      rating: 4,
      distance: "1.5 km from venue",
      priceRange: "$$"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={breakfastImg} 
            alt="Hotels" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary-dark/80" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Accommodation & <span className="text-secondary">Hotels</span>
            </h1>
            <p className="text-xl text-gray-200">
              Premium accommodation options for summit delegates
            </p>
          </div>
        </div>
      </section>

      {/* Main Venue Hotel */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">
                Official Venue Hotel
              </h2>
              <p className="text-muted-foreground">
                Experience world-class hospitality at the summit venue
              </p>
            </div>

            <Card className="overflow-hidden">
              <div className="grid md:grid-cols-2">
                <img
                  src={hiltonHotel}
                  alt="Hilton Istanbul Kozyatağı"
                  className="w-full h-full object-cover"
                />
                <div className="p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <h3 className="text-3xl font-bold">{mainVenue.name}</h3>
                    <div className="flex">
                      {[...Array(mainVenue.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                      <span>{mainVenue.address}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-secondary" />
                      <span>{mainVenue.phone}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-secondary" />
                      <span>{mainVenue.email}</span>
                    </div>
                  </div>

                  <div className="bg-secondary/10 p-4 rounded-lg mb-6">
                    <p className="font-semibold text-secondary">{mainVenue.specialRate}</p>
                  </div>

                  <Button 
                    className="btn-secondary w-full"
                    onClick={() => window.open('https://www.booking.com/hotel/tr/hilton-istanbul-kozyatagi-conference-center-amp-spa.en-gb.html?aid=2276376&label=msn-_EQD6VJWF74TAhKkGIpLIg-80333266612016%3Atikwd-80333464073243%3Aloc-137%3Aneo%3Amte%3Alp142650%3Adec%3AqsHilton%20Hotel%2C%20Kozyata%C4%9F%C4%B1%20Istanbul%2C%20T%C3%BCrkiye&sid=67bc506d9f3d38fb9285243cab41aa9c&dest_id=-755070&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=1&hpos=1&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1760222850&srpvid=ab30a0373e93031b&type=total&ucfs=1&', '_blank')}
                  >
                    Book Now
                  </Button>
                </div>
              </div>
            </Card>

            {/* Features Grid */}
            <div className="grid md:grid-cols-4 gap-6 mt-8">
              {[
                { icon: Wifi, label: "Free Wi-Fi" },
                { icon: Coffee, label: "Business Lounge" },
                { icon: Car, label: "Airport Shuttle" },
                { icon: Utensils, label: "Multiple Restaurants" }
              ].map((feature, index) => (
                <Card key={index} className="p-6 text-center hover:border-secondary transition-colors">
                  <feature.icon className="w-8 h-8 text-secondary mx-auto mb-3" />
                  <p className="font-semibold">{feature.label}</p>
                </Card>
              ))}
            </div>

            {/* All Features List */}
            <Card className="p-8 mt-8">
              <h4 className="text-2xl font-bold mb-6">Hotel Features & Amenities</h4>
              <div className="grid md:grid-cols-2 gap-4">
                {mainVenue.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Nearby Hotels */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">
              Nearby <span className="text-secondary">Hotels</span>
            </h2>
            <p className="text-center text-muted-foreground mb-12">
              Alternative accommodation options close to the summit venue
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {nearbyHotels.map((hotel, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-all hover:scale-105">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold">{hotel.name}</h3>
                    <div className="flex">
                      {[...Array(hotel.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
                      ))}
                    </div>
                  </div>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      <span>{hotel.distance}</span>
                    </div>
                    <p className="text-sm">
                      <span className="font-semibold">Price Range:</span> {hotel.priceRange}
                    </p>
                  </div>
                  <Button variant="outline" className="w-full">View Details</Button>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Transportation */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center">
              Getting <span className="text-secondary">There</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">From Sabiha Gökçen Airport</h3>
                <p className="text-muted-foreground mb-4">
                  The venue is approximately 30 minutes from Sabiha Gökçen International Airport.
                </p>
                <ul className="space-y-2 text-sm">
                  <li>• Airport shuttle service available</li>
                  <li>• Taxi: Approximately ₺150-200</li>
                  <li>• Private transfer can be arranged</li>
                </ul>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">From Istanbul Airport</h3>
                <p className="text-muted-foreground mb-4">
                  The venue is approximately 60 minutes from Istanbul Airport.
                </p>
                <ul className="space-y-2 text-sm">
                  <li>• Airport shuttle service available</li>
                  <li>• Taxi: Approximately ₺300-400</li>
                  <li>• Metro + Bus option available</li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Hotels;
