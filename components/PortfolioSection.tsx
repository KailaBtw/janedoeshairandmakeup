"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Section from './Section';

// Dummy image URLs (replace with your actual image paths)
const imageUrls = [
  'https://images.unsplash.com/photo-1591079738920-985c13844607?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Bridal makeup
  'https://images.unsplash.com/photo-1622543954129-9b1e84857445?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Bridal hair
  'https://images.unsplash.com/photo-1589156280159-27698a70f29e?q=80&w=3164&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',   // Flowers
  'https://images.unsplash.com/photo-1590748872704-775f85871574?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Bride with flowers
  'https://images.unsplash.com/photo-1600885294544-c7e5a11b696d?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Makeup Brushes
  'https://images.unsplash.com/photo-1543506599-c94b1509a28b?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',   // Hair accessories
];

const PortfolioSection: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"] // Parallax until the element's end reaches the top
  });

  // Create parallax effects for each image
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']); // Adjust the '50%' to control the parallax intensity

  return (
    <Section id="portfolio" className="bg-[var(--background-primary)] text-[var(--text-primary)]">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Our Portfolio</h2>
      <div ref={ref} className="relative">
        {/* Parallax Image Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {imageUrls.map((url, index) => (
            <motion.div
              key={index}
              style={{ y }} // Apply the parallax effect
              className="relative overflow-hidden rounded-lg"
            >
              <img
                src={url}
                alt={`Bridal Beauty ${index + 1}`}
                className="w-full h-auto object-cover rounded-lg transition-transform duration-500 hover:scale-110"
              />
            </motion.div>
          ))}
        </div>
      </div>
      <div className="mt-12 text-center">
        <Button 
          variant="outline" 
          className="text-[var(--accent-primary)] hover:text-[var(--accent-secondary)] hover:bg-[var(--accent-primary)]/20 border-[var(--accent-primary)]/30"
        >
          View Full Gallery
        </Button>
      </div>
    </Section>
  );
};

export default PortfolioSection;