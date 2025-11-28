import Header from "@/components/Header";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login attempt with:", email);
  };
  
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 flex items-center justify-center">
        <Card className="w-full max-w-md p-8 bg-surface shadow-lg">
          <div className="space-y-6">
            <div className="text-center">
              <h1 className="text-3xl font-bold text-foreground mb-2">Login to Your Account</h1>
              <p className="text-muted-foreground">Access your application dashboard</p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input 
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input 
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              
              <div className="flex items-center space-x-2">
                <Checkbox id="remember" />
                <label
                  htmlFor="remember"
                  className="text-sm text-muted-foreground cursor-pointer"
                >
                  Remember me
                </label>
              </div>
              
              <Button type="submit" className="w-full" size="lg">
                Login
              </Button>
            </form>
            
            <div className="text-center space-y-2">
              <a href="#" className="text-sm text-accent hover:underline block">
                Forgot password?
              </a>
              <p className="text-sm text-muted-foreground">
                New here?{" "}
                <span className="text-primary font-medium cursor-pointer hover:underline">
                  Create an account
                </span>
              </p>
            </div>
          </div>
        </Card>
      </main>
    </div>
  );
};

export default Login;
