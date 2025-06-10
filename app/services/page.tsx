"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const services = [
  {
    title: "Bridal Makeup",
    description: "Professional makeup application for your special day, ensuring you look and feel your absolute best.",
    image: "/images/placeholders/makeup-1.jpg",
    features: [
      "Customized look for your skin type and tone",
      "Long-lasting, photo-ready finish",
      "Waterproof and transfer-resistant products",
      "Touch-up kit included"
    ]
  },
  {
    title: "Bridal Hair",
    description: "Expert hair styling and design to complement your wedding look and personal style.",
    image: "/images/placeholders/makeup-2.jpg",
    features: [
      "Custom style consultation",
      "Professional styling products",
      "Secure and comfortable hold",
      "Weather-resistant finish"
    ]
  },
  {
    title: "Bridal Party Packages",
    description: "Complete styling services for your entire bridal party, ensuring a cohesive look.",
    image: "/images/placeholders/service-party.jpg",
    features: [
      "Group booking discounts",
      "Coordinated looks",
      "Efficient timing",
      "Professional team"
    ]
  }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[var(--background-primary)] py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Our Services</h1>
        <div className="space-y-20">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              <div className={`relative h-[400px] rounded-lg overflow-hidden ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  priority={index === 0}
                  onError={(e) => {
                    console.error(`Error loading image: ${service.image}`);
                    const target = e.target as HTMLImageElement;
                    target.src = `https://placehold.co/800x600/FFB6C1/FFFFFF?text=${encodeURIComponent(service.title)}`;
                  }}
                  onLoad={() => console.log(`Loaded image: ${service.image}`)}
                />
              </div>
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <h2 className="text-3xl font-bold">{service.title}</h2>
                <p className="text-[var(--text-secondary)]">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <span className="w-2 h-2 bg-[var(--accent-primary)] rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button 
                  variant="outline" 
                  className="text-[var(--accent-primary)] hover:text-[var(--accent-secondary)] hover:bg-[var(--accent-primary)]/20 border-[var(--accent-primary)]/30"
                >
                  Book Now
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
} 