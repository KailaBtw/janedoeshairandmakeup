import { cn } from "@/lib/utils";
import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className }) => (
  <div className={cn(
    "bg-[var(--card-background)] backdrop-blur-md rounded-xl p-6 shadow-lg border border-[var(--border-color)]",
    className
  )}>
    {children}
  </div>
);

export default Card;