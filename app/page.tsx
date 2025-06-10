import React from "react";
import { EfficientImage } from "@/components/ui/efficient-image";
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import TopMenuBar from "@/components/TopMenuBar";
import ServicesSection from "@/components/ServicesSection";
import PortfolioSection from "@/components/PortfolioSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-forest-50 dark:bg-forest-950">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <EfficientImage
            src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=2074&auto=format&fit=crop"
            alt="Blue Ridge Mountains at sunset"
            fill
            priority
            sizes="100vw"
            quality={85}
            className="object-cover"
          />
          <div className="absolute inset-0 bg-forest-900/60 dark:bg-forest-950/70" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-forest-50">
            Your Dream Bridal Beauty
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-forest-100">
            Let us create the perfect hair and makeup for your special day.
            We specialize in creating stunning bridal looks that enhance your natural beauty.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/booking">
              <Button size="lg" className="bg-rose-primary hover:bg-rose-secondary text-white">
                Book a Consultation
              </Button>
            </Link>
            <Link href="/services">
              <Button size="lg" variant="outline" className="border-rose-bg text-rose-bg hover:bg-rose-bg/20">
                View Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Services Preview */}
      <section className="py-20 bg-forest-100/50 dark:bg-forest-900/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-forest-800 dark:text-forest-100">
            Our Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Bridal Makeup",
                image: "https://placehold.co/400x300/FFB6C1/FFFFFF?text=Makeup",
                link: "/services#makeup"
              },
              {
                title: "Bridal Hair",
                image: "https://placehold.co/400x300/FFB6C1/FFFFFF?text=Hair",
                link: "/services#hair"
              },
              {
                title: "Bridal Party",
                image: "https://placehold.co/400x300/FFB6C1/FFFFFF?text=Party",
                link: "/services#party"
              }
            ].map((service, index) => (
              <div key={index} className="group bg-rose-bg dark:bg-rose-bgAlt p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="relative h-48 mb-4 overflow-hidden rounded-lg">
                  <EfficientImage
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    loading="lazy"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-rose-primary dark:text-rose-secondary">{service.title}</h3>
                <p className="text-rose-secondary dark:text-rose-primary/80 mb-4">
                  Professional styling services tailored to make your special day unforgettable.
                </p>
                <Link href={service.link}>
                  <Button variant="link" className="text-rose-primary dark:text-rose-secondary hover:text-rose-secondary">
                    Learn More →
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-20 bg-forest-50 dark:bg-forest-950">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-forest-800 dark:text-forest-100">
            What Our Brides Say
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: "Sarah M.",
                image: "https://placehold.co/100x100/FFB6C1/FFFFFF?text=SM",
                quote: "Jane transformed my wedding day look beyond my expectations. Her attention to detail and natural style made me feel like the best version of myself."
              },
              {
                name: "Emily R.",
                image: "https://placehold.co/100x100/FFB6C1/FFFFFF?text=ER",
                quote: "The entire bridal party looked stunning! Jane's expertise in both hair and makeup created a cohesive, elegant look for everyone."
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-rose-bg dark:bg-rose-bgAlt p-6 rounded-lg shadow-lg">
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
                  <p className="text-rose-primary dark:text-rose-secondary font-semibold">{testimonial.name}</p>
                </div>
                <p className="text-rose-secondary dark:text-rose-primary/80 italic">
                  "{testimonial.quote}"
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/testimonials">
              <Button variant="outline" className="text-rose-primary dark:text-rose-secondary border-rose-primary/30 dark:border-rose-secondary/30 hover:bg-rose-primary/10">
                Read More Testimonials
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
