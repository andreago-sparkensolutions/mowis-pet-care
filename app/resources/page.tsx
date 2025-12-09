"use client";

import { motion } from "framer-motion";
import { BookOpen, Heart, Shield, AlertCircle, Phone, Download } from "lucide-react";
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

const resources = [
  {
    icon: BookOpen,
    title: "Choosing the Right Pet Sitter",
    description: "A comprehensive guide to finding someone you can trust with your beloved pet.",
    tips: [
      "Look for licensed and insured professionals",
      "Ask about their experience with your pet's specific needs",
      "Request references from other pet parents",
      "Schedule a meet and greet before committing",
      "Ensure consistent communication and updates",
    ],
  },
  {
    icon: Heart,
    title: "Preparing Your Pet for a Sitter",
    description: "How to help your pet feel comfortable and safe with their caretaker.",
    tips: [
      "Introduce your pet to their sitter in advance",
      "Maintain their regular routine and schedule",
      "Leave familiar toys, blankets, and comfort items",
      "Provide clear written instructions",
      "Start with shorter visits before longer stays",
    ],
  },
  {
    icon: Shield,
    title: "Emergency Preparedness",
    description: "Essential information every pet parent should have ready.",
    tips: [
      "Keep vet contact info easily accessible",
      "Have a backup emergency contact person",
      "Maintain up-to-date vaccination records",
      "Know the nearest 24-hour vet clinic",
      "Have a pet first aid kit ready",
    ],
  },
];

export default function ResourcesPage() {
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
              <h1 
                className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6"
                style={{ color: COLORS.charcoal }}
              >
                Pet Care <span style={{ color: COLORS.coral }}>Resources</span>
              </h1>
              <p 
                className="text-xl md:text-2xl max-w-3xl mx-auto"
                style={{ color: COLORS.charcoal, opacity: 0.8 }}
              >
                Helpful tips and guides to ensure your pet gets the best care possible, whether you're choosing a sitter or preparing for their visit.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ===== RESOURCES SECTIONS ===== */}
        {resources.map((resource, i) => (
          <section 
            key={resource.title}
            className="py-20 px-6"
            style={{ backgroundColor: i % 2 === 0 ? COLORS.white : "transparent" }}
          >
            <div className="max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="flex items-start gap-6 mb-8">
                  <div 
                    className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: COLORS.cream }}
                  >
                    <resource.icon className="w-8 h-8" style={{ color: COLORS.coral }} />
                  </div>
                  <div>
                    <h2 
                      className="text-3xl md:text-4xl font-display font-bold mb-3"
                      style={{ color: COLORS.charcoal }}
                    >
                      {resource.title}
                    </h2>
                    <p 
                      className="text-lg"
                      style={{ color: COLORS.charcoal, opacity: 0.8 }}
                    >
                      {resource.description}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {resource.tips.map((tip, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      className="flex items-start gap-3 p-4 rounded-xl"
                      style={{ backgroundColor: COLORS.cream }}
                    >
                      <div 
                        className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                        style={{ backgroundColor: COLORS.coral }}
                      />
                      <span 
                        className="leading-relaxed"
                        style={{ color: COLORS.charcoal }}
                      >
                        {tip}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>
        ))}

        {/* ===== EMERGENCY CONTACTS ===== */}
        <section 
          className="py-20 px-6"
          style={{ backgroundColor: COLORS.coral }}
        >
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <AlertCircle 
                className="w-16 h-16 mx-auto mb-6" 
                style={{ color: COLORS.white }} 
              />
              <h2 
                className="text-3xl md:text-4xl font-display font-bold mb-4"
                style={{ color: COLORS.white }}
              >
                Important Emergency Numbers
              </h2>
              <p 
                className="text-lg mb-8"
                style={{ color: COLORS.white, opacity: 0.95 }}
              >
                Keep these numbers handy in case of an emergency
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                <div 
                  className="p-6 rounded-2xl"
                  style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}
                >
                  <p className="font-display font-bold mb-2" style={{ color: COLORS.white }}>
                    ASPCA Animal Poison Control
                  </p>
                  <p style={{ color: COLORS.white, opacity: 0.9 }}>
                    (888) 426-4435
                  </p>
                </div>
                <div 
                  className="p-6 rounded-2xl"
                  style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}
                >
                  <p className="font-display font-bold mb-2" style={{ color: COLORS.white }}>
                    Pet Emergency Hotline
                  </p>
                  <p style={{ color: COLORS.white, opacity: 0.9 }}>
                    (855) 764-7661
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ===== FREE GUIDE DOWNLOAD ===== */}
        <section className="py-24 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="p-12 md:p-16 rounded-3xl text-center"
              style={{ 
                backgroundColor: COLORS.white,
                boxShadow: "0 10px 50px rgba(255, 123, 84, 0.15)"
              }}
            >
              <Download 
                className="w-16 h-16 mx-auto mb-6" 
                style={{ color: COLORS.coral }} 
              />
              <h2 
                className="text-3xl md:text-4xl font-display font-bold mb-6"
                style={{ color: COLORS.charcoal }}
              >
                Download Our Free Pet Sitter Checklist
              </h2>
              <p 
                className="text-lg md:text-xl mb-8"
                style={{ color: COLORS.charcoal, opacity: 0.8 }}
              >
                A quick checklist of green flags that separate great pet sitters from the rest. Perfect for anyone searching for reliable care in LA.
              </p>
              <Button href="/contact" size="lg" showArrow>
                Get the Free Guide
              </Button>
            </motion.div>
          </div>
        </section>

        {/* ===== QUESTIONS CTA ===== */}
        <section 
          className="py-20 px-6"
          style={{ backgroundColor: COLORS.teal }}
        >
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Phone 
                className="w-16 h-16 mx-auto mb-6" 
                style={{ color: COLORS.white }} 
              />
              <h2 
                className="text-3xl md:text-4xl font-display font-bold mb-4"
                style={{ color: COLORS.white }}
              >
                Have questions about pet care?
              </h2>
              <p 
                className="text-lg md:text-xl mb-8"
                style={{ color: COLORS.white, opacity: 0.95 }}
              >
                I'm always happy to chat and answer any questions you might have about caring for your furry friend.
              </p>
              <Button href="/contact" size="lg" variant="outline" className="bg-white" showArrow>
                Get in Touch
              </Button>
            </motion.div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}

