import { Send, Sparkles } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { FormEvent } from 'react';

interface ChatInputProps {
  onSubmit: (e: FormEvent) => void;
}

export function ChatInput({ onSubmit }: ChatInputProps) {
  return (
    <div className="mt-4">
      <form className="flex gap-2" onSubmit={onSubmit}>
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
  );
}