import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ChatThreadList } from '../components/Chat/ChatThreadList';
import { ChatWindow } from '../components/Chat/ChatWindow';
import { useChat } from '../hooks/useChat';
import { useAuth } from '../hooks/useAuth';

export const MessagesPage: React.FC = () => {
  const { activeThreadId } = useChat();
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    window.location.href = '/signin';
    return null;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Messages</h1>
          
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            <div className="grid md:grid-cols-3 h-[600px]">
              {/* Thread List */}
              <div className="md:col-span-1 border-r border-gray-200 overflow-y-auto">
                <ChatThreadList />
              </div>

              {/* Chat Window */}
              <div className="md:col-span-2">
                {activeThreadId ? (
                  <ChatWindow threadId={activeThreadId} />
                ) : (
                  <div className="flex items-center justify-center h-full text-gray-500">
                    Select a conversation to start messaging
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};
