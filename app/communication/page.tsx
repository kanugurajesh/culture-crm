'use client';

import { useState } from 'react';
import { LanguageIcon } from '@heroicons/react/24/outline';
import Chat from '../components/Chat';

// Mock conversation data
const mockConversations = [
  {
    id: 1,
    customer: {
      name: 'Maria Garcia',
      company: 'Tech Solutions Inc.',
      avatar: '/avatars/maria.jpg',
      language: 'Spanish',
    },
    lastMessage: 'Hola, necesito ayuda con el servicio.',
    timestamp: '10:30 AM',
    unread: true,
  },
  {
    id: 2,
    customer: {
      name: 'John Smith',
      company: 'Digital Dynamics',
      avatar: '/avatars/john.jpg',
      language: 'English',
    },
    lastMessage: 'When will my order arrive?',
    timestamp: '09:45 AM',
    unread: false,
  },
  {
    id: 3,
    customer: {
      name: 'Yuki Tanaka',
      company: 'Global Tech Ltd',
      avatar: '/avatars/yuki.jpg',
      language: 'Japanese',
    },
    lastMessage: '注文の状況を確認したいです。',
    timestamp: '09:15 AM',
    unread: true,
  },
];

export default function Communication() {
  const [selectedConversation, setSelectedConversation] = useState<number | null>(null);

  return (
    <div className="flex h-[calc(100vh-4rem)]">
      {/* Conversation List */}
      <div className="w-1/3 border-r border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 h-[calc(100vh-4rem)]">
        <div className="p-4 border-b border-gray-200 dark:border-gray-700">
          <input
            type="text"
            placeholder="Search conversations..."
            className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 px-4 py-2"
          />
        </div>
        <div className="overflow-y-auto h-full">
          {mockConversations.map((conversation) => (
            <div
              key={conversation.id}
              onClick={() => setSelectedConversation(conversation.id)}
              className={`p-4 border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer ${
                selectedConversation === conversation.id ? 'bg-gray-100 dark:bg-gray-700' : ''
              }`}
            >
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <div className="w-12 h-12 rounded-full bg-gray-300 dark:bg-gray-600 flex items-center justify-center text-xl font-semibold text-white">
                    {conversation.customer.name.charAt(0)}
                  </div>
                  {conversation.unread && (
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-600 rounded-full"></div>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium text-gray-900 dark:text-white truncate">
                      {conversation.customer.name}
                    </h3>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {conversation.timestamp}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 truncate">
                    {conversation.lastMessage}
                  </p>
                  <div className="flex items-center mt-1">
                    <LanguageIcon className="w-4 h-4 text-gray-400 mr-1" />
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {conversation.customer.language}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 bg-gray-50 dark:bg-gray-900 h-[calc(100vh-4rem)]">
        {selectedConversation ? (
          <Chat />
        ) : (
          <div className="h-full flex items-center justify-center">
            <div className="text-center">
              <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">
                Select a conversation
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                Choose a conversation from the list to start chatting
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
