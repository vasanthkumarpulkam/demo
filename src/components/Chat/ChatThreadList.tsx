import { ChatThread } from '../../types/message';
import { formatRelativeTime } from '../../utils/formatters';

interface ChatThreadListProps {
  threads: ChatThread[];
  selectedThreadId?: string;
  onSelectThread: (threadId: string) => void;
}

export const ChatThreadList = ({ threads, selectedThreadId, onSelectThread }: ChatThreadListProps) => {
  if (threads.length === 0) {
    return (
      <div className="p-8 text-center text-gray-500">
        <p>No conversations yet</p>
      </div>
    );
  }

  return (
    <div className="divide-y divide-gray-200">
      {threads.map(thread => (
        <div
          key={thread.id}
          onClick={() => onSelectThread(thread.id)}
          className={`p-4 cursor-pointer hover:bg-gray-50 transition-colors ${
            selectedThreadId === thread.id ? 'bg-primary-50' : ''
          }`}
        >
          <div className="flex items-start justify-between mb-1">
            <h4 className="font-semibold text-gray-900 truncate flex-1">
              {thread.jobTitle}
            </h4>
            {thread.unreadCount > 0 && (
              <span className="ml-2 bg-primary-600 text-white text-xs rounded-full px-2 py-1">
                {thread.unreadCount}
              </span>
            )}
          </div>
          
          <p className="text-sm text-gray-600 mb-2">
            {thread.participants.map(p => p.name).join(', ')}
          </p>

          {thread.lastMessage && (
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500 truncate flex-1">
                {thread.lastMessage.content}
              </p>
              <span className="text-xs text-gray-400 ml-2">
                {formatRelativeTime(thread.lastMessage.timestamp)}
              </span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
