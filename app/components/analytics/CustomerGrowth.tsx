'use client';

import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Customer Growth',
    },
  },
};

const generateMockData = () => {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const currentMonth = new Date().getMonth();
  const labels = months.slice(0, currentMonth + 1);
  
  return {
    labels,
    datasets: [
      {
        label: 'New Customers',
        data: labels.map(() => Math.floor(Math.random() * 50) + 20),
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
      },
      {
        label: 'Churned Customers',
        data: labels.map(() => Math.floor(Math.random() * 20)),
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };
};

export default function CustomerGrowth() {
  const data = generateMockData();

  return (
    <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
      <Bar options={options} data={data} />
    </div>
  );
}
