'use client';

import { useState, useEffect } from 'react';
import { UserCircleIcon, ChatBubbleLeftIcon, DocumentIcon, PhoneIcon } from '@heroicons/react/24/outline';

interface Activity {
  id: string;
  type: 'message' | 'document' | 'call' | 'note';
  user: string;
  action: string;
  target: string;
  timestamp: string;
  details?: string;
}

export default function ActivityStream() {
  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    // Simulated real-time data - in a real app, this would use WebSocket
    const mockActivities: Activity[] = [
      {
        id: '1',
        type: 'message',
        user: 'John Doe',
        action: 'sent a message to',
        target: 'Sarah Smith',
        timestamp: '2 minutes ago',
        details: 'Following up on our last conversation...',
      },
      {
        id: '2',
        type: 'document',
        user: 'Alice Johnson',
        action: 'shared a document with',
        target: 'Marketing Team',
        timestamp: '1 hour ago',
        details: 'Q4 Marketing Strategy.pdf',
      },
      {
        id: '3',
        type: 'call',
        user: 'Robert Wilson',
        action: 'had a call with',
        target: 'James Brown',
        timestamp: '3 hours ago',
        details: 'Duration: 45 minutes',
      },
    ];

    setActivities(mockActivities);

    // Simulate real-time updates
    const interval = setInterval(() => {
      const newActivity: Activity = {
        id: Date.now().toString(),
        type: 'note',
        user: 'System',
        action: 'created a note for',
        target: 'Customer XYZ',
        timestamp: 'just now',
        details: 'Automated follow-up reminder',
      };

      setActivities(prev => [newActivity, ...prev].slice(0, 10));
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  const getIcon = (type: Activity['type']) => {
    switch (type) {
      case 'message':
        return <ChatBubbleLeftIcon className="w-6 h-6 text-blue-500" />;
      case 'document':
        return <DocumentIcon className="w-6 h-6 text-green-500" />;
      case 'call':
        return <PhoneIcon className="w-6 h-6 text-purple-500" />;
      default:
        return <UserCircleIcon className="w-6 h-6 text-gray-500" />;
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-6 text-gray-800 dark:text-white">Activity Stream</h2>
      <div className="space-y-4">
        {activities.map((activity) => (
          <div
            key={activity.id}
            className="flex items-start space-x-4 p-4 rounded-lg bg-gray-50 dark:bg-gray-700"
          >
            <div className="flex-shrink-0">{getIcon(activity.type)}</div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 dark:text-white">
                <span className="font-semibold">{activity.user}</span> {activity.action}{' '}
                <span className="font-semibold">{activity.target}</span>
              </p>
              {activity.details && (
                <p className="text-sm text-gray-500 dark:text-gray-400">{activity.details}</p>
              )}
              <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">{activity.timestamp}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
