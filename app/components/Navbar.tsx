"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, PawPrint, Phone } from "lucide-react";
import Button from "./Button";

const COLORS = {
  coral: "#FF7B54",
  teal: "#5BA199",
  cream: "#FFF4E6",
  charcoal: "#2D3436",
  white: "#FFFFFF",
};

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About Mowi" },
  { href: "/resources", label: "Pet Resources" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 left-0 right-0 z-50">
      <div 
        className="backdrop-blur-lg border-b"
        style={{ 
          backgroundColor: "rgba(255, 244, 230, 0.95)",
          borderColor: "rgba(255, 123, 84, 0.2)"
        }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative w-40 h-12"
              >
                <Image
                  src="/images/logos/LOGO SUMMER 2025.png"
                  alt="Mowi's Pet Care Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative text-sm font-medium transition-colors duration-300"
                  style={{ 
                    color: pathname === link.href ? COLORS.coral : COLORS.charcoal
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = COLORS.coral;
                  }}
                  onMouseLeave={(e) => {
                    if (pathname !== link.href) {
                      e.currentTarget.style.color = COLORS.charcoal;
                    }
                  }}
                >
                  {link.label}
                  {pathname === link.href && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute -bottom-1 left-0 right-0 h-0.5"
                      style={{ backgroundColor: COLORS.coral }}
                      initial={false}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* Desktop CTAs */}
            <div className="hidden lg:flex items-center gap-4">
              <a 
                href="tel:818-696-0055"
                className="flex items-center gap-2 text-sm font-medium transition-colors duration-300"
                style={{ color: COLORS.teal }}
                onMouseEnter={(e) => e.currentTarget.style.color = COLORS.coral}
                onMouseLeave={(e) => e.currentTarget.style.color = COLORS.teal}
              >
                <Phone className="w-4 h-4" />
                818-696-0055
              </a>
              <Button href="/book" size="sm" showArrow>
                Book Online
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg transition-colors duration-300"
              style={{ color: COLORS.charcoal }}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden"
              style={{ backgroundColor: COLORS.cream }}
            >
              <div className="px-6 py-6 space-y-4">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-2 text-lg font-medium transition-colors duration-300"
                      style={{ 
                        color: pathname === link.href ? COLORS.coral : COLORS.charcoal
                      }}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                <div className="pt-4 space-y-3">
                  <a 
                    href="tel:818-696-0055"
                    className="flex items-center gap-2 text-lg font-medium"
                    style={{ color: COLORS.teal }}
                  >
                    <Phone className="w-5 h-5" />
                    818-696-0055
                  </a>
                  <Button href="/book" size="md" showArrow className="w-full justify-center">
                    Book Online
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}

