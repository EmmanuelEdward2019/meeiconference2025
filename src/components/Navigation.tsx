import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Speakers", path: "/speakers" },
    { name: "Sponsorship", path: "/sponsorship" },
    { name: "Strategic Partnerships", path: "/partnerships" },
    { name: "Executive Guests", path: "/guests" },
    { name: "Hotels", path: "/hotels" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-hero-overlay/95 backdrop-blur-md z-50 border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-3">
            <img src={logo} alt="MEEI Conference" className="h-12" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-secondary ${
                  location.pathname === item.path
                    ? "text-secondary"
                    : "text-white"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link to="/register">
              <Button className="btn-secondary">REGISTER NOW</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 animate-fade-in">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block py-3 text-sm font-medium transition-colors hover:text-secondary ${
                  location.pathname === item.path
                    ? "text-secondary"
                    : "text-white"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link to="/register" onClick={() => setIsOpen(false)}>
              <Button className="btn-secondary w-full mt-4">REGISTER NOW</Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
