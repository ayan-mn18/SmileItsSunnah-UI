import { useState } from 'react';
import { Menu, MessageCircle, Settings, Home, Info, Mail, Sparkles, BookOpen, Volume2, VolumeX, Send } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [voiceEnabled, setVoiceEnabled] = useState(true);

  return (
    <div className="min-h-screen bg-background font-sans relative overflow-hidden">
      {/* Background Elements */}
      <div className="fixed inset-0 geometric-pattern opacity-40" />
      <div className="fixed inset-0 bg-gradient-to-b from-background/80 to-background" />

      {/* Navigation Bar */}
      <nav className="fixed top-0 z-50 w-full glass-effect">
        <div className="flex h-16 items-center px-4 gap-4">
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setSidebarOpen(!sidebarOpen)}>
            <Menu className="h-5 w-5" />
          </Button>
          
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-full animate-pulse-ring" />
              <div className="relative bg-primary/10 p-2 rounded-full">
                <MessageCircle className="h-6 w-6 text-primary" />
              </div>
            </div>
            <span className="text-2xl font-bold tracking-wider bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              SmileItsSunnah
            </span>
          </div>

          <div className="flex-1" />

          <div className="hidden md:flex items-center gap-1">
            <Button variant="ghost" className="text-sm hover:bg-primary/10 hover:text-primary">
              Home
            </Button>
            <Button variant="ghost" className="text-sm hover:bg-primary/10 hover:text-primary">
              About
            </Button>
            <Button variant="ghost" className="text-sm hover:bg-primary/10 hover:text-primary">
              Contact
            </Button>
          </div>
        </div>
      </nav>

      <div className="flex h-[calc(100vh-4rem)] pt-16">
        {/* Sidebar */}
        <aside className={cn(
          "fixed left-0 top-16 z-40 h-[calc(100vh-4rem)] w-72 glass-effect transition-transform",
          !sidebarOpen && "-translate-x-full md:translate-x-0"
        )}>
          <div className="flex h-full flex-col p-4">
            <div className="space-y-6">
              <div>
                <h2 className="text-lg font-semibold mb-3 text-primary/90">Knowledge Base</h2>
                <div className="space-y-2">
                  <Button variant="ghost" className="w-full justify-start gap-2 hover:bg-primary/10 hover:text-primary text-sm h-9">
                    <BookOpen className="h-4 w-4" />
                    Quran
                  </Button>
                  <Button variant="ghost" className="w-full justify-start gap-2 hover:bg-primary/10 hover:text-primary text-sm h-9">
                    <BookOpen className="h-4 w-4" />
                    Hadith
                  </Button>
                </div>
              </div>

              <div>
                <h2 className="text-lg font-semibold mb-3 text-primary/90">Voice Settings</h2>
                <Button
                  variant="outline"
                  className="w-full justify-between text-sm h-9 bg-secondary/50"
                  onClick={() => setVoiceEnabled(!voiceEnabled)}
                >
                  {voiceEnabled ? (
                    <>
                      <span className="flex items-center gap-2">
                        <Volume2 className="h-4 w-4" />
                        Voice Enabled
                      </span>
                      <span className="text-primary text-xs">ON</span>
                    </>
                  ) : (
                    <>
                      <span className="flex items-center gap-2">
                        <VolumeX className="h-4 w-4" />
                        Voice Disabled
                      </span>
                      <span className="text-muted-foreground text-xs">OFF</span>
                    </>
                  )}
                </Button>
              </div>

              <div>
                <h2 className="text-lg font-semibold mb-3 text-primary/90">Settings</h2>
                <Button variant="ghost" className="w-full justify-start gap-2 hover:bg-primary/10 hover:text-primary text-sm h-9">
                  <Settings className="h-4 w-4" />
                  Preferences
                </Button>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content / Chat Interface */}
        <main className={cn(
          "flex-1 relative px-4 transition-[margin]",
          sidebarOpen ? "md:ml-72" : ""
        )}>
          <div className="h-full rounded-lg glass-effect p-4">
            <div className="flex h-full flex-col">
              {/* Chat messages */}
              <div className="flex-1 overflow-auto">
                <div className="flex flex-col items-center justify-center h-full text-center px-4">
                  <div className="relative mb-8">
                    <div className="absolute inset-0 bg-primary/20 rounded-full animate-pulse" />
                    <div className="relative bg-primary/10 p-6 rounded-full">
                      <MessageCircle className="h-12 w-12 text-primary" />
                    </div>
                  </div>
                  <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                    <span className="font-arabic">الله أكبر</span>
                  </h1>
                  <p className="text-muted-foreground text-lg max-w-md">
                    Your AI companion for understanding the Quran and Hadith. Ask any question to begin your journey of knowledge.
                  </p>
                </div>
              </div>

              {/* Chat input */}
              <div className="mt-4">
                <form className="flex gap-2">
                  <div className="relative flex-1">
                    <input
                      type="text"
                      placeholder="Ask your question..."
                      className="w-full h-12 rounded-lg bg-secondary/50 px-4 pr-12 
                        border border-border/50 focus:border-primary/50 focus:ring-1 focus:ring-primary/20
                        placeholder:text-muted-foreground text-sm transition-colors"
                    />
                    <Sparkles className="absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-primary/40" />
                  </div>
                  <Button type="submit" size="icon" className="h-12 w-12 bg-primary/10 hover:bg-primary/20 text-primary border-0">
                    <Send className="h-5 w-5" />
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;