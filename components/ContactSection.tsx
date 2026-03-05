import React from 'react';
import { Mail, Phone } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import Section from './Section';
import Card from './Card';
import { Button } from '@/components/ui/button';

const ContactSection: React.FC = () => {
  return (
    <Section id="contact" className="bg-[var(--background-primary)] text-[var(--text-primary)]">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Contact Us</h2>
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <p className="text-[var(--text-secondary)] mb-4">
            Get in touch to book your consultation or inquire about our services.
            We would love to hear from you!
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Mail className="h-5 w-5 text-[var(--accent-primary)]" />
              <a href="mailto:info@bridalbeauty.com" className="text-[var(--accent-secondary)] hover:underline">
                info@bridalbeauty.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-5 w-5 text-[var(--accent-primary)]" />
              <a href="tel:+15551234567" className="text-[var(--accent-secondary)] hover:underline">
                +1 (555) 123-4567
              </a>
            </div>
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faInstagram} className="h-5 w-5 text-[var(--accent-primary)]" />
              <a href="https://www.instagram.com/bridalbeauty" target="_blank" rel="noopener noreferrer" className="text-[var(--accent-secondary)] hover:underline">
                @bridalbeauty
              </a>
            </div>
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faFacebook} className="h-5 w-5 text-[var(--accent-secondary)]" />
              <a href="https://www.facebook.com/bridalbeauty" target="_blank" rel="noopener noreferrer" className="text-[var(--accent-secondary)] hover:underline">
                /bridalbeauty
              </a>
            </div>
          </div>
        </div>
        <div>
          <Card>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[var(--text-secondary)]">Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your Name"
                  className="mt-1 block w-full bg-[var(--card-background)] border border-[var(--border-color)] rounded-md py-2 px-3 text-[var(--text-primary)] shadow-sm focus:outline-none focus:ring-[var(--accent-primary)] focus:border-[var(--accent-primary)]"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[var(--text-secondary)]">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Your Email"
                  className="mt-1 block w-full bg-[var(--card-background)] border border-[var(--border-color)] rounded-md py-2 px-3 text-[var(--text-primary)] shadow-sm focus:outline-none focus:ring-[var(--accent-primary)] focus:border-[var(--accent-primary)]"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[var(--text-secondary)]">Message</label>
                <textarea
                  id="message"
                  placeholder="Your Message"
                  rows={4}
                  className="mt-1 block w-full bg-[var(--card-background)] border border-[var(--border-color)] rounded-md py-2 px-3 text-[var(--text-primary)] shadow-sm focus:outline-none focus:ring-[var(--accent-primary)] focus:border-[var(--accent-primary)] resize-none"
                ></textarea>
              </div>
              <Button 
                type="submit" 
                className="w-full bg-[var(--accent-primary)] hover:bg-[var(--accent-secondary)] text-[var(--text-primary)]"
              >
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </Section>
  );
};

export default ContactSection;