export interface Message {
  id: string;
  threadId: string;
  senderId: string;
  senderName: string;
  content: string;
  timestamp: string;
  read: boolean;
  attachments?: string[];
}

export interface ChatThread {
  id: string;
  participants: string[];
  participantNames: string[];
  lastMessage: Message;
  unreadCount: number;
  jobId?: string;
  jobTitle?: string;
  createdAt: string;
}
