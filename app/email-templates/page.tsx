import { AlertCircle } from 'lucide-react';

interface Template {
  id: string;
  name: string;
  subject: string;
  content: string;
  culturalNotes: string[];
  category: string;
}

export default function EmailTemplatesPage() {
  const templates: Template[] = [
    {
      id: '1',
      name: 'Welcome Email',
      subject: 'Welcome to Our Service',
      content: 'Dear [Name], Welcome to our service...',
      culturalNotes: [
        'Use formal greetings for Asian markets',
        'Consider right-to-left formatting for Arabic regions',
        'Avoid idioms that may not translate well'
      ],
      category: 'Onboarding'
    },
    {
      id: '2',
      name: 'Follow-up Meeting',
      subject: 'Following Up on Our Discussion',
      content: 'Hello [Name], Thank you for your time...',
      culturalNotes: [
        'Include local time zones',
        'Respect cultural holidays',
        'Consider communication style preferences'
      ],
      category: 'Meetings'
    }
  ];

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Email Templates</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
          Create Template
        </button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {templates.map((template) => (
          <div key={template.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-gray-800 dark:text-white">{template.name}</h3>
              <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                {template.category}
              </span>
            </div>
            
            <div className="mb-4">
              <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Subject</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">{template.subject}</p>
            </div>

            <div className="mb-4">
              <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Cultural Considerations
              </h4>
              <ul className="space-y-2">
                {template.culturalNotes.map((note, index) => (
                  <li key={index} className="flex items-start text-sm">
                    <AlertCircle className="w-4 h-4 text-yellow-500 mr-2 mt-0.5" />
                    <span className="text-gray-600 dark:text-gray-400">{note}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex space-x-2">
              <button className="flex-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-2 rounded-lg text-sm hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                Edit
              </button>
              <button className="flex-1 bg-blue-600 text-white px-3 py-2 rounded-lg text-sm hover:bg-blue-700 transition-colors">
                Use Template
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
