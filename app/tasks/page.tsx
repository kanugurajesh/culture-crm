import { CalendarIcon, CheckCircleIcon } from '@heroicons/react/24/outline';

interface Task {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  priority: 'low' | 'medium' | 'high';
  status: 'pending' | 'in-progress' | 'completed';
}

export default function TasksPage() {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Task Management</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
          Add New Task
        </button>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        {/* Task Lists */}
        <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
          <h2 className="text-lg font-semibold mb-4 text-gray-700 dark:text-gray-200">Pending</h2>
          <div className="space-y-3">
            <TaskCard
              task={{
                id: '1',
                title: 'Follow up with client',
                description: 'Send cultural preference survey',
                dueDate: '2025-01-20',
                priority: 'high',
                status: 'pending'
              }}
            />
          </div>
        </div>

        <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
          <h2 className="text-lg font-semibold mb-4 text-gray-700 dark:text-gray-200">In Progress</h2>
          <div className="space-y-3">
            <TaskCard
              task={{
                id: '2',
                title: 'Prepare presentation',
                description: 'Cultural insights report',
                dueDate: '2025-01-21',
                priority: 'medium',
                status: 'in-progress'
              }}
            />
          </div>
        </div>

        <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
          <h2 className="text-lg font-semibold mb-4 text-gray-700 dark:text-gray-200">Completed</h2>
          <div className="space-y-3">
            <TaskCard
              task={{
                id: '3',
                title: 'Client onboarding',
                description: 'Complete cultural assessment',
                dueDate: '2025-01-19',
                priority: 'low',
                status: 'completed'
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function TaskCard({ task }: { task: Task }) {
  const priorityColors = {
    low: 'bg-green-100 text-green-800',
    medium: 'bg-yellow-100 text-yellow-800',
    high: 'bg-red-100 text-red-800'
  };

  return (
    <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm">
      <div className="flex justify-between items-start mb-2">
        <h3 className="font-medium text-gray-800 dark:text-white">{task.title}</h3>
        <span className={`px-2 py-1 rounded-full text-xs ${priorityColors[task.priority]}`}>
          {task.priority}
        </span>
      </div>
      <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">{task.description}</p>
      <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
        <div className="flex items-center">
          <CalendarIcon className="w-5 h-5 mr-1 stroke-2" />
          <span>{task.dueDate}</span>
        </div>
        <div className="flex items-center">
          <CheckCircleIcon className="w-5 h-5 mr-1 stroke-2" />
          <span>{task.status}</span>
        </div>
      </div>
    </div>
  );
}
