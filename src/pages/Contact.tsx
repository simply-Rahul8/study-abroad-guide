import Header from "@/components/Header";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    toast({
      title: "Message sent!",
      description: "Our academic advisor will contact you soon.",
    });
    
    setTimeout(() => setSubmitted(false), 5000);
  };
  
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Get in Touch
            </h1>
            <p className="text-xl text-muted-foreground">
              Have questions? We're here to help you every step of the way
            </p>
          </div>
          
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Left Column - Contact Info */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  Contact Information
                </h2>
                <p className="text-muted-foreground mb-6">
                  Feel free to reach out with any questions about studying abroad. Our team of expert advisors is ready to assist you.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">Phone</p>
                    <a href="tel:+001234567890" className="text-muted-foreground hover:text-primary transition-colors">
                      +00 123 456 7890
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">Email</p>
                    <a href="mailto:info@exampleconsultancy.com" className="text-muted-foreground hover:text-secondary transition-colors">
                      info@exampleconsultancy.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">Office</p>
                    <p className="text-muted-foreground">
                      Available for virtual consultations worldwide
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Column - Contact Form */}
            <div className="lg:col-span-3">
              <Card className="p-8 bg-surface shadow-lg">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input 
                      id="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input 
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="country">Country of Interest</Label>
                    <Input 
                      id="country"
                      placeholder="e.g., United States, United Kingdom"
                      value={formData.country}
                      onChange={(e) => setFormData({...formData, country: e.target.value})}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message / Questions *</Label>
                    <Textarea 
                      id="message"
                      placeholder="Tell us about your study abroad goals and any questions you have..."
                      rows={6}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      required
                    />
                  </div>
                  
                  <Button type="submit" size="lg" className="w-full">
                    Send Message
                  </Button>
                  
                  {submitted && (
                    <p className="text-center text-sm text-secondary font-medium">
                      Thank you! Our academic advisor will contact you soon.
                    </p>
                  )}
                </form>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;
