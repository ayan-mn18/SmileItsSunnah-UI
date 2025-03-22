import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <div className="min-h-screen bg-background font-sans relative overflow-hidden">
      {/* Background Elements */}
      <div className="fixed inset-0 geometric-pattern opacity-40" />
      <div className="fixed inset-0 bg-gradient-to-b from-background/80 to-background" />

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4">
        <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
          <span className="font-arabic">الله أكبر</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mb-8">
          Discover the wisdom of the Quran and Hadith through our AI-powered Islamic knowledge companion.
        </p>
        <Link to="/chat">
          <Button size="lg" className="bg-primary/10 hover:bg-primary/20 text-primary border-0">
            Start Exploring
          </Button>
        </Link>
      </div>
    </div>
  );
}