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
          <main className="pt-16 sm:pt-20"> {/* Added padding top to account for fixed TopMenuBar height; adjust as needed */}
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
          document.documentElement.setAttribute('data-theme', getInitialTheme());
        })();
      `,
    }}
  />
);


