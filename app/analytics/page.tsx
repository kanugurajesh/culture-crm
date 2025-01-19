'use client';

import SalesChart from '../components/analytics/SalesChart';
import CustomerGrowth from '../components/analytics/CustomerGrowth';
import { ChartBarIcon, ArrowTrendingUpIcon, UserGroupIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline';

const StatCard = ({ title, value, icon: Icon, trend }: { 
  title: string; 
  value: string; 
  icon: React.ElementType; 
  trend: string 
}) => (
  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm text-gray-500 dark:text-gray-400">{title}</p>
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-1">{value}</h3>
        <p className="text-sm text-green-500 mt-2">
          <ArrowTrendingUpIcon className="w-4 h-4 inline mr-1" />
          {trend} vs last month
        </p>
      </div>
      <Icon className="w-12 h-12 text-blue-500" />
    </div>
  </div>
);

export default function Analytics() {
  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">Analytics Dashboard</h1>
        <p className="text-gray-600 dark:text-gray-300">Monitor your business performance and growth</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard
          title="Total Revenue"
          value="$124,563.00"
          icon={CurrencyDollarIcon}
          trend="+12.5%"
        />
        <StatCard
          title="Total Customers"
          value="1,245"
          icon={UserGroupIcon}
          trend="+5.2%"
        />
        <StatCard
          title="Sales This Month"
          value="384"
          icon={ChartBarIcon}
          trend="+8.1%"
        />
        <StatCard
          title="Average Deal Size"
          value="$324.20"
          icon={ArrowTrendingUpIcon}
          trend="+3.2%"
        />
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <SalesChart />
        <CustomerGrowth />
      </div>
    </div>
  );
}
