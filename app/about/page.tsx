"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { EfficientImage } from '@/components/ui/efficient-image';
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
          <h1 className="text-4xl font-bold text-center mb-4">About Jane</h1>
          <p className="text-[var(--text-secondary)] text-center mb-12 max-w-2xl mx-auto">
            Your trusted beauty expert for special occasions and everyday glamour.
          </p>
          
          <div className="relative h-[500px] rounded-lg overflow-hidden mb-12">
            <EfficientImage
              src="/images/placeholders/about-jane.jpg"
              alt="Jane - Professional Makeup Artist"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="prose prose-lg mx-auto">
            <h2>My Journey</h2>
            <p>
              With over 10 years of experience in the beauty industry, I've had the privilege of helping countless brides
              and clients feel their most beautiful selves. My journey began with a passion for enhancing natural beauty
              and has evolved into a career dedicated to creating memorable experiences for my clients.
            </p>

            <h2>My Approach</h2>
            <p>
              I believe that makeup and hair styling should enhance your natural features while reflecting your personal
              style. My approach combines technical expertise with a deep understanding of individual preferences,
              ensuring that each client receives a look that's uniquely theirs.
            </p>

            <h2>Why Choose Me</h2>
            <ul>
              <li>Professional training and certification</li>
              <li>Extensive experience with various skin types and tones</li>
              <li>Commitment to using high-quality, long-lasting products</li>
              <li>Personalized attention and consultation</li>
              <li>Reliable and punctual service</li>
            </ul>

            <div className="text-center mt-12">
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