"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const COLORS = {
  coral: "#FF7B54",
  teal: "#5BA199",
  cream: "#FFF4E6",
  peach: "#FFB88C",
  sage: "#A8C69F",
  charcoal: "#2D3436",
  white: "#FFFFFF",
};

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  showArrow?: boolean;
  className?: string;
}

export default function Button({
  href,
  onClick,
  children,
  variant = "primary",
  size = "md",
  showArrow = false,
  className = "",
}: ButtonProps) {
  const baseStyles = "inline-flex items-center gap-2 font-display font-semibold rounded-full transition-all duration-300";
  
  const sizeStyles = {
    sm: "px-5 py-2.5 text-sm",
    md: "px-7 py-3.5 text-base",
    lg: "px-9 py-4 text-lg",
  };

  const variantStyles = {
    primary: {
      backgroundColor: COLORS.coral,
      color: COLORS.white,
      boxShadow: "0 4px 14px rgba(255, 123, 84, 0.3)",
    },
    secondary: {
      backgroundColor: COLORS.teal,
      color: COLORS.white,
      boxShadow: "0 4px 14px rgba(91, 161, 153, 0.3)",
    },
    outline: {
      backgroundColor: "transparent",
      color: COLORS.charcoal,
      border: `2px solid ${COLORS.coral}`,
      boxShadow: "none",
    },
  };

  const content = (
    <>
      {children}
      {showArrow && <ArrowRight className="w-5 h-5" />}
    </>
  );

  const combinedClassName = `${baseStyles} ${sizeStyles[size]} ${className}`;

  if (href) {
    return (
      <motion.div
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.98 }}
      >
        <Link
          href={href}
          className={combinedClassName}
          style={variantStyles[variant]}
          onMouseEnter={(e) => {
            if (variant === "primary") {
              e.currentTarget.style.backgroundColor = COLORS.peach;
              e.currentTarget.style.boxShadow = "0 6px 20px rgba(255, 123, 84, 0.4)";
            } else if (variant === "secondary") {
              e.currentTarget.style.backgroundColor = "#4A9088";
            }
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = variantStyles[variant].backgroundColor;
            e.currentTarget.style.boxShadow = variantStyles[variant].boxShadow || "none";
          }}
        >
          {content}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={combinedClassName}
      style={variantStyles[variant]}
      onMouseEnter={(e) => {
        if (variant === "primary") {
          e.currentTarget.style.backgroundColor = COLORS.peach;
          e.currentTarget.style.boxShadow = "0 6px 20px rgba(255, 123, 84, 0.4)";
        } else if (variant === "secondary") {
          e.currentTarget.style.backgroundColor = "#4A9088";
        }
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = variantStyles[variant].backgroundColor;
        e.currentTarget.style.boxShadow = variantStyles[variant].boxShadow || "none";
      }}
    >
      {content}
    </motion.button>
  );
}

