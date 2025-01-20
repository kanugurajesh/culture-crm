'use client';

import { useState, useEffect } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
} from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

interface RevenueData {
  month: string;
  value: number;
}

interface CustomerGrowthData {
  month: string;
  new: number;
  churned: number;
}

interface SatisfactionData {
  name: string;
  value: number;
}

interface RegionalData {
  name: string;
  value: number;
}

interface AnalyticsData {
  revenue: RevenueData[];
  customerGrowth: CustomerGrowthData[];
  satisfaction: SatisfactionData[];
  regionalData: RegionalData[];
}

export default function AdvancedAnalytics() {
  const [data, setData] = useState<AnalyticsData>({
    revenue: [],
    customerGrowth: [],
    satisfaction: [],
    regionalData: [],
  });

  useEffect(() => {
    // Simulated data - in a real app, this would come from your API
    const mockData: AnalyticsData = {
      revenue: [
        { month: 'Jan', value: 4000 },
        { month: 'Feb', value: 3000 },
        { month: 'Mar', value: 2000 },
        { month: 'Apr', value: 2780 },
        { month: 'May', value: 1890 },
        { month: 'Jun', value: 2390 },
      ],
      customerGrowth: [
        { month: 'Jan', new: 45, churned: 20 },
        { month: 'Feb', new: 50, churned: 15 },
        { month: 'Mar', new: 35, churned: 25 },
        { month: 'Apr', new: 40, churned: 18 },
        { month: 'May', new: 55, churned: 12 },
        { month: 'Jun', new: 48, churned: 22 },
      ],
      satisfaction: [
        { name: 'Very Satisfied', value: 400 },
        { name: 'Satisfied', value: 300 },
        { name: 'Neutral', value: 200 },
        { name: 'Unsatisfied', value: 100 },
      ],
      regionalData: [
        { name: 'North America', value: 4000 },
        { name: 'Europe', value: 3000 },
        { name: 'Asia', value: 2000 },
        { name: 'Others', value: 1000 },
      ],
    };

    setData(mockData);
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
      {/* Revenue Trend */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
        <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">Revenue Trend</h3>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data.revenue}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="value" stroke="#0088FE" name="Revenue" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Customer Growth */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
        <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">Customer Growth</h3>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data.customerGrowth}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="new" fill="#00C49F" name="New Customers" />
              <Bar dataKey="churned" fill="#FF8042" name="Churned Customers" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Customer Satisfaction */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
        <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">Customer Satisfaction</h3>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data.satisfaction}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              >
                {data.satisfaction.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Regional Distribution */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
        <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">Regional Distribution</h3>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data.regionalData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              >
                {data.regionalData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
