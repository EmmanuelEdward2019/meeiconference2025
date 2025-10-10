import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-primary-dark to-background text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Get in <span className="text-secondary">Touch</span>
            </h1>
            <p className="text-xl text-gray-200">
              Have questions about the summit? We're here to help
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-6">
              <Card className="p-6">
                <Mail className="w-8 h-8 text-secondary mb-4" />
                <h3 className="font-semibold mb-2">Email Us</h3>
                <a
                  href="mailto:info@ng-tr-summit.com"
                  className="text-primary hover:text-secondary transition-colors"
                >
                  info@ng-tr-summit.com
                </a>
              </Card>

              <Card className="p-6">
                <Phone className="w-8 h-8 text-secondary mb-4" />
                <h3 className="font-semibold mb-2">Call Us</h3>
                <p className="text-muted-foreground">Nigeria: +234 XXX XXX XXXX</p>
                <p className="text-muted-foreground">Türkiye: +90 XXX XXX XXXX</p>
              </Card>

              <Card className="p-6">
                <MapPin className="w-8 h-8 text-secondary mb-4" />
                <h3 className="font-semibold mb-2">Visit Us</h3>
                <p className="text-muted-foreground">
                  Hilton Hotel, Kozyatağı<br />
                  Istanbul, Türkiye
                </p>
              </Card>

              <Card className="p-6">
                <Clock className="w-8 h-8 text-secondary mb-4" />
                <h3 className="font-semibold mb-2">Office Hours</h3>
                <p className="text-muted-foreground">
                  Monday - Friday<br />
                  9:00 AM - 6:00 PM (GMT+3)
                </p>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="lg:col-span-2 p-8">
              <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      First Name *
                    </label>
                    <Input placeholder="John" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Last Name *
                    </label>
                    <Input placeholder="Doe" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Email Address *
                  </label>
                  <Input type="email" placeholder="john.doe@example.com" />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Phone Number
                  </label>
                  <Input type="tel" placeholder="+234 XXX XXX XXXX" />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Organization
                  </label>
                  <Input placeholder="Your Company Name" />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Subject *
                  </label>
                  <Input placeholder="How can we help you?" />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Message *
                  </label>
                  <Textarea
                    placeholder="Tell us more about your inquiry..."
                    rows={6}
                  />
                </div>

                <Button className="btn-secondary w-full md:w-auto px-12">
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Summit <span className="text-secondary">Location</span>
          </h2>
          <Card className="p-4 max-w-5xl mx-auto">
            <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
              <p className="text-muted-foreground">
                [Map of Hilton Hotel Kozyatağı, Istanbul would be embedded here]
              </p>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
