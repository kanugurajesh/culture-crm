'use client';

import AdvancedAnalytics from '../components/analytics/AdvancedAnalytics';
import ActivityStream from '../components/collaboration/ActivityStream';

export default function AdvancedAnalyticsPage() {
  return (
    <div className="space-y-8 p-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Advanced Analytics</h1>
          <p className="text-gray-600 dark:text-gray-400">
            Comprehensive insights and real-time activity monitoring
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <AdvancedAnalytics />
        </div>
        <div className="lg:col-span-1">
          <ActivityStream />
        </div>
      </div>
    </div>
  );
}
