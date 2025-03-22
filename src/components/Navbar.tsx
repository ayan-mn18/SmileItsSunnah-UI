import { Menu } from 'lucide-react';
import { Button } from "@/components/ui/button";

interface NavbarProps {
  onToggleSidebar: () => void;
}

export function Navbar({ onToggleSidebar }: NavbarProps) {
  return (
    <nav className="fixed top-0 z-50 w-full glass-effect">
      <div className="flex h-16 items-center px-4 gap-4">
        <Button variant="ghost" size="icon" onClick={onToggleSidebar}>
          <Menu className="h-5 w-5" />
        </Button>

        <span className="text-2xl font-bold tracking-wider bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
          SmileItsSunnah
        </span>

        <div className="flex-1" />

        <div className="hidden md:flex items-center gap-1">
          <Button variant="ghost" className="text-sm hover:bg-secondary/50">
            Home
          </Button>
          <Button variant="ghost" className="text-sm hover:bg-secondary/50">
            About
          </Button>
          <Button variant="ghost" className="text-sm hover:bg-secondary/50">
            Contact
          </Button>
        </div>
      </div>
    </nav>
  );
}