import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-hero-overlay text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <img src={logo} alt="MEEI Conference" className="h-16 mb-4" />
            <p className="text-gray-300 text-sm">
              Driving industrial growth and economic stability through strategic manufacturing partnerships.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-secondary">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-secondary transition-colors">About</Link></li>
              <li><Link to="/speakers" className="hover:text-secondary transition-colors">Speakers</Link></li>
              <li><Link to="/sponsorship" className="hover:text-secondary transition-colors">Sponsorship</Link></li>
              <li><Link to="/partnerships" className="hover:text-secondary transition-colors">Partnerships</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-secondary">Contact Info</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <MapPin size={16} className="mt-1 text-secondary flex-shrink-0" />
                <span>Hilton Hotel, Kozyatağı Istanbul, Türkiye</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={16} className="text-secondary" />
                <a href="mailto:info@ng-tr-summit.com" className="hover:text-secondary transition-colors">
                  info@ng-tr-summit.com
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={16} className="text-secondary" />
                <span>+90 XXX XXX XXXX</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-secondary">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-secondary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-secondary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-secondary transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="hover:text-secondary transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 text-center text-sm text-gray-400">
          <p>&copy; 2025 Nigeria-Türkiye Business & Investment Summit. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
