"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[var(--background-primary)] py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-bold text-center mb-12">About Jane</h1>
          
          <div className="relative h-[500px] rounded-lg overflow-hidden mb-12">
            <Image
              src="/images/placeholders/about-jane.jpg"
              alt="Jane - Professional Makeup Artist"
              fill
              className="object-cover"
              priority
              onError={(e) => {
                console.error('Error loading about image');
                const target = e.target as HTMLImageElement;
                target.src = 'https://placehold.co/1200x800/FFB6C1/FFFFFF?text=Jane+Does+Hair+and+Makeup';
              }}
            />
          </div>

          <div className="space-y-8">
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">Our Story</h2>
              <p className="text-[var(--text-secondary)]">
                With over a decade of experience in the beauty industry, Jane has established herself as a premier hair and makeup artist specializing in bridal and special occasion styling. Her passion for enhancing natural beauty and creating timeless looks has made her a sought-after artist in the industry.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">Our Approach</h2>
              <p className="text-[var(--text-secondary)]">
                We believe that every client deserves to feel confident and beautiful. Our approach combines professional expertise with personalized attention, ensuring that each client receives a look that perfectly complements their features and style.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold">Why Choose Us</h2>
              <ul className="space-y-3">
                {[
                  "Professional certification and extensive experience",
                  "Premium quality products and tools",
                  "Personalized consultation and attention",
                  "Stress-free, comfortable experience",
                  "Commitment to client satisfaction"
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <span className="w-2 h-2 bg-[var(--accent-primary)] rounded-full mr-3"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <div className="pt-8 text-center">
              <Button 
                variant="outline" 
                className="text-[var(--accent-primary)] hover:text-[var(--accent-secondary)] hover:bg-[var(--accent-primary)]/20 border-[var(--accent-primary)]/30"
              >
                Book a Consultation
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 