import { VerseCard } from './VerseCard';
import type { Message } from '@/types/chat';

interface ChatMessageProps {
  message: Message;
}

export function ChatMessage({ message }: ChatMessageProps) {
  if (message.type === 'user') {
    return (
      <div className="flex justify-end mb-4">
        <div className="bg-primary/10 text-primary-foreground rounded-lg px-4 py-2 max-w-[80%]">
          <p>{message.content}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="mb-8">
      <div className="bg-secondary/30 rounded-lg px-4 py-3 mb-4">
        <p className="text-foreground">{message.response?.generatedResponse}</p>
      </div>

      {message.response?.matchedVerses.map((verse) => (
        <div key={verse.verseKey} className="mb-3">
          <VerseCard verse={verse} />
        </div>
      ))}
    </div>
  );
}