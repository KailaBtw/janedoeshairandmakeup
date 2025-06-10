// components/TopMenuBar.tsx (or your path)
"use client"

import React, { useState } from 'react';
import { Button } from '@/components/ui/button'; // Assuming you use ShadCN Button
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"; // Assuming you use ShadCN Sheet
import { Menu } from 'lucide-react';
import ThemeToggle from '@/components/theme/ThemeToggle'; // Adjust path
import Link from 'next/link'; // Use Next.js Link for internal navigation
import { usePathname } from 'next/navigation';

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
      {/* Apply themed-menubar for background and border, keep layout classes */}
      <div className="themed-menubar fixed top-0 left-0 w-full z-50 backdrop-blur-md">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo - Apply themed classes for text colors */}
          <Link href="/" className="text-xl font-bold themed-menubar-logo">
            <span className="themed-menubar-logo-accent">Jane</span> does
            <span className="themed-menubar-logo-accent"> H</span>air and
            <span className="themed-menubar-logo-accent"> M</span>akeup
          </Link>

          {/* Desktop Menu - Apply themed classes for link colors */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`themed-menubar-link ${
                  isActive(item.href) ? 'text-[var(--accent-primary)]' : ''
                }`}
              >
                {item.label}
              </Link>
            ))}
            <ThemeToggle />
            <Link href="/booking">
              <Button className="bg-[var(--accent-primary)] hover:bg-[var(--accent-secondary)] text-white">
                Book Now
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <Sheet open={isMobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                {/* Apply themed class for icon button color */}
                <Button variant="ghost" size="icon" className="themed-menubar-icon-button">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              {/* Apply themed class for mobile sheet background and text */}
              <SheetContent className="themed-mobile-sheet-content w-full sm:max-w-sm">
                <div className="p-4 space-y-6">
                  <h1 className="text-2xl font-bold themed-mobile-sheet-header">
                    <span className="themed-mobile-sheet-header-accent">B</span>ridal <span className="themed-mobile-sheet-header-accent">B</span>eauty
                  </h1>
                  <nav className="flex flex-col space-y-4">
                    {navItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`themed-mobile-sheet-link ${
                          isActive(item.href) ? 'text-[var(--accent-primary)]' : ''
                        }`}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                    <div className="pt-4 border-t border-[var(--menubar-border)]"> {/* Use CSS variable for border */}
                      <Link href="/booking">
                        <Button className="w-full bg-[var(--accent-primary)] hover:bg-[var(--accent-secondary)] text-white">
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
      <div className="h-16" /> 
      {/* Spacer for fixed menu, adjust height (py-4 = 1rem padding, so approx 2.5rem + border. Height of menubar is approx 65px with default text sizes) */}
    </>
  );
};

export default TopMenuBar;