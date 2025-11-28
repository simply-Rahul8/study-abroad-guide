import Header from "@/components/Header";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const destinations = [
  {
    country: "United States",
    universities: "500+ Partner Universities",
    image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=800&q=80",
    popular: ["MIT", "Stanford", "Harvard"]
  },
  {
    country: "United Kingdom",
    universities: "150+ Partner Universities",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=80",
    popular: ["Oxford", "Cambridge", "Imperial"]
  },
  {
    country: "Canada",
    universities: "100+ Partner Universities",
    image: "https://images.unsplash.com/photo-1517935706615-2717063c2225?auto=format&fit=crop&w=800&q=80",
    popular: ["Toronto", "UBC", "McGill"]
  },
  {
    country: "Australia",
    universities: "80+ Partner Universities",
    image: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&w=800&q=80",
    popular: ["Melbourne", "Sydney", "ANU"]
  }
];

const Destinations = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Study Destinations
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore top destinations and find the perfect country for your educational journey
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {destinations.map((dest) => (
            <Card key={dest.country} className="overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="relative h-64">
                <img 
                  src={dest.image}
                  alt={dest.country}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-1">{dest.country}</h3>
                  <p className="text-sm opacity-90">{dest.universities}</p>
                </div>
              </div>
              
              <div className="p-6">
                <div className="mb-4">
                  <p className="text-sm font-semibold text-muted-foreground mb-2">Popular Universities:</p>
                  <div className="flex flex-wrap gap-2">
                    {dest.popular.map((uni) => (
                      <span key={uni} className="px-3 py-1 bg-secondary/10 text-secondary text-sm rounded-full">
                        {uni}
                      </span>
                    ))}
                  </div>
                </div>
                
                <Button className="w-full" variant="outline">
                  Explore {dest.country}
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Destinations;
