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
                <a href="mailto:info@meeiprogram.org" className="hover:text-secondary transition-colors">
                  info@meeiprogram.org
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={16} className="text-secondary" />
                <span className="text-sm">TR: +44 7555 470238 | NG: +905319657443</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-secondary">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/share/c4qNuBD1632vVf7n/?mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://youtube.com/@meeiprogram?si=dOSqmVexDsco9YgC" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>
              </a>
              <a href="https://www.linkedin.com/company/mindshift-empowerment-and-employment-initiative/" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://www.instagram.com/meeiprogram/profilecard/?igsh=MTR0YWVuaGF3OGQ2eg==" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 text-center text-sm text-gray-400">
          <p>&copy; 2025 Nigeria-Türkiye Business & Investment Summit. All rights reserved. | Designed by <a href="https://techfieldsdigital.com.ng" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:text-orange-400 transition-colors">Techfields</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
