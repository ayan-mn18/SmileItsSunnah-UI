import { useState } from 'react';
import { ChevronDown, ChevronUp, Globe, Volume2 } from 'lucide-react';
import { Button } from './ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { cn } from '@/lib/utils';
import type { MatchedVerse } from '@/types/chat';

interface VerseCardProps {
  verse: MatchedVerse;
}

export function VerseCard({ verse }: VerseCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayAudio = () => {
    setIsPlaying(true);
    // Simulate audio playing
    setTimeout(() => setIsPlaying(false), 3000);
  };

  return (
    <div className="rounded-lg border border-border/50 bg-secondary/30 overflow-hidden transition-all duration-200">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full px-4 py-3 flex items-center justify-between hover:bg-secondary/50 transition-colors"
      >
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
            <span className="text-primary text-sm font-medium">{verse.verse}</span>
          </div>
          <div className="text-left">
            <h3 className="font-medium">
              Surah {verse.chapterName} - Verse {verse.verse}
            </h3>
            <p className="text-sm text-muted-foreground">Score: {(verse.score * 100).toFixed(1)}% match</p>
          </div>
        </div>
        {isExpanded ? (
          <ChevronUp className="h-5 w-5 text-muted-foreground" />
        ) : (
          <ChevronDown className="h-5 w-5 text-muted-foreground" />
        )}
      </button>

      <div
        className={cn(
          "grid transition-all duration-200",
          isExpanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        )}
      >
        <div className="overflow-hidden">
          <div className="p-4 space-y-4">
            {/* Arabic Text */}
            <div className="flex items-start gap-3">
              <Button
                variant="ghost"
                size="icon"
                className={cn(
                  "mt-1 relative",
                  isPlaying && "text-primary"
                )}
                onClick={handlePlayAudio}
              >
                <Volume2 className="h-4 w-4" />
                {isPlaying && (
                  <span className="absolute inset-0 animate-pulse-ring rounded-full border border-primary" />
                )}
              </Button>
              <p className="font-arabic text-xl leading-relaxed text-right" dir="rtl">
                {verse.arabicText}
              </p>
            </div>

            {/* Translation */}
            <div className="flex items-start gap-3">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="mt-1">
                    <Globe className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>English</DropdownMenuItem>
                  <DropdownMenuItem>Hindi</DropdownMenuItem>
                  <DropdownMenuItem>Gujarati</DropdownMenuItem>
                  <DropdownMenuItem>French</DropdownMenuItem>
                  <DropdownMenuItem>Bengali</DropdownMenuItem>
                  <DropdownMenuItem>Español</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <p className="text-muted-foreground">{verse.text}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}