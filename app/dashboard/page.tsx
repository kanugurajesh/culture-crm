'use client';

import { MapPinIcon, UserGroupIcon, ChartBarIcon, CalendarIcon } from '@heroicons/react/24/outline';

// Mock data for the dashboard
const mockData = {
  activeCustomers: 1234,
  activeCampaigns: 12,
  topRegions: ['Asia Pacific', 'Europe', 'North America'],
  upcomingEvents: [
    { id: 1, name: 'Lunar New Year', date: '2024-02-10', region: 'Asia Pacific' },
    { id: 2, name: 'Oktoberfest', date: '2024-09-21', region: 'Europe' },
    { id: 3, name: 'Diwali', date: '2024-11-01', region: 'South Asia' },
  ],
  customerEngagement: [
    { region: 'Asia Pacific', score: 85 },
    { region: 'Europe', score: 78 },
    { region: 'North America', score: 72 },
    { region: 'South America', score: 68 },
    { region: 'Africa', score: 65 },
  ],
};

function StatCard({ 
  title, 
  value, 
  icon, 
  color 
}: { 
  title: string; 
  value: string; 
  icon: React.ReactNode; 
  color: 'blue' | 'green' | 'purple' | 'orange';
}) {
  const colorClasses = {
    blue: 'bg-blue-50 text-blue-500 dark:bg-blue-900/20 dark:text-blue-400',
    green: 'bg-green-50 text-green-500 dark:bg-green-900/20 dark:text-green-400',
    purple: 'bg-purple-50 text-purple-500 dark:bg-purple-900/20 dark:text-purple-400',
    orange: 'bg-orange-50 text-orange-500 dark:bg-orange-900/20 dark:text-orange-400',
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
      <div className="flex items-center">
        <div className={`p-3 rounded-lg ${colorClasses[color]}`}>
          {icon}
        </div>
        <div className="ml-4">
          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
            {title}
          </h3>
          <p className="text-2xl font-semibold text-gray-800 dark:text-white">
            {value}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Dashboard() {
  return (
    <div className="p-4 md:p-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-6 md:mb-8">
        <StatCard
          title="Active Customers"
          value={mockData.activeCustomers.toLocaleString()}
          icon={<UserGroupIcon className="w-6 h-6" />}
          color="blue"
        />
        <StatCard
          title="Active Campaigns"
          value={mockData.activeCampaigns.toString()}
          icon={<ChartBarIcon className="w-6 h-6" />}
          color="green"
        />
        <StatCard
          title="Top Regions"
          value={mockData.topRegions.length.toString()}
          icon={<MapPinIcon className="w-6 h-6" />}
          color="purple"
        />
        <StatCard
          title="Upcoming Events"
          value={mockData.upcomingEvents.length.toString()}
          icon={<CalendarIcon className="w-6 h-6" />}
          color="orange"
        />
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
        {/* Engagement Heatmap */}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-4 md:p-6 shadow-md">
          <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">
            Regional Engagement Heatmap
          </h2>
          <div className="space-y-4">
            {mockData.customerEngagement.map((region) => (
              <div key={region.region} className="flex items-center">
                <span className="w-24 md:w-32 text-sm text-gray-600 dark:text-gray-300">
                  {region.region}
                </span>
                <div className="flex-1 h-4 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-blue-500 dark:bg-blue-600 rounded-full transition-all duration-500"
                    style={{ width: `${region.score}%` }}
                  />
                </div>
                <span className="ml-2 text-sm text-gray-600 dark:text-gray-300">
                  {region.score}%
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Cultural Events */}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-4 md:p-6 shadow-md">
          <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">
            Upcoming Cultural Events
          </h2>
          <div className="space-y-4">
            {mockData.upcomingEvents.map((event) => (
              <div
                key={event.id}
                className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg gap-2"
              >
                <div>
                  <h3 className="font-medium text-gray-800 dark:text-white">
                    {event.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {event.region}
                  </p>
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  {new Date(event.date).toLocaleDateString()}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
