'use client';

export const Logo = ({ className = '' }: { className?: string }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <svg
        className="w-8 h-8 text-blue-600 dark:text-blue-400"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z"
          fill="currentColor"
        />
        <path
          d="M12 6C9.79 6 8 7.79 8 10C8 12.21 9.79 14 12 14C14.21 14 16 12.21 16 10C16 7.79 14.21 6 12 6Z"
          fill="currentColor"
        />
        <path
          d="M12 15C9.33 15 4 16.34 4 19V20H20V19C20 16.34 14.67 15 12 15Z"
          fill="currentColor"
        />
      </svg>
      <span className="ml-2 text-xl font-bold text-gray-800 dark:text-white">
        Culture<span className="text-blue-600 dark:text-blue-400">CRM</span>
      </span>
    </div>
  );
};
