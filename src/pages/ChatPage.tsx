import { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Sidebar } from '@/components/Sidebar';
import { Chat } from '@/components/Chat';

export function ChatPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background font-sans relative overflow-hidden">
      {/* Background Elements */}
      <div className="fixed inset-0 geometric-pattern opacity-40" />
      <div className="fixed inset-0 bg-gradient-to-b from-background/80 to-background" />

      <Navbar onToggleSidebar={() => setSidebarOpen(!sidebarOpen)} />

      <div className="flex min-h-screen">
        <Sidebar isOpen={sidebarOpen} />

        <main className="flex-1 w-full flex justify-center px-4 py-8 mt-16">
          <Chat />
        </main>
      </div>
    </div>
  );
}