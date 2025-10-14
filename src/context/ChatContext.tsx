import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Chat, Message } from '../types/message';

interface ChatContextType {
  chats: Chat[];
  currentChat: Chat | null;
  messages: Message[];
  isLoading: boolean;
  error: string | null;
  fetchChats: () => Promise<void>;
  fetchMessages: (chatId: string) => Promise<void>;
  sendMessage: (chatId: string, content: string, type?: 'text' | 'image' | 'file') => Promise<void>;
  createChat: (jobId: string, participantIds: string[]) => Promise<string>;
  markAsRead: (chatId: string) => void;
  setCurrentChat: (chat: Chat | null) => void;
}

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export const useChat = () => {
  const context = useContext(ChatContext);
  if (context === undefined) {
    throw new Error('useChat must be used within a ChatProvider');
  }
  return context;
};

interface ChatProviderProps {
  children: ReactNode;
}

export const ChatProvider: React.FC<ChatProviderProps> = ({ children }) => {
  const [chats, setChats] = useState<Chat[]>([]);
  const [currentChat, setCurrentChat] = useState<Chat | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchChats();
  }, []);

  const fetchChats = async (): Promise<void> => {
    setIsLoading(true);
    setError(null);
    try {
      // TODO: Replace with actual API call
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API delay
      
      // Mock data for now
      const mockChats: Chat[] = [
        {
          id: '1',
          jobId: '1',
          participants: ['user-1', 'provider-1'],
          lastActivity: new Date(),
          isActive: true,
          unreadCount: 2,
        },
        {
          id: '2',
          jobId: '2',
          participants: ['user-1', 'provider-2'],
          lastActivity: new Date(Date.now() - 86400000), // 1 day ago
          isActive: true,
          unreadCount: 0,
        },
      ];
      
      setChats(mockChats);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch chats');
    } finally {
      setIsLoading(false);
    }
  };

  const fetchMessages = async (chatId: string): Promise<void> => {
    setIsLoading(true);
    setError(null);
    try {
      // TODO: Replace with actual API call
      await new Promise(resolve => setTimeout(resolve, 500)); // Simulate API delay
      
      // Mock data for now
      const mockMessages: Message[] = [
        {
          id: '1',
          chatId,
          senderId: 'provider-1',
          content: 'Hello! I\'m interested in your React Native project.',
          type: 'text',
          timestamp: new Date(Date.now() - 3600000), // 1 hour ago
          isRead: true,
          sender: {
            id: 'provider-1',
            name: 'Alex Rodriguez',
            email: 'alex@example.com',
            role: 'provider',
            joinedAt: new Date(),
            isVerified: true,
          },
        },
        {
          id: '2',
          chatId,
          senderId: 'user-1',
          content: 'Great! Can you tell me more about your experience with React Native?',
          type: 'text',
          timestamp: new Date(Date.now() - 1800000), // 30 minutes ago
          isRead: true,
          sender: {
            id: 'user-1',
            name: 'John Smith',
            email: 'john@example.com',
            role: 'customer',
            joinedAt: new Date(),
            isVerified: true,
          },
        },
        {
          id: '3',
          chatId,
          senderId: 'provider-1',
          content: 'I have 5+ years of experience with React Native and have built 20+ mobile apps. Here\'s my portfolio: [portfolio link]',
          type: 'text',
          timestamp: new Date(Date.now() - 900000), // 15 minutes ago
          isRead: false,
          sender: {
            id: 'provider-1',
            name: 'Alex Rodriguez',
            email: 'alex@example.com',
            role: 'provider',
            joinedAt: new Date(),
            isVerified: true,
          },
        },
      ];
      
      setMessages(mockMessages);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch messages');
    } finally {
      setIsLoading(false);
    }
  };

  const sendMessage = async (chatId: string, content: string, type: 'text' | 'image' | 'file' = 'text'): Promise<void> => {
    setIsLoading(true);
    try {
      // TODO: Replace with actual API call
      const newMessage: Message = {
        id: Date.now().toString(),
        chatId,
        senderId: 'current-user', // TODO: Get from auth context
        content,
        type,
        timestamp: new Date(),
        isRead: false,
        sender: {
          id: 'current-user',
          name: 'Current User',
          email: 'user@example.com',
          role: 'customer',
          joinedAt: new Date(),
          isVerified: true,
        },
      };
      
      setMessages(prev => [...prev, newMessage]);
      
      // Update chat's last activity
      setChats(prev => prev.map(chat => 
        chat.id === chatId 
          ? { ...chat, lastActivity: new Date(), lastMessage: newMessage }
          : chat
      ));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to send message');
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const createChat = async (jobId: string, participantIds: string[]): Promise<string> => {
    setIsLoading(true);
    try {
      // TODO: Replace with actual API call
      const newChat: Chat = {
        id: Date.now().toString(),
        jobId,
        participants: participantIds,
        lastActivity: new Date(),
        isActive: true,
        unreadCount: 0,
      };
      
      setChats(prev => [newChat, ...prev]);
      return newChat.id;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to create chat');
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const markAsRead = (chatId: string): void => {
    setChats(prev => prev.map(chat => 
      chat.id === chatId 
        ? { ...chat, unreadCount: 0 }
        : chat
    ));
    
    setMessages(prev => prev.map(message => 
      message.chatId === chatId 
        ? { ...message, isRead: true }
        : message
    ));
  };

  const value: ChatContextType = {
    chats,
    currentChat,
    messages,
    isLoading,
    error,
    fetchChats,
    fetchMessages,
    sendMessage,
    createChat,
    markAsRead,
    setCurrentChat,
  };

  return (
    <ChatContext.Provider value={value}>
      {children}
    </ChatContext.Provider>
  );
};