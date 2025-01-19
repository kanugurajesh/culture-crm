import { PaperAirplaneIcon, LanguageIcon } from '@heroicons/react/24/outline';

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
    messages: [
      {
        id: 1,
        sender: 'customer',
        text: 'Hola, necesito ayuda con el servicio.',
        translation: 'Hello, I need help with the service.',
        timestamp: '10:30 AM',
        sentiment: 'neutral',
      },
      {
        id: 2,
        sender: 'agent',
        text: 'Hi Maria, I\'d be happy to help. Could you please provide more details?',
        translation: 'Hola María, me encantaría ayudarte. ¿Podrías proporcionar más detalles?',
        timestamp: '10:32 AM',
        sentiment: 'positive',
      },
    ],
  },
  // Add more conversations as needed
];

export default function Communication() {
  return (
    <div className="flex h-[calc(100vh-4rem)]">
      {/* Conversation List */}
      <div className="w-1/3 border-r border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
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
              className="p-4 border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer"
            >
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center">
                  {conversation.customer.name.charAt(0)}
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    {conversation.customer.name}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {conversation.customer.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col bg-gray-50 dark:bg-gray-900">
        {/* Chat Header */}
        <div className="p-4 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center">
              M
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900 dark:text-white">
                Maria Garcia
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Tech Solutions Inc.
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
              <LanguageIcon className="w-5 h-5 mr-1" />
              Spanish
            </div>
            <select className="rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 px-2 py-1 text-sm">
              <option value="happy">😊 Happy</option>
              <option value="neutral">😐 Neutral</option>
              <option value="unhappy">😞 Unhappy</option>
            </select>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {mockConversations[0].messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${
                message.sender === 'agent' ? 'justify-end' : 'justify-start'
              }`}
            >
              <div
                className={`max-w-[70%] rounded-lg p-3 ${
                  message.sender === 'agent'
                    ? 'bg-blue-600 text-white'
                    : 'bg-white dark:bg-gray-800'
                }`}
              >
                <p className={`text-sm ${
                  message.sender === 'agent'
                    ? 'text-white'
                    : 'text-gray-800 dark:text-white'
                }`}>
                  {message.text}
                </p>
                <p className="text-xs mt-1 italic text-gray-200 dark:text-gray-400">
                  {message.translation}
                </p>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-xs text-gray-300 dark:text-gray-500">
                    {message.timestamp}
                  </span>
                  <span className="text-xs">
                    {message.sentiment === 'positive' && '😊'}
                    {message.sentiment === 'neutral' && '😐'}
                    {message.sentiment === 'negative' && '😞'}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Message Input */}
        <div className="p-4 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
          <div className="flex items-center space-x-2">
            <input
              type="text"
              placeholder="Type your message..."
              className="flex-1 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 px-4 py-2"
            />
            <button className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition-colors">
              <PaperAirplaneIcon className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
