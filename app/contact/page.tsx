"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MessageCircle, MapPin, Clock, Heart } from "lucide-react";
import Button from "../components/Button";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const COLORS = {
  coral: "#FF7B54",
  teal: "#5BA199",
  cream: "#FFF4E6",
  peach: "#FFB88C",
  sage: "#A8C69F",
  charcoal: "#2D3436",
  white: "#FFFFFF",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="relative overflow-hidden">
        
        {/* ===== HERO SECTION ===== */}
        <section className="py-24 px-6">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Heart 
                className="w-16 h-16 mx-auto mb-6" 
                style={{ color: COLORS.coral }}
                fill={COLORS.coral}
              />
              <h1 
                className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6"
                style={{ color: COLORS.charcoal }}
              >
                Let's <span style={{ color: COLORS.coral }}>Connect</span>
              </h1>
              <p 
                className="text-xl md:text-2xl max-w-3xl mx-auto"
                style={{ color: COLORS.charcoal, opacity: 0.8 }}
              >
                Ready to give your pet the care they deserve? Reach out and let's chat about how I can help.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ===== CONTACT METHODS ===== */}
        <section className="py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {[
                {
                  icon: Phone,
                  title: "Call or Text",
                  info: "818-696-0055",
                  description: "Fastest way to reach me!",
                  href: "tel:818-696-0055",
                  primary: true,
                },
                {
                  icon: Mail,
                  title: "Email",
                  info: "hello@mowispetcare.com",
                  description: "I'll respond within 24 hours",
                  href: "mailto:hello@mowispetcare.com",
                },
                {
                  icon: MessageCircle,
                  title: "Social Media",
                  info: "@mowispetcare",
                  description: "DM me on Instagram",
                  href: "https://instagram.com/mowispetcare",
                },
              ].map((method, i) => (
                <motion.a
                  key={method.title}
                  href={method.href}
                  target={method.href.startsWith('http') ? "_blank" : undefined}
                  rel={method.href.startsWith('http') ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="p-8 rounded-3xl text-center group"
                  style={{ 
                    backgroundColor: method.primary ? COLORS.coral : COLORS.white,
                    boxShadow: method.primary 
                      ? "0 10px 40px rgba(255, 123, 84, 0.3)" 
                      : "0 4px 20px rgba(0, 0, 0, 0.05)",
                    color: method.primary ? COLORS.white : COLORS.charcoal,
                  }}
                >
                  <motion.div
                    whileHover={{ rotate: 15, scale: 1.1 }}
                    transition={{ type: "spring" }}
                    className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
                    style={{ 
                      backgroundColor: method.primary 
                        ? "rgba(255, 255, 255, 0.2)" 
                        : COLORS.cream 
                    }}
                  >
                    <method.icon 
                      className="w-8 h-8" 
                      style={{ color: method.primary ? COLORS.white : COLORS.coral }} 
                    />
                  </motion.div>
                  <h3 
                    className="text-xl font-display font-bold mb-2"
                    style={{ color: method.primary ? COLORS.white : COLORS.charcoal }}
                  >
                    {method.title}
                  </h3>
                  <p 
                    className="text-lg font-semibold mb-2"
                    style={{ color: method.primary ? COLORS.white : COLORS.coral }}
                  >
                    {method.info}
                  </p>
                  <p 
                    className="text-sm"
                    style={{ 
                      color: method.primary ? COLORS.white : COLORS.charcoal,
                      opacity: method.primary ? 0.9 : 0.7 
                    }}
                  >
                    {method.description}
                  </p>
                </motion.a>
              ))}
            </div>

            {/* Book Online CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <p 
                className="text-xl mb-6"
                style={{ color: COLORS.charcoal }}
              >
                Or schedule directly online:
              </p>
              <Button href="/book" size="lg" variant="secondary" showArrow>
                Book Online
              </Button>
            </motion.div>
          </div>
        </section>

        {/* ===== SERVICE AREA ===== */}
        <section 
          className="py-20 px-6"
          style={{ backgroundColor: COLORS.white }}
        >
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <MapPin 
                className="w-12 h-12 mx-auto mb-6" 
                style={{ color: COLORS.coral }} 
              />
              <h2 
                className="text-3xl md:text-4xl font-display font-bold mb-4"
                style={{ color: COLORS.charcoal }}
              >
                Service Area
              </h2>
              <p 
                className="text-lg md:text-xl mb-6"
                style={{ color: COLORS.charcoal, opacity: 0.8 }}
              >
                Proudly serving Los Angeles and surrounding areas
              </p>
              <p 
                className="text-base"
                style={{ color: COLORS.charcoal, opacity: 0.6 }}
              >
                Not sure if I cover your area? Just ask! I'm always happy to discuss.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ===== HOURS & AVAILABILITY ===== */}
        <section className="py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <Clock 
                className="w-12 h-12 mx-auto mb-6" 
                style={{ color: COLORS.teal }} 
              />
              <h2 
                className="text-3xl md:text-4xl font-display font-bold mb-6"
                style={{ color: COLORS.charcoal }}
              >
                Availability
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                <div 
                  className="p-6 rounded-2xl"
                  style={{ backgroundColor: COLORS.cream }}
                >
                  <h3 
                    className="font-display font-bold mb-2"
                    style={{ color: COLORS.charcoal }}
                  >
                    Regular Visits
                  </h3>
                  <p style={{ color: COLORS.charcoal, opacity: 0.8 }}>
                    7 days a week, flexible scheduling
                  </p>
                </div>
                <div 
                  className="p-6 rounded-2xl"
                  style={{ backgroundColor: COLORS.cream }}
                >
                  <h3 
                    className="font-display font-bold mb-2"
                    style={{ color: COLORS.charcoal }}
                  >
                    Response Time
                  </h3>
                  <p style={{ color: COLORS.charcoal, opacity: 0.8 }}>
                    Usually within a few hours
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ===== FINAL CTA ===== */}
        <section 
          className="py-24 px-6"
          style={{ backgroundColor: COLORS.teal }}
        >
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 
                className="text-3xl md:text-4xl font-display font-bold mb-6"
                style={{ color: COLORS.white }}
              >
                Text 818-696-0055 to book a free meet & greet
              </h2>
              <p 
                className="text-lg md:text-xl mb-8"
                style={{ color: COLORS.white, opacity: 0.95 }}
              >
                No pressure, no commitment — just a friendly conversation to see if we're a good fit for your pet.
              </p>
              <Button href="tel:818-696-0055" size="lg" variant="outline" className="bg-white">
                Call Now
              </Button>
            </motion.div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}

