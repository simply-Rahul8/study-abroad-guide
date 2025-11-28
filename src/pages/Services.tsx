import Header from "@/components/Header";
import { Card } from "@/components/ui/card";
import { FileText, GraduationCap, Plane, DollarSign, Users, CheckCircle } from "lucide-react";

const services = [
  {
    icon: Users,
    title: "Career Counseling",
    description: "Personalized guidance to align your academic choices with career goals and aspirations."
  },
  {
    icon: GraduationCap,
    title: "University Selection",
    description: "Expert recommendations for universities that match your profile, preferences, and budget."
  },
  {
    icon: FileText,
    title: "Application Assistance",
    description: "Complete support with documentation, essays, and application submission processes."
  },
  {
    icon: DollarSign,
    title: "Scholarship Guidance",
    description: "Identify and apply for scholarships and financial aid opportunities worldwide."
  },
  {
    icon: CheckCircle,
    title: "Test Preparation",
    description: "Comprehensive coaching for IELTS, TOEFL, GRE, GMAT, and other standardized tests."
  },
  {
    icon: Plane,
    title: "Visa & Travel Support",
    description: "End-to-end visa application guidance and pre-departure orientation sessions."
  }
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            How We Help You
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive services designed to support every step of your study abroad journey
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Card key={service.title} className="p-8 hover:shadow-lg transition-all duration-300 border-border bg-surface group">
                <div className="space-y-4">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default Services;
