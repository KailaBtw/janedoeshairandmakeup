import { cn } from "@/lib/utils";
import React from "react";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

const Section: React.FC<SectionProps> = ({ children, className, id }) => (
  <section 
    id={id} 
    className={cn(
      "py-16 bg-[var(--background-primary)] text-[var(--text-primary)]",
      className
    )}
  >
    <div className="max-w-7xl mx-auto px-6 lg:px-8">{children}</div>
  </section>
);

export default Section;