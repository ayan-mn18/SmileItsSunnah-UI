import { useState, useEffect, useRef } from 'react';
import { Navbar } from '@/components/Navbar';
import { Sidebar } from '@/components/Sidebar';
import { Chat } from '@/components/Chat';

interface ElevenLabsEvent {
  detail: {
    type: string;
    payload: {
      text?: string;
    };
  };
}

interface ChatRef {
  handleQuery: (query: string) => Promise<void>;
}

export function ChatPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const chatRef = useRef<ChatRef>(null);

  useEffect(() => {
    const handleWidgetMessage = async (event: ElevenLabsEvent) => {
      if (event.detail.type === 'message' && event.detail.payload.text) {
        const query = event.detail.payload.text;

        if (chatRef.current) {
          await chatRef.current.handleQuery(query);
        }
      }
    };

    window.addEventListener('elevenlabs-widget-message', handleWidgetMessage as any);

    return () => {
      window.removeEventListener('elevenlabs-widget-message', handleWidgetMessage as any);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background font-sans relative overflow-hidden">
      {/* Background Elements */}
      <div className="fixed inset-0 geometric-pattern opacity-40" />
      <div className="fixed inset-0 bg-gradient-to-b from-background/80 to-background" />

      <Navbar onToggleSidebar={() => setSidebarOpen(!sidebarOpen)} />

      <div className="flex min-h-screen">
        <Sidebar isOpen={sidebarOpen} />

        <main className="flex-1 w-full flex justify-center px-4 py-8 mt-16">
          <Chat ref={chatRef} />
        </main>
        {/* ElevenLabs Widget */}
        <elevenlabs-convai agent-id="vwOq0wowuqldjmCqpZ5P"></elevenlabs-convai>
      </div>
    </div>
  );
}