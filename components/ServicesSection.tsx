"use client";

import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import Section from './Section';
import Card from './Card';

interface Service {
  title: string;
  description: string;
  icon: string;
}

const ServicesSection: React.FC = () => {
  const services: Service[] = [
    { title: 'Bridal Makeup', description: 'Flawless, long-lasting makeup that enhances your natural beauty.', icon: '💄' },
    { title: 'Bridal Hair', description: 'Elegant and timeless hairstyles for the bride and bridal party.', icon: '👰‍♀️' },
    { title: 'Trial Session', description: 'A personalized session to discuss your vision and create your perfect look.', icon: '📝' },
    { title: 'On-Location Services', description: 'We come to you, ensuring a stress-free and convenient experience.', icon: '📍' },
    { title: 'Bridal Party Packages', description: 'Special packages for the entire bridal party.', icon: '👯‍♀️' },
    { title: 'Special Occasion', description: 'Hair and Makeup for any special event.', icon: '✨' },
  ];

  return (
    <Section id="services" className="bg-[var(--background-primary)] text-[var(--text-primary)]">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="flex flex-col items-center justify-center text-center h-full">
              <span className="text-4xl mb-4">{service.icon}</span>
              <h3 className="text-xl font-semibold mb-2 text-[var(--text-primary)]">{service.title}</h3>
              <p className="text-[var(--text-secondary)]">{service.description}</p>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default ServicesSection;