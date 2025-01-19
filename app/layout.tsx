import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CultureCRM - Cultural Intelligence Platform",
  description: "A modern CRM platform with cultural intelligence capabilities",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
          <Sidebar />
          <div className="ml-64">
            <Header />
            <main className="pt-16 px-6">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
