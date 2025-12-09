"use client";

import { motion } from "framer-motion";
import { Heart, Shield, Star, PawPrint, Clock, Award } from "lucide-react";
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

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="relative overflow-hidden">
        
        {/* ===== HERO SECTION ===== */}
        <section className="py-24 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <span 
                  className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6"
                  style={{ 
                    backgroundColor: COLORS.peach,
                    color: COLORS.white 
                  }}
                >
                  Meet Mowi
                </span>
                <h1 
                  className="text-5xl md:text-6xl font-display font-bold mb-6"
                  style={{ color: COLORS.charcoal }}
                >
                  I'm Mowi!
                </h1>
                <p 
                  className="text-xl mb-6"
                  style={{ color: COLORS.coral }}
                >
                  Local pet sitter, animal lover & dog walker in LA
                </p>
                <p 
                  className="text-lg leading-relaxed mb-6"
                  style={{ color: COLORS.charcoal, opacity: 0.8 }}
                >
                  I built this company on a simple belief: <strong>every pet deserves exceptional care, genuine love, and unwavering attention.</strong>
                </p>
                <p 
                  className="text-lg leading-relaxed"
                  style={{ color: COLORS.charcoal, opacity: 0.8 }}
                >
                  After working with countless animals over the years, one thing is clear — every pet has a unique personality, and those differences matter.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div 
                  className="aspect-[4/5] rounded-3xl overflow-hidden"
                  style={{ 
                    backgroundColor: COLORS.teal,
                    boxShadow: "0 20px 60px rgba(91, 161, 153, 0.3)"
                  }}
                >
                  {/* Placeholder for Mowi's photo */}
                  <div className="w-full h-full flex items-center justify-center">
                    <PawPrint className="w-32 h-32" style={{ color: COLORS.white, opacity: 0.3 }} />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ===== MY STORY ===== */}
        <section 
          className="py-20 px-6"
          style={{ backgroundColor: COLORS.white }}
        >
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 
                className="text-4xl md:text-5xl font-display font-bold mb-6"
                style={{ color: COLORS.charcoal }}
              >
                My Story
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6 text-lg leading-relaxed"
              style={{ color: COLORS.charcoal, opacity: 0.8 }}
            >
              <p>
                Growing up, I always had a special connection with animals. While other kids were playing with toys, I was making friends with every dog, cat, and bird in the neighborhood. That deep love for animals never left me — it only grew stronger.
              </p>
              <p>
                Over the years, I've cared for all types of pets: energetic puppies who needed to burn off energy, senior cats who just wanted gentle companionship, anxious dogs who needed patience and routine, and even birds who had their own quirky personalities.
              </p>
              <p>
                <strong>What I learned is this:</strong> Every pet is an individual. What works for one doesn't work for another. Some pets thrive on adventure and play. Others need calm, quiet, and predictability. The best care isn't one-size-fits-all — it's personalized, attentive, and built on real understanding.
              </p>
              <p>
                That's why Mowi's Pet Care exists. I wanted to create a service where your pet gets to work with the same person every time — <strong>me</strong>. Where I take the time to learn their habits, preferences, and personality. Where care isn't rushed or impersonal, but thoughtful and consistent.
              </p>
              <p>
                Your trust means everything to me, and I care for every pet as if they were my own.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ===== VALUES ===== */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 
                className="text-4xl md:text-5xl font-display font-bold mb-4"
                style={{ color: COLORS.charcoal }}
              >
                What I Stand For
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Heart,
                  title: "Genuine Care",
                  description: "I don't just do this for a paycheck. I genuinely love animals and it shows in how I interact with every pet."
                },
                {
                  icon: Shield,
                  title: "Trust & Reliability",
                  description: "Licensed, insured, and professional. Your pet and home are in safe, responsible hands."
                },
                {
                  icon: Star,
                  title: "Personalized Attention",
                  description: "One caretaker, consistent care. Your pet gets to know me, trust me, and feel comfortable with me."
                },
              ].map((value, i) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="p-8 rounded-3xl text-center"
                  style={{ 
                    backgroundColor: COLORS.cream,
                  }}
                >
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                    className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: COLORS.white }}
                  >
                    <value.icon className="w-8 h-8" style={{ color: COLORS.coral }} />
                  </motion.div>
                  <h3 
                    className="text-2xl font-display font-bold mb-4"
                    style={{ color: COLORS.charcoal }}
                  >
                    {value.title}
                  </h3>
                  <p 
                    className="leading-relaxed"
                    style={{ color: COLORS.charcoal, opacity: 0.8 }}
                  >
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== CREDENTIALS ===== */}
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
              className="text-center mb-12"
            >
              <h2 
                className="text-4xl md:text-5xl font-display font-bold mb-4"
                style={{ color: COLORS.charcoal }}
              >
                Professional & Trusted
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { icon: Award, title: "10+ Years Experience", description: "Caring for pets of all types and temperaments" },
                { icon: Shield, title: "Licensed & Insured", description: "Fully covered for your peace of mind" },
                { icon: Heart, title: "Woman-Owned Business", description: "Built on integrity, care, and genuine love for animals" },
                { icon: Clock, title: "Reliable & Consistent", description: "Rain or shine, I show up for your pet" },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex items-start gap-4 p-6 rounded-2xl"
                  style={{ backgroundColor: COLORS.cream }}
                >
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: COLORS.white }}
                  >
                    <item.icon className="w-6 h-6" style={{ color: COLORS.coral }} />
                  </div>
                  <div>
                    <h3 
                      className="font-display font-bold text-lg mb-1"
                      style={{ color: COLORS.charcoal }}
                    >
                      {item.title}
                    </h3>
                    <p 
                      className="text-sm"
                      style={{ color: COLORS.charcoal, opacity: 0.7 }}
                    >
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== CTA SECTION ===== */}
        <section className="py-24 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="p-12 md:p-16 rounded-3xl text-center"
              style={{ 
                backgroundColor: COLORS.coral,
              }}
            >
              <h2 
                className="text-3xl md:text-4xl font-display font-bold mb-6"
                style={{ color: COLORS.white }}
              >
                Let's meet your pet!
              </h2>
              <p 
                className="text-lg md:text-xl mb-8"
                style={{ color: COLORS.white, opacity: 0.95 }}
              >
                Schedule a free meet and greet. No pressure, just a chance for us to get to know each other and see if we're a good fit.
              </p>
              <Button href="/contact" size="lg" variant="outline" className="bg-white" showArrow>
                Schedule Meet & Greet
              </Button>
            </motion.div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}

