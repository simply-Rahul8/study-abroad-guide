import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Users, Target, BookOpen, Award, Globe, Heart } from "lucide-react";

const valueBlocks = [
  {
    number: "01",
    icon: Users,
    title: "Personalized Guidance",
    description: "One-on-one counseling tailored to your academic goals and career aspirations."
  },
  {
    number: "02",
    icon: Target,
    title: "End-to-End Support",
    description: "From university selection to visa assistance, we're with you every step of the way."
  },
  {
    number: "03",
    icon: Award,
    title: "Scholarship Insights",
    description: "Access exclusive scholarship opportunities and funding guidance to make education affordable."
  },
  {
    number: "04",
    icon: BookOpen,
    title: "Application Excellence",
    description: "Expert help crafting compelling essays and preparing for interviews that stand out."
  },
  {
    number: "05",
    icon: Globe,
    title: "Global Network",
    description: "Connected with 500+ universities worldwide ensuring you find the perfect match."
  },
  {
    number: "06",
    icon: Heart,
    title: "Student-First Approach",
    description: "Your success is our mission. We celebrate each milestone in your journey with you."
  }
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 mb-16">
          {/* Left Column - Motivational Copy */}
          <div className="lg:col-span-2 flex flex-col justify-center space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
                Start your abroad journey
              </h1>
              <h2 className="text-3xl md:text-4xl font-semibold text-foreground/90 leading-tight">
                with the right team by your side
              </h2>
              <p className="text-lg text-muted-foreground pt-2">
                Fill the form and our academic advisor will get in touch with you
              </p>
            </div>
            
            <Link to="/contact" className="w-fit">
              <Button size="lg" className="gap-2">
                Talk to an Academic Advisor
              </Button>
            </Link>
          </div>
          
          {/* Right Column - Value Blocks Grid */}
          <div className="lg:col-span-3">
            <div className="text-right mb-8">
              <h3 className="text-2xl font-bold text-primary">Value of Our Consultation</h3>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {valueBlocks.map((block) => {
                const Icon = block.icon;
                return (
                  <Card key={block.number} className="p-6 hover:shadow-lg transition-all duration-300 border-border bg-surface">
                    <div className="space-y-3">
                      <div className="flex items-start justify-between">
                        <span className="text-sm font-bold text-accent">{block.number}</span>
                        <Icon className="h-5 w-5 text-secondary" />
                      </div>
                      <h4 className="text-lg font-semibold text-foreground">{block.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {block.description}
                      </p>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
        
        {/* Bottom Image */}
        <div className="mt-12 rounded-2xl overflow-hidden shadow-lg">
          <img 
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1920&q=80"
            alt="Students collaborating and studying together"
            className="w-full h-[400px] object-cover"
          />
        </div>
      </main>
    </div>
  );
};

export default About;
