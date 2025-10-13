import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const ThankYou = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow flex items-center justify-center px-4 py-12">
        <div className="max-w-2xl w-full text-center space-y-8">
          <div className="flex justify-center">
            <CheckCircle2 className="w-24 h-24 text-primary animate-in zoom-in duration-500" />
          </div>
          
          <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Thank You for Registering!
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-xl mx-auto">
              Your registration for the Türkiye–Nigeria Business & Investment Summit 2025 has been successfully submitted.
            </p>
          </div>

          <div className="bg-card border rounded-lg p-6 space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <h2 className="text-2xl font-semibold text-foreground">What's Next?</h2>
            <div className="text-left space-y-3 text-muted-foreground">
              <p className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                <span>You will receive a confirmation email shortly with your registration details.</span>
              </p>
              <p className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                <span>Our team will contact you within 24-48 hours regarding the next steps.</span>
              </p>
              <p className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                <span>Please check your spam folder if you don't see our email in your inbox.</span>
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button 
              size="lg" 
              onClick={() => navigate("/")}
              className="min-w-[200px]"
            >
              Back to Home
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => navigate("/program")}
              className="min-w-[200px]"
            >
              View Program
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ThankYou;
