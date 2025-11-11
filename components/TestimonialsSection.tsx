"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { EfficientImage } from '@/components/ui/efficient-image';

// Extended testimonials data - easy to add more here
const testimonials = [
  {
    name: "Sarah M.",
    image: "https://placehold.co/100x100/FFB6C1/FFFFFF?text=SM",
    quote: "Jane transformed my wedding day look beyond my expectations. Her attention to detail and natural style made me feel like the best version of myself."
  },
  {
    name: "Emily R.",
    image: "https://placehold.co/100x100/FFB6C1/FFFFFF?text=ER",
    quote: "The entire bridal party looked stunning! Jane's expertise in both hair and makeup created a cohesive, elegant look for everyone."
  },
  {
    name: "Jessica L.",
    image: "https://placehold.co/100x100/FFB6C1/FFFFFF?text=JL",
    quote: "I was so nervous about my wedding day look, but Jane made me feel completely at ease. The trial was perfect and the actual day was even better!"
  },
  {
    name: "Amanda K.",
    image: "https://placehold.co/100x100/FFB6C1/FFFFFF?text=AK",
    quote: "Jane's work is absolutely stunning. She understood exactly what I wanted and delivered beyond my wildest dreams. My makeup lasted all day!"
  },
  {
    name: "Rachel T.",
    image: "https://placehold.co/100x100/FFB6C1/FFFFFF?text=RT",
    quote: "Professional, talented, and so sweet! Jane made my entire bridal party look amazing. I couldn't have asked for a better experience."
  },
  {
    name: "Michelle D.",
    image: "https://placehold.co/100x100/FFB6C1/FFFFFF?text=MD",
    quote: "From the consultation to the wedding day, Jane was incredible. Her attention to detail and calming presence made everything perfect."
  },
  {
    name: "Ashley P.",
    image: "https://placehold.co/100x100/FFB6C1/FFFFFF?text=AP",
    quote: "Jane's talent is unmatched! She created the perfect bridal look that was both timeless and modern. I felt absolutely beautiful."
  },
  {
    name: "Stephanie W.",
    image: "https://placehold.co/100x100/FFB6C1/FFFFFF?text=SW",
    quote: "The trial was so helpful and the wedding day execution was flawless. Jane made sure every detail was perfect for my special day."
  },
  {
    name: "Nicole B.",
    image: "https://placehold.co/100x100/FFB6C1/FFFFFF?text=NB",
    quote: "I couldn't have been happier with my bridal look. Jane's expertise and warm personality made the entire experience wonderful."
  },
  {
    name: "Olivia K.",
    image: "https://placehold.co/100x100/FFB6C1/FFFFFF?text=OK",
    quote: "Jane's attention to detail is incredible. She made sure every aspect of my bridal look was perfect for my special day."
  },
  {
    name: "Sophia T.",
    image: "https://placehold.co/100x100/FFB6C1/FFFFFF?text=ST",
    quote: "The trial session was so helpful! Jane really listened to what I wanted and delivered beyond my expectations."
  },
  {
    name: "Isabella G.",
    image: "https://placehold.co/100x100/FFB6C1/FFFFFF?text=IG",
    quote: "Professional, talented, and so easy to work with. Jane made my wedding day beauty dreams come true!"
  }
];

const TestimonialsSection: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [initialCount, setInitialCount] = useState(4);
  
  // Responsive initial count based on screen width - 1 row priority
  React.useEffect(() => {
    const updateInitialCount = () => {
      const width = window.innerWidth;
      if (width < 640) { // sm breakpoint
        setInitialCount(1); // 1 column, 1 row
      } else if (width < 1024) { // lg breakpoint  
        setInitialCount(2); // 2 columns, 1 row
      } else if (width < 1280) { // xl breakpoint
        setInitialCount(3); // 3 columns, 1 row
      } else {
        setInitialCount(4); // 4 columns, 1 row
      }
    };

    updateInitialCount();
    window.addEventListener('resize', updateInitialCount);
    return () => window.removeEventListener('resize', updateInitialCount);
  }, []);
  
  // Show responsive initial testimonials, rest when expanded
  const initialTestimonials = testimonials.slice(0, initialCount);
  const additionalTestimonials = testimonials.slice(initialCount);

  return (
    <section className="py-20 bg-forest-50/50 dark:bg-forest-950/90 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-forest-800 dark:text-forest-100">
          What Our Brides Say
        </h2>
        
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {initialTestimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
               className="bg-rose-bg dark:bg-rose-bgAlt p-8 rounded-lg shadow-lg min-h-[220px] min-w-[280px] flex flex-col"
            >
              <div className="flex items-center mb-4">
                <div className="relative w-12 h-12 mr-4">
                  <EfficientImage
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    sizes="48px"
                    loading="lazy"
                    className="rounded-full"
                  />
                </div>
                <p className="text-rose-primary dark:text-rose-secondary font-semibold">
                  {testimonial.name}
                </p>
              </div>
              <p className="text-rose-secondary dark:text-rose-primary/80 italic flex-grow">
                "{testimonial.quote}"
              </p>
            </motion.div>
          ))}
        </div>

        {/* Additional testimonials that appear when expanded */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="overflow-hidden"
            >
               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-8">
                 {additionalTestimonials.map((testimonial, index) => (
                  <motion.div
                    key={testimonial.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-rose-bg dark:bg-rose-bgAlt p-8 rounded-lg shadow-lg min-h-[220px] min-w-[280px] flex flex-col"
                  >
                    <div className="flex items-center mb-4">
                      <div className="relative w-12 h-12 mr-4">
                        <EfficientImage
                          src={testimonial.image}
                          alt={testimonial.name}
                          fill
                          sizes="48px"
                          loading="lazy"
                          className="rounded-full"
                        />
                      </div>
                      <p className="text-rose-primary dark:text-rose-secondary font-semibold">
                        {testimonial.name}
                      </p>
                    </div>
                    <p className="text-rose-secondary dark:text-rose-primary/80 italic flex-grow">
                      "{testimonial.quote}"
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="text-center mt-8 max-w-7xl mx-auto">
          <Button
            onClick={() => setIsExpanded(!isExpanded)}
            variant="outline"
            className="text-rose-primary dark:text-rose-secondary border-rose-primary/30 dark:border-rose-secondary/30 hover:bg-rose-primary/10 transition-all duration-300"
          >
            <motion.span
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="mr-2"
            >
              ▼
            </motion.span>
            {isExpanded ? "Show Less" : "Read More Testimonials"}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
