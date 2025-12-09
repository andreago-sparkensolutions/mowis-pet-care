"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { PawPrint, Mail, Phone, Instagram, Facebook } from "lucide-react";

const COLORS = {
  coral: "#FF7B54",
  teal: "#5BA199",
  cream: "#FFF4E6",
  charcoal: "#2D3436",
  white: "#FFFFFF",
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer 
      className="relative overflow-hidden"
      style={{ backgroundColor: COLORS.charcoal }}
    >
      {/* Decorative paw prints */}
      <div className="absolute inset-0 opacity-5">
        {[...Array(6)].map((_, i) => (
          <PawPrint
            key={i}
            className="absolute w-20 h-20"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              transform: `rotate(${Math.random() * 360}deg)`,
              color: COLORS.white,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Column */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-4 group">
              <motion.div
                whileHover={{ rotate: 15 }}
                transition={{ type: "spring" }}
              >
                <PawPrint 
                  className="w-8 h-8" 
                  style={{ color: COLORS.coral }}
                  fill={COLORS.coral}
                />
              </motion.div>
              <span 
                className="font-display font-bold text-xl"
                style={{ color: COLORS.white }}
              >
                Mowi's Pet Care
              </span>
            </Link>
            <p className="text-sm leading-relaxed" style={{ color: "rgba(255, 255, 255, 0.7)" }}>
              Professional pet care services in Los Angeles. Your pets deserve care that is like family.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-semibold mb-4" style={{ color: COLORS.white }}>
              The Site
            </h3>
            <ul className="space-y-2">
              {["Home", "About", "Services", "Pet Resources", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={item === "Home" ? "/" : item === "Pet Resources" ? "/resources" : `/${item.toLowerCase().replace(" ", "-")}`}
                    className="text-sm transition-colors duration-300"
                    style={{ color: "rgba(255, 255, 255, 0.7)" }}
                    onMouseEnter={(e) => e.currentTarget.style.color = COLORS.coral}
                    onMouseLeave={(e) => e.currentTarget.style.color = "rgba(255, 255, 255, 0.7)"}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display font-semibold mb-4" style={{ color: COLORS.white }}>
              Services
            </h3>
            <ul className="space-y-2">
              {["Dog Walking", "Pet Sitting", "Overnight Care", "Private Boarding"].map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="text-sm transition-colors duration-300"
                    style={{ color: "rgba(255, 255, 255, 0.7)" }}
                    onMouseEnter={(e) => e.currentTarget.style.color = COLORS.coral}
                    onMouseLeave={(e) => e.currentTarget.style.color = "rgba(255, 255, 255, 0.7)"}
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-semibold mb-4" style={{ color: COLORS.white }}>
              Let's Connect
            </h3>
            <div className="space-y-3">
              <a 
                href="tel:818-696-0055"
                className="flex items-center gap-2 text-sm transition-colors duration-300"
                style={{ color: "rgba(255, 255, 255, 0.7)" }}
                onMouseEnter={(e) => e.currentTarget.style.color = COLORS.coral}
                onMouseLeave={(e) => e.currentTarget.style.color = "rgba(255, 255, 255, 0.7)"}
              >
                <Phone className="w-4 h-4" />
                818-696-0055
              </a>
              <a 
                href="mailto:hello@mowispetcare.com"
                className="flex items-center gap-2 text-sm transition-colors duration-300"
                style={{ color: "rgba(255, 255, 255, 0.7)" }}
                onMouseEnter={(e) => e.currentTarget.style.color = COLORS.coral}
                onMouseLeave={(e) => e.currentTarget.style.color = "rgba(255, 255, 255, 0.7)"}
              >
                <Mail className="w-4 h-4" />
                hello@mowispetcare.com
              </a>
              
              {/* Social Links */}
              <div className="flex gap-3 pt-2">
                <motion.a
                  href="https://instagram.com/mowispetcare"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="p-2 rounded-lg transition-colors duration-300"
                  style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = COLORS.coral}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.1)"}
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" style={{ color: COLORS.white }} />
                </motion.a>
                <motion.a
                  href="https://facebook.com/mowispetcare"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="p-2 rounded-lg transition-colors duration-300"
                  style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = COLORS.coral}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.1)"}
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" style={{ color: COLORS.white }} />
                </motion.a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div 
          className="pt-8 border-t text-center"
          style={{ borderColor: "rgba(255, 255, 255, 0.1)" }}
        >
          <p className="text-sm" style={{ color: "rgba(255, 255, 255, 0.6)" }}>
            © {currentYear} Mowi's Pet Care. All rights reserved. | Licensed & Insured | Woman-Owned Business
          </p>
          <p className="text-xs mt-2" style={{ color: "rgba(255, 255, 255, 0.4)" }}>
            Made with ❤️ for pets and their people
          </p>
        </div>
      </div>
    </footer>
  );
}

