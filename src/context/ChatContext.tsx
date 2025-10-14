import React, { createContext, useState, useContext } from "react";
import { ChatThread, Message } from "../types/message";

interface ChatContextType {
  threads: ChatThread[];
  messages: Message[];
}

const ChatContext = createContext<ChatContextType>({} as ChatContextType);
export const useChat = () => useContext(ChatContext);

export const ChatProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [threads] = useState<ChatThread[]>([]);
  const [messages] = useState<Message[]>([]);

  return <ChatContext.Provider value={{ threads, messages }}>{children}</ChatContext.Provider>;
};