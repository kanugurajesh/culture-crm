"use client";

import { useState } from 'react';
import { BellIcon, CheckCircleIcon } from '@heroicons/react/24/outline';

interface Notification {
  id: number;
  title: string;
  message: string;
  time: string;
  read: boolean;
  type: 'info' | 'success' | 'warning';
}

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: 1,
      title: "New Lead",
      message: "New lead assigned to you: John Doe",
      time: "5 min ago",
      read: false,
      type: 'info'
    },
    {
      id: 2,
      title: "Meeting Reminder",
      message: "Team meeting in 30 minutes",
      time: "30 min ago",
      read: false,
      type: 'warning'
    },
    {
      id: 3,
      title: "Task Update",
      message: "Campaign report is due tomorrow",
      time: "1 hour ago",
      read: true,
      type: 'success'
    }
  ]);

  const markAsRead = (id: number) => {
    setNotifications(notifications.map(notification =>
      notification.id === id ? { ...notification, read: true } : notification
    ));
  };

  const markAllAsRead = () => {
    setNotifications(notifications.map(notification => ({ ...notification, read: true })));
  };

  const getTypeStyles = (type: string) => {
    switch (type) {
      case 'info':
        return 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800';
      case 'success':
        return 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800';
      case 'warning':
        return 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800';
      default:
        return 'bg-gray-50 dark:bg-gray-900/20 border-gray-200 dark:border-gray-800';
    }
  };

  return (
    <div className="p-6">
      <div className="mb-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <BellIcon className="w-6 h-6 text-gray-600 dark:text-gray-300" />
          <h1 className="text-2xl font-semibold text-gray-800 dark:text-white">Notifications</h1>
        </div>
        {notifications.some(n => !n.read) && (
          <button
            onClick={markAllAsRead}
            className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
          >
            Mark all as read
          </button>
        )}
      </div>

      <div className="space-y-4">
        {notifications.length > 0 ? (
          notifications.map((notification) => (
            <div
              key={notification.id}
              className={`p-4 rounded-lg border ${getTypeStyles(notification.type)} transition-colors duration-200 ${
                !notification.read ? 'cursor-pointer transform hover:scale-[1.01]' : ''
              }`}
              onClick={() => !notification.read && markAsRead(notification.id)}
            >
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="flex items-center space-x-2">
                    <h3 className="text-sm font-medium text-gray-800 dark:text-white">
                      {notification.title}
                    </h3>
                    {notification.read && (
                      <CheckCircleIcon className="w-4 h-4 text-green-500" />
                    )}
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                    {notification.message}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    {notification.time}
                  </p>
                </div>
                {!notification.read && (
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                )}
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-12">
            <BellIcon className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
              No notifications
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              You&apos;re all caught up! Check back later for new notifications.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
