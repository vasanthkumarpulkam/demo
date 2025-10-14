import { useState, useEffect } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ChatThreadList } from '../components/Chat/ChatThreadList';
import { ChatWindow } from '../components/Chat/ChatWindow';
import { EmptyState } from '../components/Common/EmptyState';
import { useChat } from '../hooks/useChat';
import { useAuth } from '../hooks/useAuth';

export const MessagesPage = () => {
  const { threads, messages, fetchThreads, fetchMessages, sendMessage } = useChat();
  const { user, isAuthenticated } = useAuth();
  const [selectedThreadId, setSelectedThreadId] = useState<string>();

  useEffect(() => {
    if (isAuthenticated) {
      fetchThreads();
    }
  }, [isAuthenticated]);

  useEffect(() => {
    if (selectedThreadId) {
      fetchMessages(selectedThreadId);
    }
  }, [selectedThreadId]);

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Please Sign In</h1>
            <p className="text-gray-600 mb-6">You need to be signed in to view messages</p>
            <a
              href="/signin"
              className="inline-block px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700"
            >
              Sign In
            </a>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const handleSendMessage = async (content: string) => {
    if (selectedThreadId) {
      await sendMessage(selectedThreadId, content);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Messages</h1>

          <div className="bg-white rounded-lg shadow h-[600px] flex">
            {/* Thread List */}
            <div className="w-1/3 border-r border-gray-200 overflow-y-auto">
              <ChatThreadList
                threads={threads}
                selectedThreadId={selectedThreadId}
                onSelectThread={setSelectedThreadId}
              />
            </div>

            {/* Chat Window */}
            <div className="flex-1">
              {selectedThreadId ? (
                <ChatWindow
                  messages={messages[selectedThreadId] || []}
                  currentUserId={user?.id || ''}
                  onSendMessage={handleSendMessage}
                />
              ) : (
                <div className="h-full flex items-center justify-center">
                  <EmptyState
                    icon="💬"
                    title="Select a conversation"
                    description="Choose a conversation from the list to start messaging"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};
