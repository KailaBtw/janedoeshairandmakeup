"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Sparkles, Scissors, Calendar, MapPin, Users, Star } from 'lucide-react';
import Image from 'next/image';

interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
}

const ServicesSection: React.FC = () => {
  const services: Service[] = [
    {
      title: "Bridal Makeup",
      description: "Professional makeup application for your special day, ensuring you look and feel your absolute best.",
      icon: <Sparkles className="w-6 h-6" />,
      image: "/images/placeholders/makeup-1.jpg"
    },
    {
      title: "Bridal Hair",
      description: "Expert hair styling and design to complement your wedding look and personal style.",
      icon: <Scissors className="w-6 h-6" />,
      image: "/images/placeholders/makeup-2.jpg"
    },
    {
      title: "Trial Session",
      description: "A pre-wedding consultation to perfect your look and ensure everything is exactly as you want it.",
      icon: <Calendar className="w-6 h-6" />,
      image: "/images/placeholders/makeup-3.jpg"
    },
    {
      title: "On-Location Services",
      description: "We come to you, providing our services at your chosen venue for maximum convenience.",
      icon: <MapPin className="w-6 h-6" />,
      image: "/images/placeholders/service-location.jpg"
    },
    {
      title: "Bridal Party Packages",
      description: "Complete styling services for your entire bridal party, ensuring a cohesive look.",
      icon: <Users className="w-6 h-6" />,
      image: "/images/placeholders/service-party.jpg"
    },
    {
      title: "Special Occasion",
      description: "Professional makeup and hair services for any special event or celebration.",
      icon: <Star className="w-6 h-6" />,
      image: "/images/placeholders/makeup-4.jpg"
    }
  ];

  return (
    <section id="services" className="py-20 bg-forest-100/95 dark:bg-forest-950/95 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-forest-50 dark:text-forest-100">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <Card className="overflow-hidden h-full transition-all duration-300 hover:shadow-xl bg-forest-200/50 dark:bg-forest-900/50 border-forest-300/30 dark:border-forest-800/30">
                <div className="relative h-48 w-full">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                    priority={index < 3}
                    onError={(e) => {
                      console.error(`Error loading image: ${service.image}`);
                      const target = e.target as HTMLImageElement;
                      target.src = `https://placehold.co/600x400/FFB6C1/FFFFFF?text=${encodeURIComponent(service.title)}`;
                    }}
                    onLoad={() => console.log(`Loaded image: ${service.image}`)}
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="p-2 rounded-full bg-fuchsia-600/10 text-fuchsia-400 dark:text-fuchsia-300 mr-3">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-forest-50 dark:text-forest-100">{service.title}</h3>
                  </div>
                  <p className="text-forest-200/80 dark:text-forest-300/80 mb-4">{service.description}</p>
                  <Button 
                    variant="outline" 
                    className="w-full text-fuchsia-400 dark:text-fuchsia-300 hover:text-fuchsia-300 dark:hover:text-fuchsia-200 hover:bg-fuchsia-600/20 border-fuchsia-600/30 dark:border-fuchsia-500/30"
                  >
                    Learn More
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;