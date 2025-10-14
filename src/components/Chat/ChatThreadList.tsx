import React from 'react';
import { ChatThread } from '../../types/message';
import { useChat } from '../../hooks/useChat';

const ChatThreadList: React.FC = () => {
  const { threads } = useChat();

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-4 border-b">
        <h3 className="text-lg font-semibold">Messages</h3>
      </div>
      <div className="divide-y">
        {threads.length === 0 ? (
          <div className="p-4 text-center text-gray-500">
            No conversations yet
          </div>
        ) : (
          threads.map(thread => (
            <div key={thread.id} className="p-4 hover:bg-gray-50 cursor-pointer">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h4 className="font-medium text-gray-900">{thread.jobTitle}</h4>
                  <p className="text-sm text-gray-500 mt-1">{thread.lastMessage}</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-gray-400">
                    {new Date(thread.lastMessageAt).toLocaleDateString()}
                  </p>
                  {thread.unreadCount > 0 && (
                    <span className="inline-block bg-blue-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center mt-1">
                      {thread.unreadCount}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ChatThreadList;