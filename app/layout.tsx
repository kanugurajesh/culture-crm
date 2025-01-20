import './globals.css'
import { Inter } from 'next/font/google'
import { ThemeProvider } from './providers/ThemeProvider'
import Header from './components/Header'
import Sidebar from './components/Sidebar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'CultureCRM - Modern Customer Relationship Management',
  description: 'A modern CRM system built by Kanugu Rajesh',
}

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
                          GitHub
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
