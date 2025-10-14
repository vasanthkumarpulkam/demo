import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ChatThreadList from '../components/Chat/ChatThreadList';
import ChatWindow from '../components/Chat/ChatWindow';

export default function MessagesPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Messages</h1>
            <p className="text-gray-600">Manage your conversations</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-1">
              <ChatThreadList />
            </div>
            <div className="lg:col-span-2">
              <ChatWindow />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}