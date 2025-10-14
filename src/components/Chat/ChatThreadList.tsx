import React from 'react';
import { useChat } from '../../hooks/useChat';
import { formatRelativeTime } from '../../utils/formatters';
import { MessageCircle } from 'lucide-react';

export const ChatThreadList: React.FC = () => {
  const { threads, activeThreadId, setActiveThreadId } = useChat();

  if (threads.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-64 text-gray-500">
        <MessageCircle className="w-12 h-12 mb-4" />
        <p>No messages yet</p>
      </div>
    );
  }

  return (
    <div className="divide-y divide-gray-200">
      {threads.map((thread) => (
        <div
          key={thread.id}
          onClick={() => setActiveThreadId(thread.id)}
          className={`p-4 cursor-pointer hover:bg-gray-50 transition ${
            activeThreadId === thread.id ? 'bg-blue-50' : ''
          }`}
        >
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-semibold text-gray-900">
              {thread.participantNames.join(', ')}
            </h3>
            {thread.unreadCount > 0 && (
              <span className="bg-primary-600 text-white text-xs rounded-full px-2 py-1">
                {thread.unreadCount}
              </span>
            )}
          </div>
          {thread.jobTitle && (
            <p className="text-sm text-gray-600 mb-1">
              Re: {thread.jobTitle}
            </p>
          )}
          <p className="text-sm text-gray-600 truncate">
            {thread.lastMessage.content}
          </p>
          <p className="text-xs text-gray-500 mt-1">
            {formatRelativeTime(thread.lastMessage.timestamp)}
          </p>
        </div>
      ))}
    </div>
  );
};
