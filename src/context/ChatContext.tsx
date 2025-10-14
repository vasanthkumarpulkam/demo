import React, { createContext, useState, ReactNode } from 'react';
import { Message, ChatThread } from '../types/message';

interface ChatContextType {
  threads: ChatThread[];
  messages: Message[];
  activeThreadId: string | null;
  setActiveThreadId: (id: string | null) => void;
  getThreadById: (id: string) => ChatThread | undefined;
  getMessagesByThreadId: (threadId: string) => Message[];
  createThread: (participants: string[], participantNames: string[], jobId?: string, jobTitle?: string) => ChatThread;
  sendMessage: (threadId: string, senderId: string, senderName: string, content: string) => void;
  markThreadAsRead: (threadId: string) => void;
}

export const ChatContext = createContext<ChatContextType | undefined>(undefined);

export const ChatProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [threads, setThreads] = useState<ChatThread[]>([]);
  const [messages, setMessages] = useState<Message[]>([]);
  const [activeThreadId, setActiveThreadId] = useState<string | null>(null);

  const getThreadById = (id: string) => {
    return threads.find(thread => thread.id === id);
  };

  const getMessagesByThreadId = (threadId: string) => {
    return messages.filter(msg => msg.threadId === threadId);
  };

  const createThread = (
    participants: string[], 
    participantNames: string[], 
    jobId?: string, 
    jobTitle?: string
  ): ChatThread => {
    const existingThread = threads.find(t => 
      t.participants.every(p => participants.includes(p)) &&
      participants.every(p => t.participants.includes(p))
    );

    if (existingThread) {
      return existingThread;
    }

    const newThread: ChatThread = {
      id: Math.random().toString(36).substr(2, 9),
      participants,
      participantNames,
      lastMessage: {
        id: '',
        threadId: '',
        senderId: '',
        senderName: '',
        content: '',
        timestamp: new Date().toISOString(),
        read: true
      },
      unreadCount: 0,
      jobId,
      jobTitle,
      createdAt: new Date().toISOString()
    };

    setThreads(prev => [newThread, ...prev]);
    return newThread;
  };

  const sendMessage = (threadId: string, senderId: string, senderName: string, content: string) => {
    const newMessage: Message = {
      id: Math.random().toString(36).substr(2, 9),
      threadId,
      senderId,
      senderName,
      content,
      timestamp: new Date().toISOString(),
      read: false
    };

    setMessages(prev => [...prev, newMessage]);

    // Update thread's last message
    setThreads(prev => prev.map(thread => 
      thread.id === threadId
        ? {
            ...thread,
            lastMessage: newMessage,
            unreadCount: thread.unreadCount + 1
          }
        : thread
    ));
  };

  const markThreadAsRead = (threadId: string) => {
    setThreads(prev => prev.map(thread =>
      thread.id === threadId
        ? { ...thread, unreadCount: 0 }
        : thread
    ));

    setMessages(prev => prev.map(msg =>
      msg.threadId === threadId && !msg.read
        ? { ...msg, read: true }
        : msg
    ));
  };

  return (
    <ChatContext.Provider value={{
      threads,
      messages,
      activeThreadId,
      setActiveThreadId,
      getThreadById,
      getMessagesByThreadId,
      createThread,
      sendMessage,
      markThreadAsRead
    }}>
      {children}
    </ChatContext.Provider>
  );
};
