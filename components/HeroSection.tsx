"use client";

import React from 'react';
import { motion, useAnimation } from 'framer-motion'; // Example: if you're using 'motion' and 'useAnimation'
import { Button } from '@/components/ui/button';
import Section from './Section';

const HeroSection: React.FC = () => {
  return (
    <Section 
      id="home" 
      className="bg-gradient-to-br from-[var(--accent-primary)] via-[var(--accent-secondary)] to-[var(--background-primary)] text-[var(--text-primary)] flex items-center justify-center"
    >
      <div className="text-center space-y-6">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold"
        >
          Your Dream Bridal Beauty
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          className="text-lg sm:text-xl text-[var(--text-secondary)] max-w-2xl mx-auto"
        >
          Let us create the perfect hair and makeup for your special day. We specialize in creating stunning bridal looks that enhance your natural beauty.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
        >
          <Button 
            variant="default" 
            size="lg" 
            className="bg-[var(--accent-primary)] hover:bg-[var(--accent-secondary)] text-[var(--text-primary)]"
          >
            Book a Consultation
          </Button>
        </motion.div>
      </div>
    </Section>
  );
};

export default HeroSection;