import { Link, useLocation } from "react-router-dom";
import { GraduationCap } from "lucide-react";
import { Button } from "./ui/button";

const Header = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-surface/95 backdrop-blur supports-[backdrop-filter]:bg-surface/80">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <GraduationCap className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-foreground">EduConsult</span>
          </Link>
          
          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            <Link to="/destinations">
              <Button 
                variant={isActive("/destinations") ? "secondary" : "ghost"}
                className="font-medium"
              >
                Study Destinations
              </Button>
            </Link>
            <Link to="/services">
              <Button 
                variant={isActive("/services") ? "secondary" : "ghost"}
                className="font-medium"
              >
                Services
              </Button>
            </Link>
            <Link to="/about">
              <Button 
                variant={isActive("/about") ? "secondary" : "ghost"}
                className="font-medium"
              >
                About
              </Button>
            </Link>
            <Link to="/contact">
              <Button 
                variant={isActive("/contact") ? "secondary" : "ghost"}
                className="font-medium"
              >
                Contact
              </Button>
            </Link>
            <Link to="/login">
              <Button 
                variant={isActive("/login") ? "default" : "outline"}
                className="ml-2"
              >
                Login
              </Button>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
