import { MessageCircle } from 'lucide-react';

export function ChatWelcome() {
  return (
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
  );
}