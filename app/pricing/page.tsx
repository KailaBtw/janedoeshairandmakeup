import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const pricingPackages = [
  {
    title: "Bridal Makeup",
    price: "Starting at $250",
    description: "Complete bridal makeup service for your special day",
    features: [
      "Pre-wedding consultation",
      "Trial session",
      "Full face makeup application",
      "False lashes included",
      "Touch-up kit provided",
      "Travel within 30 miles"
    ]
  },
  {
    title: "Bridal Hair",
    price: "Starting at $200",
    description: "Professional hair styling for your wedding day",
    features: [
      "Pre-wedding consultation",
      "Trial session",
      "Professional styling",
      "Premium products",
      "Hair accessories included",
      "Travel within 30 miles"
    ]
  },
  {
    title: "Bridal Party Package",
    price: "Starting at $150/person",
    description: "Complete styling for your bridal party",
    features: [
      "Group booking discount",
      "Coordinated looks",
      "Efficient timing",
      "Professional team",
      "Travel within 30 miles",
      "Minimum 3 people"
    ]
  }
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-[var(--background-primary)] py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-4">Pricing & Packages</h1>
          <p className="text-[var(--text-secondary)] text-center mb-12 max-w-2xl mx-auto">
            We offer competitive pricing for all our services. Contact us for custom packages and special requests.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pricingPackages.map((pkg, index) => (
              <div
                key={index}
                className="bg-[var(--background-secondary)] rounded-lg p-8 shadow-lg"
              >
                <h2 className="text-2xl font-bold mb-2">{pkg.title}</h2>
                <p className="text-3xl font-bold text-[var(--accent-primary)] mb-4">{pkg.price}</p>
                <p className="text-[var(--text-secondary)] mb-6">{pkg.description}</p>
                
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <span className="w-2 h-2 bg-[var(--accent-primary)] rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link href="/booking">
                  <Button 
                    className="w-full bg-[var(--accent-primary)] hover:bg-[var(--accent-secondary)] text-white"
                  >
                    Book Now
                  </Button>
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold mb-4">Additional Services</h2>
            <p className="text-[var(--text-secondary)] mb-8">
              We also offer a range of additional services including:
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-left max-w-4xl mx-auto">
              {[
                "Mother of the Bride/Groom Styling",
                "Junior Bridesmaid Services",
                "Flower Girl Styling",
                "Special Occasion Makeup",
                "Photoshoot Styling",
                "Group Events"
              ].map((service, index) => (
                <li key={index} className="flex items-center">
                  <span className="w-2 h-2 bg-[var(--accent-primary)] rounded-full mr-3"></span>
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
} 