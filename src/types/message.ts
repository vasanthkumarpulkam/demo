export interface Message {
  id: string;
  threadId: string;
  senderId: string;
  senderName: string;
  text: string;
  createdAt: Date;
  read: boolean;
}

export interface ChatThread {
  id: string;
  jobId: string;
  jobTitle: string;
  participants: string[];
  participantNames: Record<string, string>;
  lastMessage?: string;
  lastMessageAt: Date;
  unreadCount: number;
}