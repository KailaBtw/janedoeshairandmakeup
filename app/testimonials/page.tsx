import React from 'react';
import { Button } from '@/components/ui/button';
import { EfficientImage } from '@/components/ui/efficient-image';
import Link from 'next/link';

const testimonials = [
  {
    name: "Sarah & James",
    date: "June 2023",
    rating: 5,
    image: "/images/placeholders/testimonial-1.jpg",
    text: "Jane was absolutely amazing! She made me feel so beautiful on my wedding day. Her attention to detail and professionalism were outstanding. The makeup lasted all day and looked perfect in all our photos!"
  },
  {
    name: "Emily & Michael",
    date: "August 2023",
    rating: 5,
    image: "/images/placeholders/testimonial-2.jpg",
    text: "I couldn't have asked for a better experience. Jane's work on my hair and makeup was flawless. She understood exactly what I wanted and delivered beyond my expectations. My bridal party looked stunning too!"
  },
  {
    name: "Jessica & David",
    date: "September 2023",
    rating: 5,
    image: "/images/placeholders/testimonial-3.jpg",
    text: "Jane is incredibly talented! She created the perfect natural look that enhanced my features while still looking like me. Her calm demeanor helped keep me relaxed on my big day. Highly recommend!"
  },
  {
    name: "Rachel & Thomas",
    date: "October 2023",
    rating: 5,
    image: "/images/placeholders/testimonial-4.jpg",
    text: "The entire experience was wonderful. From the trial to the wedding day, Jane was professional, punctual, and incredibly skilled. My makeup stayed perfect through tears, dancing, and hours of photos!"
  }
];

const DEFAULT_AVATAR = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23FFB6C1'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='24' fill='white'%3EClient%3C/text%3E%3C/svg%3E";

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex gap-1">
    {[...Array(5)].map((_, index) => (
      <svg
        key={index}
        className={`w-5 h-5 ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-[var(--background-primary)] py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-4">Client Testimonials</h1>
          <p className="text-[var(--text-secondary)] text-center mb-12 max-w-2xl mx-auto">
            Read what our clients have to say about their experience with Jane Does Hair and Makeup.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-[var(--background-secondary)] rounded-lg p-8 shadow-lg"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden">
                    <EfficientImage
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      sizes="64px"
                      loading={index < 2 ? "eager" : "lazy"}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                    <p className="text-[var(--text-secondary)] text-sm">{testimonial.date}</p>
                    <StarRating rating={testimonial.rating} />
                  </div>
                </div>
                <p className="text-[var(--text-secondary)] italic">"{testimonial.text}"</p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold mb-4">Share Your Experience</h2>
            <p className="text-[var(--text-secondary)] mb-8">
              We'd love to hear about your experience with Jane Does Hair and Makeup.
            </p>
            <Link href="/contact">
              <Button 
                variant="outline" 
                className="text-[var(--accent-primary)] hover:text-[var(--accent-secondary)] hover:bg-[var(--accent-primary)]/20 border-[var(--accent-primary)]/30"
              >
                Leave a Review
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 