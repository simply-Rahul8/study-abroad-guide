import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
            Your Journey to Study Abroad{" "}
            <span className="text-primary">Starts Here</span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Expert guidance and personalized support to help you achieve your dream of studying at top universities worldwide.
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
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
