import { cn } from "@/lib/utils";
import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className }) => (
  <div className={cn("bg-white/5 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/10", className)}>
    {children}
  </div>
);

export default Card;