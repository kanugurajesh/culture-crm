import './globals.css'
import { Inter } from 'next/font/google'
import { ThemeProvider } from './providers/ThemeProvider'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Link from 'next/link'
import { HomeIcon, ChartBarIcon, UsersIcon, CheckIcon, EnvelopeIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'CultureCRM - Modern Customer Relationship Management',
  description: 'A modern CRM system built by Kanugu Rajesh',
}

const linkClass = 'flex items-center px-4 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900">
            <Sidebar>
              <div className="flex-1">
                <Header />
                <main className="flex-1 overflow-y-auto p-4 md:ml-64 pt-20">
                  {children}
                </main>
                <footer className="border-t border-gray-200 dark:border-gray-700 p-4 md:ml-64">
                  <div className="container mx-auto">
                    <div className="flex items-center">
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        Created by Kanugu Rajesh - Full Stack Developer
                      </div>
                      <div className="flex items-center ml-4 space-x-2">
                        <a
                          href="https://github.com/kanugurajesh"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                          </svg>
                        </a>
                        <a
                          href="https://www.linkedin.com/in/rajesh-kanugu-aba8a3254/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </footer>
              </div>
            </Sidebar>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
