"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { EfficientImage } from '@/components/ui/efficient-image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const portfolioImages = [
  { src: '/images/placeholders/makeup-1.jpg', alt: 'Glamorous Bridal Makeup' },
  { src: '/images/placeholders/makeup-2.jpg', alt: 'Elegant Bridal Hair' },
  { src: '/images/placeholders/makeup-3.jpg', alt: 'Natural Bridal Look' },
  { src: '/images/placeholders/makeup-4.jpg', alt: 'Classic Bridal Style' },
  { src: '/images/placeholders/service-location.jpg', alt: 'On-Location Service' },
  { src: '/images/placeholders/service-party.jpg', alt: 'Bridal Party Styling' },
];

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-[var(--background-primary)]">
      {/* Hero Section */}
      <section className="relative py-20 bg-[var(--background-primary)]">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 text-[var(--text-primary)]">
            Our Portfolio
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto text-[var(--text-secondary)]">
            Browse through our collection of bridal beauty transformations and find inspiration for your special day.
          </p>
        </div>
      </section>

      {/* Makeup Gallery */}
      <section id="makeup" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-[var(--text-primary)]">Bridal Makeup</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative aspect-[3/4] overflow-hidden rounded-lg shadow-lg"
              >
                <EfficientImage
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                  priority={index < 3}
                  onError={(e) => {
                    console.error(`Error loading image: ${image.src}`);
                    const target = e.target as HTMLImageElement;
                    target.src = `https://placehold.co/600x800/FFB6C1/FFFFFF?text=${encodeURIComponent(image.alt)}`;
                  }}
                  onLoad={() => console.log(`Loaded image: ${image.src}`)}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hair Gallery */}
      <section id="hair" className="py-16 bg-[var(--card-background)]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-[var(--text-primary)]">Bridal Hair</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {portfolioImages.map((image, index) => (
              <div key={index} className="relative aspect-square rounded-lg overflow-hidden group">
                <EfficientImage
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <p className="text-white text-center px-4">{image.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bridal Party Gallery */}
      <section id="party" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-[var(--text-primary)]">Bridal Party</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {portfolioImages.map((image, index) => (
              <div key={index} className="relative aspect-square rounded-lg overflow-hidden group">
                <EfficientImage
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <p className="text-white text-center px-4">{image.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-[var(--card-background)]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-[var(--text-primary)]">
            Ready to Create Your Perfect Look?
          </h2>
          <p className="text-xl mb-8 text-[var(--text-secondary)] max-w-2xl mx-auto">
            Book a consultation to discuss your vision and let us help you achieve the bridal look of your dreams.
          </p>
          <Link href="/booking">
            <Button size="lg" className="bg-[var(--accent-primary)] hover:bg-[var(--accent-secondary)] text-white">
              Book a Consultation
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
} 