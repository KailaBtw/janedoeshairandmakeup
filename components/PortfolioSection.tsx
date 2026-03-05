"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Section from './Section';
import Image from 'next/image';

// Portfolio images with descriptive text
const portfolioImages = [
  { 
    url: '/images/placeholders/makeup-1.jpg', 
    alt: 'Elegant Bridal Makeup Look' 
  },
  { 
    url: '/images/placeholders/makeup-2.jpg', 
    alt: 'Classic Bridal Hair Style' 
  },
  { 
    url: '/images/placeholders/makeup-3.jpg', 
    alt: 'Natural Bridal Look' 
  },
  { 
    url: '/images/placeholders/makeup-4.jpg', 
    alt: 'Modern Bridal Style' 
  },
  { 
    url: '/images/placeholders/service-location.jpg', 
    alt: 'On-Location Bridal Service' 
  },
  { 
    url: '/images/placeholders/service-party.jpg', 
    alt: 'Bridal Party Styling' 
  }
];

const PortfolioSection: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  return (
    <Section id="portfolio" className="bg-[var(--background-primary)] text-[var(--text-primary)]">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Our Portfolio</h2>
      <div ref={ref} className="relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioImages.map((image, index) => (
            <motion.div
              key={index}
              style={{ y }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="relative overflow-hidden rounded-lg aspect-[3/4] shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <Image
                src={image.url}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
                priority={index < 3}
                onError={(e) => {
                  console.error(`Error loading image: ${image.url}`);
                  const target = e.target as HTMLImageElement;
                  target.src = `https://placehold.co/600x800/FFB6C1/FFFFFF?text=${encodeURIComponent(image.alt)}`;
                }}
                onLoad={() => console.log(`Loaded image: ${image.url}`)}
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