import { BookOpen, Settings, Volume2, VolumeX } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState } from 'react';

interface SidebarProps {
  isOpen: boolean;
}

export function Sidebar({ isOpen }: SidebarProps) {
  const [voiceEnabled, setVoiceEnabled] = useState(true);

  return (
    <aside className={cn(
      "fixed left-0 top-16 z-40 h-[calc(100vh-4rem)] w-72 glass-effect transition-transform duration-300",
      !isOpen && "-translate-x-full"
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
                  {/* change the color on hover to text-white */}
                  <span className="text-primary text-xs hover:bg-white p-1 rounded transition-colors">ON</span>
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
  );
}