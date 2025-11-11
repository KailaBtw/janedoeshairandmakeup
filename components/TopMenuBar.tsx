// components/TopMenuBar.tsx (or your path)
"use client"

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from 'lucide-react';
import ThemeToggle from '@/components/theme/ThemeToggle';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const TopMenuBar: React.FC = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'About', href: '/about' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Testimonials', href: '/testimonials' },
  ];

  return (
    <>
      <div className="fixed top-0 left-0 w-full z-50 backdrop-blur-md border-b border-forest-200 dark:border-forest-800 bg-forest-50/8 dark:bg-forest-950/8">
        <div className="max-w-7xl mx-auto px-6 h-16">
          <div className="h-full flex items-center">
            {/* Left section - Logo */}
            <div className="flex-shrink-0">
              <Link 
                href="/" 
                className="text-base font-bold text-forest-950 dark:text-forest-100 hover:opacity-80 transition-opacity w-[280px] leading-tight whitespace-nowrap"
              >
                <span className="text-fuchsia-600 dark:text-fuchsia-400">Jane</span> does{" "}
                <span className="text-forest-950 dark:text-forest-100">H</span>air and{" "}
                <span className="text-forest-950 dark:text-forest-100">M</span>akeup
              </Link>
            </div>

            {/* Center section - Navigation */}
            <div className="hidden md:flex flex-1 justify-center">
              <nav className="flex items-center space-x-1">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "px-3 py-2 rounded-md text-sm font-medium transition-all duration-200",
                      "hover:bg-forest-950/5 hover:text-forest-950 dark:hover:bg-forest-100/10 dark:hover:text-forest-100",
                      isActive(item.href) 
                        ? "text-forest-950 bg-forest-950/5 dark:text-forest-100 dark:bg-forest-100/10" 
                        : "text-forest-800 dark:text-forest-200"
                    )}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Right section - Actions */}
            <div className="hidden md:flex items-center space-x-4 ml-4">
              <ThemeToggle />
              <Link href="/booking">
                <Button 
                  className="bg-forest-950 hover:bg-forest-900 dark:bg-forest-800 dark:hover:bg-forest-700 text-white transition-colors duration-200"
                  size="sm"
                >
                  Book Now
                </Button>
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-4 ml-auto">
              <ThemeToggle />
              <Sheet open={isMobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="hover:bg-forest-950/5 dark:hover:bg-forest-100/10"
                  >
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent className="bg-white dark:bg-forest-950 border-l border-forest-200 dark:border-forest-800">
                  <div className="p-4 space-y-4">
                    <h1 className="text-xl font-bold text-forest-950 dark:text-forest-100">
                      <span className="text-fuchsia-600 dark:text-fuchsia-400">B</span>ridal <span className="text-fuchsia-600 dark:text-fuchsia-400">B</span>eauty
                    </h1>
                    <nav className="flex flex-col space-y-1">
                      {navItems.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className={cn(
                            "px-3 py-2 rounded-md text-sm font-medium transition-all duration-200",
                            "hover:bg-forest-950/5 hover:text-forest-950 dark:hover:bg-forest-100/10 dark:hover:text-forest-100",
                            isActive(item.href) 
                              ? "text-forest-950 bg-forest-950/5 dark:text-forest-100 dark:bg-forest-100/10" 
                              : "text-forest-800 dark:text-forest-200"
                          )}
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.label}
                        </Link>
                      ))}
                      <div className="pt-4 mt-2 border-t border-forest-200 dark:border-forest-800">
                        <Link href="/booking">
                          <Button 
                            className="w-full bg-forest-950 hover:bg-forest-900 dark:bg-forest-800 dark:hover:bg-forest-700 text-white transition-colors duration-200"
                            size="sm"
                          >
                            Book Now
                          </Button>
                        </Link>
                      </div>
                    </nav>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
      <div className="h-16" /> {/* Spacer */}
    </>
  );
};

export default TopMenuBar;