// components/theme/ThemeToggle.tsx
"use client";

import React from 'react';
import { useTheme } from './ThemeContext'; // Ensure this path is correct
import { Sun, Moon } from 'lucide-react'; // Using lucide-react icons

// Define props for ThemeToggle, extending standard button attributes
// This allows ThemeToggle to accept any valid HTML button attribute, including className, onClick, etc.
interface ThemeToggleProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  // You can add any other custom props specific to ThemeToggle here if needed
  // For example: iconOnly?: boolean;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ className, ...rest }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={(e) => {
        toggleTheme();
        // If an onClick prop is passed, call it as well
        if (rest.onClick) {
          rest.onClick(e);
        }
      }}
      // Combine the base styles from globals.css with any className passed as a prop
      className={`theme-toggle-button-styles ${className || ''}`.trim()}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      {...rest} // Spread any other valid button attributes (e.g., id, disabled, custom data-attributes)
    >
      {theme === 'light' ? (
        <Moon className="h-5 w-5" aria-hidden="true" />
      ) : (
        <Sun className="h-5 w-5" aria-hidden="true" />
      )}
      {/* Text is hidden on small screens by default in the original request's globals.css for .theme-toggle-button-styles span */}
      {/* Adding ml-2 for spacing if text is visible. Adjust as per your .theme-toggle-button-styles */}
      {/* <span className="hidden sm:inline ml-2">{theme === 'light' ? '' : ''}</span> add word label */}
    </button>
  );
};

export default ThemeToggle;