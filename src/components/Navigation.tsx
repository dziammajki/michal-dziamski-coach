import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-background border-b border-border sticky top-0 z-50 backdrop-blur-sm bg-background/95">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-xl font-semibold text-foreground hover:text-primary transition-colors">
            Michał Dziamski
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <Link
              to="/"
              className={cn(
                "px-3 py-2 text-sm font-medium transition-colors hover:text-primary",
                isActive("/") ? "text-primary border-b-2 border-primary" : "text-foreground"
              )}
            >
              Strona główna
            </Link>
            <Link
              to="/oferta"
              className={cn(
                "px-3 py-2 text-sm font-medium transition-colors hover:text-primary",
                isActive("/oferta") ? "text-primary border-b-2 border-primary" : "text-foreground"
              )}
            >
              Oferta szkoleń
            </Link>
            <Link
              to="/o-mnie"
              className={cn(
                "px-3 py-2 text-sm font-medium transition-colors hover:text-primary",
                isActive("/o-mnie") ? "text-primary border-b-2 border-primary" : "text-foreground"
              )}
            >
              O mnie
            </Link>
            <Link
              to="/kontakt"
              className={cn(
                "px-3 py-2 text-sm font-medium transition-colors hover:text-primary",
                isActive("/kontakt") ? "text-primary border-b-2 border-primary" : "text-foreground"
              )}
            >
              Kontakt
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;