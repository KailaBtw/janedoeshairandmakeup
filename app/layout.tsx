import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from '@/components/theme/ThemeContext'; // Adjust path as needed
import TopMenuBar from "@/components/TopMenuBar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

// Define metadata as needed
export const metadata = {
  title: 'Jane does Hair and Makeup',
  description: 'Stunning bridal hair and makeup services.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Meta tags, links, etc. */}
      </head>
      <body className={inter.className}>
        <ThemeHydrationScript />
        <ThemeProvider>
          <TopMenuBar />
          <main className="bg-forest-50 dark:bg-forest-950 transition-colors duration-300"> {/* Removed padding top to allow hero image to extend behind navbar */}
            {children}
          </main>
          {/* You could add a global Footer here if needed */}
        </ThemeProvider>
      </body>
    </html>
  );
}

const ThemeHydrationScript = () => (
  <script
    dangerouslySetInnerHTML={{
      __html: `
        (function() {
          function getInitialTheme() {
            try {
              const storedTheme = localStorage.getItem('theme');
              if (storedTheme === 'light' || storedTheme === 'dark') {
                return storedTheme;
              }
              const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
              if (prefersDark) {
                return 'dark';
              }
            } catch (e) { /* Ignore */ }
            return 'light';
          }
          const theme = getInitialTheme();
          const root = document.documentElement;
          
          // Remove existing theme classes
          root.classList.remove('light', 'dark');
          
          // Add the new theme class
          root.classList.add(theme);
          
          // Set data-theme attribute
          root.setAttribute('data-theme', theme);
          
          console.log('Initial theme applied:', theme);
        })();
      `,
    }}
  />
);


