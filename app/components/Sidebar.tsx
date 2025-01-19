"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  HomeIcon, 
  UsersIcon, 
  BellIcon, 
  CogIcon, 
  ChartBarIcon, 
  ChatBubbleLeftIcon, 
  XMarkIcon, 
  Bars3Icon,
  PlusIcon,
  PhoneIcon,
  CalendarIcon,
  DocumentPlusIcon,
  CheckCircleIcon,
  EnvelopeIcon,
  ChatBubbleBottomCenterTextIcon
} from '@heroicons/react/24/outline';
import { useState, useEffect } from 'react';
import { Logo } from './Logo';

interface SidebarProps {
  children: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showQuickActions, setShowQuickActions] = useState(false);
  const pathname = usePathname();

  const menuItems = [
    { name: 'Dashboard', href: '/', icon: HomeIcon },
    { name: 'Customers', href: '/customers', icon: UsersIcon },
    { name: 'Tasks', href: '/tasks', icon: CheckCircleIcon },
    { name: 'Analytics', href: '/analytics', icon: ChartBarIcon },
    { name: 'Campaigns', href: '/campaigns', icon: ChartBarIcon },
    { name: 'Communication', href: '/communication', icon: ChatBubbleLeftIcon },
    { name: 'Email Templates', href: '/email-templates', icon: EnvelopeIcon },
    { name: 'Feedback', href: '/feedback', icon: ChatBubbleBottomCenterTextIcon },
    { name: 'Notifications', href: '/notifications', icon: BellIcon },
    { name: 'Settings', href: '/settings', icon: CogIcon },
  ];

  const quickActions = [
    { name: 'Add Customer', icon: PlusIcon, action: () => console.log('Add Customer') },
    { name: 'Schedule Call', icon: PhoneIcon, action: () => console.log('Schedule Call') },
    { name: 'New Meeting', icon: CalendarIcon, action: () => console.log('New Meeting') },
    { name: 'Create Report', icon: DocumentPlusIcon, action: () => console.log('Create Report') },
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="md:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-200"
      >
        {isMobileMenuOpen ? (
          <XMarkIcon className="w-6 h-6" />
        ) : (
          <Bars3Icon className="w-6 h-6" />
        )}
      </button>

      {/* Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`fixed h-full w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 z-40 transition-transform duration-300 ease-in-out ${
        isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
      }`}>
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-center h-16 border-b border-gray-200 dark:border-gray-700">
            <Logo />
          </div>
          
          {/* Quick Actions */}
          <div className="p-4">
            <button
              onClick={() => setShowQuickActions(!showQuickActions)}
              className="w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:bg-blue-500 dark:hover:bg-blue-600"
            >
              Quick Actions
            </button>
            
            {showQuickActions && (
              <div className="mt-2 space-y-1">
                {quickActions.map((action) => (
                  <button
                    key={action.name}
                    onClick={action.action}
                    className="w-full flex items-center px-3 py-2 text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors"
                  >
                    <action.icon className="w-5 h-5 mr-2" />
                    {action.name}
                  </button>
                ))}
              </div>
            )}
          </div>

          <nav className="flex-1 overflow-y-auto">
            <ul className="p-4 space-y-2">
              {menuItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={`flex items-center p-2 text-gray-700 dark:text-gray-200 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${
                      pathname === item.href ? 'bg-gray-100 dark:bg-gray-700 text-blue-600 dark:text-blue-400' : ''
                    }`}
                  >
                    <item.icon className="w-6 h-6 mr-3" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* User Info */}
          <div className="p-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center">
                <span className="text-blue-600 dark:text-blue-400 font-semibold">KR</span>
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-700 dark:text-gray-200">Kanugu Rajesh</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">Full Stack Developer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {children}
    </>
  );
};

export default Sidebar;
