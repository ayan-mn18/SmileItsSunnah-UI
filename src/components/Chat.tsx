import { useState, FormEvent, forwardRef, useImperativeHandle } from 'react';
import { ChatInput } from './ChatInput';
import { ChatWelcome } from './ChatWelcome';
import { ChatMessage } from './ChatMessage';
import type { Message, ChatResponse } from '@/types/chat';

interface ChatRef {
  handleQuery: (query: string) => Promise<void>;
}

export const Chat = forwardRef<ChatRef>((_, ref) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const processQuery = async (query: string) => {
    if (!query) return;

    // Add user message immediately
    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: query
    };

    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);

    try {
      const response = await fetch('http://localhost:313/api/quran/query', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query,
          lang: 'en'
        })
      });

      if (!response.ok) {
        throw new Error('Failed to fetch response');
      }

      const data: ChatResponse = await response.json();

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'assistant',
        content: data.generatedResponse,
        response: data
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Error fetching response:', error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'assistant',
        content: 'I apologize, but I encountered an error while processing your request. Please try again.',
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const input = form.querySelector('input') as HTMLInputElement;
    const query = input.value.trim();

    if (!query) return;

    input.value = '';
    await processQuery(query);
  };

  useImperativeHandle(ref, () => ({
    handleQuery: processQuery
  }), []);

  return (
    <div className="w-[85%] h-[calc(100vh-8rem)] rounded-lg glass-effect p-6">
      <div className="flex h-full flex-col">
        <div className="flex-1 overflow-y-auto custom-scrollbar pr-4 -mr-4">
          {messages.length === 0 ? (
            <ChatWelcome />
          ) : (
            <div className="space-y-4">
              {messages.map(message => (
                <ChatMessage key={message.id} message={message} />
              ))}
            </div>
          )}
        </div>
        <ChatInput onSubmit={handleSubmit} isLoading={isLoading} />
      </div>
    </div>
  );
});

Chat.displayName = 'Chat';