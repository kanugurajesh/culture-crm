import { Star, MessageSquare, ThumbsUp, Flag } from 'lucide-react';

interface Feedback {
  id: string;
  customerName: string;
  rating: number;
  comment: string;
  date: string;
  category: string;
  culturalContext: string;
}

export default function FeedbackPage() {
  const feedback: Feedback[] = [
    {
      id: '1',
      customerName: 'John Smith',
      rating: 4,
      comment: 'Great service with cultural sensitivity',
      date: '2025-01-19',
      category: 'Service',
      culturalContext: 'Western'
    },
    {
      id: '2',
      customerName: 'Maria Garcia',
      rating: 5,
      comment: 'Excellent communication in my native language',
      date: '2025-01-18',
      category: 'Communication',
      culturalContext: 'Latin American'
    }
  ];

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Customer Feedback</h1>
          <p className="text-gray-600 dark:text-gray-400">Cultural insights from your customers</p>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
          Export Report
        </button>
      </div>

      {/* Feedback Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Average Rating</p>
              <p className="text-2xl font-bold text-gray-800 dark:text-white">4.5</p>
            </div>
            <Star className="w-8 h-8 text-yellow-400" />
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Total Reviews</p>
              <p className="text-2xl font-bold text-gray-800 dark:text-white">128</p>
            </div>
            <MessageSquare className="w-8 h-8 text-blue-400" />
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Positive Feedback</p>
              <p className="text-2xl font-bold text-gray-800 dark:text-white">92%</p>
            </div>
            <ThumbsUp className="w-8 h-8 text-green-400" />
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Cultural Regions</p>
              <p className="text-2xl font-bold text-gray-800 dark:text-white">12</p>
            </div>
            <Flag className="w-8 h-8 text-purple-400" />
          </div>
        </div>
      </div>

      {/* Feedback List */}
      <div className="space-y-4">
        {feedback.map((item) => (
          <div key={item.id} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="font-semibold text-gray-800 dark:text-white">{item.customerName}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{item.date}</p>
              </div>
              <div className="flex items-center">
                {[...Array(5)].map((_, index) => (
                  <Star
                    key={index}
                    className={`w-5 h-5 ${
                      index < item.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
            <p className="text-gray-700 dark:text-gray-300 mb-3">{item.comment}</p>
            <div className="flex space-x-2">
              <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                {item.category}
              </span>
              <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">
                {item.culturalContext}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
