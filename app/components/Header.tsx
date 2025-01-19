"use client"

import { BellIcon, SunIcon, MoonIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <header className="fixed right-0 top-0 left-64 h-16 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 z-10">
      <div className="flex items-center justify-between h-full px-6">
        <div className="text-xl font-semibold text-gray-800 dark:text-white">
          Welcome to CultureCRM
        </div>
        <div className="flex items-center space-x-4">
          <button className="p-2 text-gray-600 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
            <BellIcon className="w-6 h-6" />
          </button>
          <button
            onClick={toggleDarkMode}
            className="p-2 text-gray-600 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
          >
            {isDarkMode ? <SunIcon className="w-6 h-6" /> : <MoonIcon className="w-6 h-6" />}
          </button>
          <div className="flex items-center">
            <img
              src="/avatar-placeholder.png"
              alt="User"
              className="w-8 h-8 rounded-full"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
