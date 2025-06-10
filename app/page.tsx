import React, { useState, useEffect, useRef, useCallback } from "react";
// import { motion, useScroll, useTransform } from 'framer-motion';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ThemeProvider } from "@/components/theme/ThemeContext";
import TopMenuBar from "@/components/TopMenuBar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import PortfolioSection from "@/components/PortfolioSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { Menu, Mail, Phone, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Button } from '@/components/ui/button';
import Link from 'next/link';

// Placeholder images
const placeholderImages = {
  hero: "https://placehold.co/1920x1080/FFB6C1/FFFFFF?text=Bridal+Beauty",
  service1: "https://placehold.co/400x300/FFB6C1/FFFFFF?text=Makeup",
  service2: "https://placehold.co/400x300/FFB6C1/FFFFFF?text=Hair",
  service3: "https://placehold.co/400x300/FFB6C1/FFFFFF?text=Party",
  testimonial1: "https://placehold.co/100x100/FFB6C1/FFFFFF?text=SM",
  testimonial2: "https://placehold.co/100x100/FFB6C1/FFFFFF?text=ER",
};

// --- Helper Components ---

// Main App Component
const BridalBeautyApp = () => {
  return (
    <div className="min-h-screen bg-[var(--background-primary)] text-[var(--text-primary)]">
      <ThemeProvider>
        <TopMenuBar />
        <main>
        <HeroSection />
        <ServicesSection />
        <PortfolioSection />
        <AboutSection />
        <ContactSection />
        </main>
      </ThemeProvider>
    </div>
  );
};

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div className="relative w-full h-[600px]">
            <Image
              src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=2074&auto=format&fit=crop"
              alt="Blue Ridge Mountains at sunset"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/40" /> {/* Overlay */}
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Your Dream Bridal Beauty
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-100">
            Let us create the perfect hair and makeup for your special day.
            We specialize in creating stunning bridal looks that enhance your natural beauty.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/booking">
              <Button size="lg" className="bg-[var(--accent-primary)] hover:bg-[var(--accent-secondary)] text-white">
                Book a Consultation
              </Button>
            </Link>
            <Link href="/services">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
                View Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Services Preview */}
      <section className="py-20 bg-[var(--background-primary)]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[var(--text-primary)]">
            Our Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Service Preview Cards */}
            <div className="bg-[var(--card-background)] p-6 rounded-lg">
              <div className="relative h-48 mb-4">
                <Image
                  src={placeholderImages.service1}
                  alt="Bridal Makeup"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-[var(--text-primary)]">Bridal Makeup</h3>
              <p className="text-[var(--text-secondary)] mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <Link href="/services#makeup">
                <Button variant="link" className="text-[var(--accent-primary)]">
                  Learn More →
                </Button>
              </Link>
            </div>
            <div className="bg-[var(--card-background)] p-6 rounded-lg">
              <div className="relative h-48 mb-4">
                <Image
                  src={placeholderImages.service2}
                  alt="Bridal Hair"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-[var(--text-primary)]">Bridal Hair</h3>
              <p className="text-[var(--text-secondary)] mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <Link href="/services#hair">
                <Button variant="link" className="text-[var(--accent-primary)]">
                  Learn More →
                </Button>
              </Link>
            </div>
            <div className="bg-[var(--card-background)] p-6 rounded-lg">
              <div className="relative h-48 mb-4">
                <Image
                  src={placeholderImages.service3}
                  alt="Bridal Party"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-[var(--text-primary)]">Bridal Party</h3>
              <p className="text-[var(--text-secondary)] mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <Link href="/services#party">
                <Button variant="link" className="text-[var(--accent-primary)]">
                  Learn More →
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-20 bg-[var(--background-primary)]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[var(--text-primary)]">
            What Our Brides Say
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[var(--card-background)] p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="relative w-12 h-12 mr-4">
                  <Image
                    src={placeholderImages.testimonial1}
                    alt="Sarah M."
                    fill
                    className="rounded-full"
                  />
                </div>
                <p className="text-[var(--text-primary)] font-semibold">Sarah M.</p>
              </div>
              <p className="text-[var(--text-secondary)] italic">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
              </p>
            </div>
            <div className="bg-[var(--card-background)] p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="relative w-12 h-12 mr-4">
                  <Image
                    src={placeholderImages.testimonial2}
                    alt="Emily R."
                    fill
                    className="rounded-full"
                  />
                </div>
                <p className="text-[var(--text-primary)] font-semibold">Emily R.</p>
              </div>
              <p className="text-[var(--text-secondary)] italic">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
              </p>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link href="/testimonials">
              <Button variant="outline" className="text-[var(--accent-primary)] border-[var(--accent-primary)]">
                Read More Testimonials
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
