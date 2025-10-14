import { User } from './user';

export interface Message {
  id: string;
  chatId: string;
  senderId: string;
  content: string;
  type: 'text' | 'image' | 'file' | 'system';
  timestamp: Date;
  isRead: boolean;
  sender: User;
  attachments?: MessageAttachment[];
}

export interface MessageAttachment {
  id: string;
  name: string;
  url: string;
  type: string;
  size: number;
}

export interface Chat {
  id: string;
  jobId: string;
  participants: string[];
  lastMessage?: Message;
  lastActivity: Date;
  isActive: boolean;
  unreadCount: number;
}

export interface ChatParticipant {
  userId: string;
  user: User;
  joinedAt: Date;
  isActive: boolean;
}