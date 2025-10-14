import { createContext, useState, ReactNode } from 'react';
import { ChatThread, Message } from '../types/message';

interface ChatContextType {
  threads: ChatThread[];
  messages: Record<string, Message[]>;
  isLoading: boolean;
  fetchThreads: () => Promise<void>;
  fetchMessages: (threadId: string) => Promise<void>;
  sendMessage: (threadId: string, content: string) => Promise<void>;
  markAsRead: (threadId: string) => Promise<void>;
  createThread: (jobId: string, participantIds: string[]) => Promise<ChatThread>;
}

export const ChatContext = createContext<ChatContextType | undefined>(undefined);

export const ChatProvider = ({ children }: { children: ReactNode }) => {
  const [threads, setThreads] = useState<ChatThread[]>([]);
  const [messages, setMessages] = useState<Record<string, Message[]>>({});
  const [isLoading, setIsLoading] = useState(false);

  const fetchThreads = async () => {
    setIsLoading(true);
    try {
      // TODO: Fetch from Firebase
      await new Promise(resolve => setTimeout(resolve, 500));
      setThreads([]);
    } catch (error) {
      console.error('Error fetching threads:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchMessages = async (threadId: string) => {
    setIsLoading(true);
    try {
      // TODO: Fetch from Firebase
      await new Promise(resolve => setTimeout(resolve, 500));
      setMessages(prev => ({ ...prev, [threadId]: [] }));
    } catch (error) {
      console.error('Error fetching messages:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const sendMessage = async (threadId: string, content: string) => {
    // TODO: Send to Firebase
    const newMessage: Message = {
      id: Date.now().toString(),
      threadId,
      senderId: 'current-user',
      senderName: 'Current User',
      content,
      timestamp: new Date().toISOString(),
      read: false
    };

    setMessages(prev => ({
      ...prev,
      [threadId]: [...(prev[threadId] || []), newMessage]
    }));
  };

  const markAsRead = async (threadId: string) => {
    // TODO: Update in Firebase
    setThreads(prev =>
      prev.map(thread =>
        thread.id === threadId ? { ...thread, unreadCount: 0 } : thread
      )
    );
  };

  const createThread = async (jobId: string, participantIds: string[]): Promise<ChatThread> => {
    // TODO: Create in Firebase
    const newThread: ChatThread = {
      id: Date.now().toString(),
      jobId,
      jobTitle: 'Job Title',
      participantIds,
      participants: [],
      unreadCount: 0,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    setThreads(prev => [newThread, ...prev]);
    return newThread;
  };

  return (
    <ChatContext.Provider
      value={{
        threads,
        messages,
        isLoading,
        fetchThreads,
        fetchMessages,
        sendMessage,
        markAsRead,
        createThread
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};
