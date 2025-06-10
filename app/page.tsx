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

// Dummy image URLs (replace with your actual image paths)
const imageUrls = [
  "https://images.unsplash.com/photo-1589156280159-27698a70f29e?q=80&w=3164&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Bridal makeup
  "https://images.unsplash.com/photo-1589156280159-27698a70f29e?q=80&w=3164&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Bridal hair
  "https://images.unsplash.com/photo-1589156280159-27698a70f29e?q=80&w=3164&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Flowers
  "https://images.unsplash.com/photo-1589156280159-27698a70f29e?q=80&w=3164&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Bride with flowers
  "https://images.unsplash.com/photo-1589156280159-27698a70f29e?q=80&w=3164&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Makeup Brushes
  "https://images.unsplash.com/photo-1589156280159-27698a70f29e?q=80&w=3164&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Hair accessories
];

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
  return <BridalBeautyApp />;
}
