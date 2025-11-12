import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import About from "./pages/About";
import Speakers from "./pages/Speakers";
import Program from "./pages/Program";
import Contact from "./pages/Contact";
import Sponsorship from "./pages/Sponsorship";
import Partnerships from "./pages/Partnerships";
import Guests from "./pages/Guests";
import Hotels from "./pages/Hotels";
import Register from "./pages/Register";
import Auth from "./pages/Auth";
import Admin from "./pages/Admin";
import Analytics from "./pages/Analytics";
import ThankYou from "./pages/ThankYou";
import NotFound from "./pages/NotFound";
import VisitorTracker from "./components/VisitorTracker";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <VisitorTracker />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/speakers" element={<Speakers />} />
          <Route path="/program" element={<Program />} />
          <Route path="/sponsorship" element={<Sponsorship />} />
          <Route path="/partnerships" element={<Partnerships />} />
          <Route path="/guests" element={<Guests />} />
          <Route path="/hotels" element={<Hotels />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<Register />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/thank-you" element={<ThankYou />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
