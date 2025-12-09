"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, CheckCircle } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const COLORS = {
  coral: "#FF7B54",
  teal: "#5BA199",
  cream: "#FFF4E6",
  charcoal: "#2D3436",
  white: "#FFFFFF",
};

export default function BookPage() {
  useEffect(() => {
    // This page would integrate with your actual booking system
    // For now, it redirects to external booking (replace with real booking URL)
    // window.location.href = "https://your-booking-system.com";
  }, []);

  return (
    <>
      <Navbar />
      <main className="relative overflow-hidden min-h-screen flex items-center">
        <section className="py-24 px-6 w-full">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Calendar 
                className="w-20 h-20 mx-auto mb-8" 
                style={{ color: COLORS.coral }} 
              />
              <h1 
                className="text-5xl md:text-6xl font-display font-bold mb-6"
                style={{ color: COLORS.charcoal }}
              >
                Book Your <span style={{ color: COLORS.coral }}>Pet Care</span>
              </h1>
              <p 
                className="text-xl md:text-2xl mb-12"
                style={{ color: COLORS.charcoal, opacity: 0.8 }}
              >
                Ready to schedule? Here's how it works:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                {[
                  {
                    icon: Calendar,
                    title: "1. Choose Your Service",
                    description: "Dog walking, pet sitting, overnight care, or boarding"
                  },
                  {
                    icon: Clock,
                    title: "2. Pick Your Dates",
                    description: "Select the days and times that work for you"
                  },
                  {
                    icon: CheckCircle,
                    title: "3. Confirm Details",
                    description: "I'll reach out to confirm and answer questions"
                  },
                ].map((step, i) => (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                    className="p-8 rounded-3xl"
                    style={{ backgroundColor: COLORS.cream }}
                  >
                    <step.icon 
                      className="w-12 h-12 mx-auto mb-4" 
                      style={{ color: COLORS.coral }} 
                    />
                    <h3 
                      className="text-lg font-display font-bold mb-2"
                      style={{ color: COLORS.charcoal }}
                    >
                      {step.title}
                    </h3>
                    <p 
                      className="text-sm"
                      style={{ color: COLORS.charcoal, opacity: 0.7 }}
                    >
                      {step.description}
                    </p>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="p-12 rounded-3xl"
                style={{ 
                  backgroundColor: COLORS.coral,
                }}
              >
                <h2 
                  className="text-2xl md:text-3xl font-display font-bold mb-4"
                  style={{ color: COLORS.white }}
                >
                  For fastest booking:
                </h2>
                <p 
                  className="text-lg mb-6"
                  style={{ color: COLORS.white, opacity: 0.95 }}
                >
                  Text or call <strong>818-696-0055</strong>
                  <br />
                  I'll get back to you right away!
                </p>
                <a
                  href="tel:818-696-0055"
                  className="inline-block px-8 py-4 rounded-full font-display font-semibold text-lg transition-all duration-300 hover:scale-105"
                  style={{ 
                    backgroundColor: COLORS.white,
                    color: COLORS.coral 
                  }}
                >
                  Call Now: 818-696-0055
                </a>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="mt-8 text-sm"
                style={{ color: COLORS.charcoal, opacity: 0.6 }}
              >
                Need to ask questions first?{" "}
                <a 
                  href="/contact" 
                  className="underline"
                  style={{ color: COLORS.coral }}
                >
                  Contact me here
                </a>
              </motion.p>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

