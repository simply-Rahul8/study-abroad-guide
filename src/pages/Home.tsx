import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import EuropeMap from "@/components/EuropeMap";

const Home = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background image with 50% opacity */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50"
        style={{ backgroundImage: "url('/Homepage%20background.jpg')" }}
      />
      <Header />
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
            Your Journey to Study Abroad{" "}
            <span className="text-primary">Starts Here</span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Expert guidance and personalized support to help you achieve your dream of studying at top universities across European countries.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link to="/about">
              <Button size="lg" className="gap-2">
                Get Started <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link to="/destinations">
              <Button size="lg" variant="outline">
                Explore Destinations
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="gap-2">
                <Phone className="h-4 w-4" /> Contact Us
              </Button>
            </Link>
          </div>
        </div>
        
        {/* European Map Section */}
        <div className="mt-20">
          <EuropeMap />
        </div>
      </main>
    </div>
  );
};

export default Home;
