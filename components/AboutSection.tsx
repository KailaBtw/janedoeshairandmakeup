import React from "react";
import Section from "./Section";

const AboutSection: React.FC = () => {
  return (
    <Section id="about" className="bg-gray-900 text-white">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Us</h2>
          <p className="text-gray-300 leading-relaxed">
            Welcome to Bridal Beauty, where we are passionate about making your
            wedding day as magical and stress-free as possible. Our team of
            experienced and talented stylists are dedicated to creating the
            perfect look that reflects your individual style and personality. We
            understand the importance of this day and strive to provide a
            personalized and unforgettable experience.
          </p>
          <p className="text-gray-300 leading-relaxed mt-4">
            From the initial consultation to the final touch-up, we are
            committed to providing exceptional service and ensuring you look and
            feel your absolute best. We use only the highest quality products to
            ensure a flawless and long-lasting finish.
          </p>
        </div>
        <div>
          {/* Replace with a relevant image of the team or salon */}
          <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330"></img>
        </div>
      </div>
    </Section>
  );
};

export default AboutSection;
