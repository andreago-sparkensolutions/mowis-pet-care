"use client";

import { motion } from "framer-motion";
import { Heart, Shield, Clock, Star, PawPrint, CheckCircle, Download, Sparkles } from "lucide-react";
import Image from "next/image";
import Button from "./components/Button";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const COLORS = {
  coral: "#FF7B54",
  teal: "#5BA199",
  cream: "#FFF4E6",
  peach: "#FFB88C",
  sage: "#A8C69F",
  charcoal: "#2D3436",
  white: "#FFFFFF",
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative overflow-hidden">
        
        {/* ===== HERO SECTION ===== */}
        <section className="min-h-[90vh] flex items-center justify-center px-6 py-20 relative">
          {/* Animated paw prints background */}
          <div className="absolute inset-0 overflow-hidden opacity-5">
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute"
                initial={{ 
                  x: `${Math.random() * 100}%`,
                  y: `${Math.random() * 100}%`,
                  rotate: Math.random() * 360,
                  scale: 0
                }}
                animate={{ 
                  scale: [0, 1, 0],
                  rotate: Math.random() * 360 + 360
                }}
                transition={{
                  duration: 8 + Math.random() * 4,
                  repeat: Infinity,
                  delay: i * 0.3
                }}
              >
                <PawPrint className="w-16 h-16" style={{ color: COLORS.coral }} />
              </motion.div>
            ))}
          </div>

          <div className="max-w-6xl mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-6"
            >
              <span 
                className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6"
                style={{ 
                  backgroundColor: COLORS.peach,
                  color: COLORS.white 
                }}
              >
                Pet sitting and boarding
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6 leading-tight"
              style={{ color: COLORS.charcoal }}
            >
              Your pets deserve care <br />
              that is{" "}
              <span className="relative inline-block">
                <span style={{ color: COLORS.coral }}>like family</span>
                <motion.div
                  className="absolute -bottom-2 left-0 right-0 h-3 rounded-full"
                  style={{ backgroundColor: COLORS.peach, opacity: 0.3 }}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                />
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto leading-relaxed"
              style={{ color: COLORS.charcoal, opacity: 0.8 }}
            >
              Professional dog walking, pet sitting, and overnight care for the pets who mean everything to you — with the assurance that there is only one Mowi, and your companion is always in the same trusted hands.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button href="/contact" size="lg" showArrow>
                Get Started
              </Button>
              <Button href="/book" size="lg" variant="secondary" showArrow>
                Book Online
              </Button>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-wrap items-center justify-center gap-6 mt-12 text-sm"
              style={{ color: COLORS.charcoal, opacity: 0.7 }}
            >
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" style={{ color: COLORS.teal }} />
                <span>Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" style={{ color: COLORS.teal }} />
                <span>Woman-Owned</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" style={{ color: COLORS.teal }} />
                <span>10+ Years Experience</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ===== PREMIUM PET CARE SECTION ===== */}
        <section className="py-20 px-6">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 
                className="text-4xl md:text-5xl font-display font-bold mb-6"
                style={{ color: COLORS.charcoal }}
              >
                <span style={{ color: COLORS.coral }}>Premium pet care</span> you can trust.
              </h2>
              <p 
                className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-8"
                style={{ color: COLORS.charcoal, opacity: 0.8 }}
              >
                Every pet is unique — from the routine-loving pup to the shy cat or selective bird.
                <br />
                <strong>I take the time to understand what makes your companion feel safe and seen.</strong>
              </p>
              <p 
                className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto"
                style={{ color: COLORS.charcoal, opacity: 0.8 }}
              >
                Your pet enjoys the consistency of one dedicated caretaker and the comfort of truly personalized attention.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ===== SERVICES OVERVIEW ===== */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <p 
                className="text-lg mb-4"
                style={{ color: COLORS.coral }}
              >
                Whether you need daily walks, vacation sitting, or overnight care
              </p>
              <h2 
                className="text-4xl md:text-5xl font-display font-bold"
                style={{ color: COLORS.charcoal }}
              >
                We deliver personalized attention your pet would choose
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: PawPrint, title: "Dog Walking", description: "Daily walks tailored to your dog's energy level and routine" },
                { icon: Heart, title: "Pet Sitting", description: "In-home visits that keep your pet comfortable and stress-free" },
                { icon: Clock, title: "Overnight Care", description: "Extended stays to maintain your pet's routine while you're away" },
                { icon: Shield, title: "Private Boarding", description: "Home-like environment with personalized one-on-one attention" },
              ].map((service, i) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="p-8 rounded-3xl text-center"
                  style={{ 
                    backgroundColor: COLORS.white,
                    boxShadow: "0 4px 20px rgba(255, 123, 84, 0.1)"
                  }}
                >
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                    className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: COLORS.cream }}
                  >
                    <service.icon className="w-8 h-8" style={{ color: COLORS.coral }} />
                  </motion.div>
                  <h3 
                    className="text-xl font-display font-bold mb-3"
                    style={{ color: COLORS.charcoal }}
                  >
                    {service.title}
                  </h3>
                  <p 
                    className="text-sm leading-relaxed"
                    style={{ color: COLORS.charcoal, opacity: 0.7 }}
                  >
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center mt-12"
            >
              <Button href="/services" size="lg" showArrow>
                Explore Our Services
              </Button>
            </motion.div>
          </div>
        </section>

        {/* ===== WHY CHOOSE US ===== */}
        <section 
          className="py-20 px-6"
          style={{ backgroundColor: COLORS.white }}
        >
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
                Why choose us?
              </h2>
              <p 
                className="text-xl"
                style={{ color: COLORS.coral }}
              >
                There are many pet sitters in Los Angeles. There is only one Mowi.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Real expertise you can trust",
                  description: "Years of experience and a strong understanding of animal behavior allow us to care for every type of pet — from shy and anxious to energetic and social."
                },
                {
                  title: "Your pet's routine, perfectly preserved",
                  description: "We follow their schedule and habits exactly, keeping them calm, comfortable, and stress-free."
                },
                {
                  title: "Fully licensed. Fully insured. Fully professional.",
                  description: "As a woman-owned business built on genuine care and integrity, we're 100% licensed and insured for your peace of mind."
                },
                {
                  title: "Special needs? We've got it covered.",
                  description: "Puppies, seniors, anxious pets, medications — we adapt to your pet's needs and keep you informed every step of the way."
                },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.1 }}
                  className="p-8 rounded-3xl"
                  style={{ backgroundColor: COLORS.cream }}
                >
                  <h3 
                    className="text-2xl font-display font-bold mb-4"
                    style={{ color: COLORS.coral }}
                  >
                    {item.title}
                  </h3>
                  <p 
                    className="leading-relaxed"
                    style={{ color: COLORS.charcoal, opacity: 0.8 }}
                  >
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== HAPPY CLIENTS GALLERY ===== */}
        <section className="py-20 px-6" style={{ backgroundColor: COLORS.cream }}>
          <div className="max-w-6xl mx-auto">
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
                <span style={{ color: COLORS.coral }}>Happy clients</span> I've cared for
              </h2>
              <p 
                className="text-lg"
                style={{ color: COLORS.charcoal, opacity: 0.7 }}
              >
                Every pet has a story, and I'm honored to be part of theirs
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { src: "/images/pets/Scooby and Mowi.jpg", alt: "Scooby and Mowi" },
                { src: "/images/pets/Peach.jpg", alt: "Peach" },
                { src: "/images/pets/WALLEY PICTURE.jpg", alt: "Walley" },
                { src: "/images/pets/IMG_1221.jpg", alt: "Happy dog" },
                { src: "/images/pets/IMG_1729.jpg", alt: "Playful pet" },
                { src: "/images/pets/IMG_1738.jpg", alt: "Cute companion" },
              ].map((pet, i) => (
                <motion.div
                  key={pet.alt}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ scale: 1.05, y: -8 }}
                  className="relative aspect-square rounded-2xl overflow-hidden"
                  style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.1)" }}
                >
                  <Image
                    src={pet.src}
                    alt={pet.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 33vw"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== ABOUT MOWI SECTION ===== */}
        <section className="py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div 
                  className="aspect-square rounded-3xl overflow-hidden relative"
                  style={{ 
                    backgroundColor: COLORS.teal,
                    boxShadow: "0 10px 40px rgba(91, 161, 153, 0.2)"
                  }}
                >
                  <Image
                    src="/images/pets/Scooby and Mowi.jpg"
                    alt="Mowi with client pet"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 
                  className="text-4xl md:text-5xl font-display font-bold mb-6"
                  style={{ color: COLORS.charcoal }}
                >
                  I'm Mowi!
                </h2>
                <p 
                  className="text-lg mb-4"
                  style={{ color: COLORS.coral }}
                >
                  Local pet sitter, animal lover & dog walker in LA
                </p>
                <p 
                  className="text-lg leading-relaxed mb-6"
                  style={{ color: COLORS.charcoal, opacity: 0.8 }}
                >
                  I built this company on a simple belief: every pet deserves exceptional care, genuine love, and unwavering attention. After working with countless animals over the years, one thing is clear — every pet has a unique personality, and those differences matter.
                </p>
                <p 
                  className="text-lg leading-relaxed mb-8"
                  style={{ color: COLORS.charcoal, opacity: 0.8 }}
                >
                  I'm dedicated to forming real connections with the pets I care for, making sure they feel safe, understood, and happy while you're away. Your trust means everything, and I care for every pet as if they were my own.
                </p>
                <Button href="/about" size="lg" showArrow>
                  More About My Story
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ===== FREE GUIDE CTA ===== */}
        <section 
          className="py-20 px-6"
          style={{ backgroundColor: COLORS.coral }}
        >
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Download className="w-16 h-16 mx-auto mb-6" style={{ color: COLORS.white }} />
              <h2 
                className="text-3xl md:text-4xl font-display font-bold mb-4"
                style={{ color: COLORS.white }}
              >
                Not sure what to look for in a pet sitter?
              </h2>
              <p 
                className="text-lg md:text-xl mb-8"
                style={{ color: COLORS.white, opacity: 0.9 }}
              >
                Download our free guide to finding someone you can trust
              </p>
              <Button href="/contact" size="lg" variant="outline" className="bg-white">
                Get the Guide
              </Button>
            </motion.div>
          </div>
        </section>

        {/* ===== TRUSTED PARTNERS ===== */}
        <section className="py-16 px-6" style={{ backgroundColor: COLORS.white }}>
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h3 
                className="text-2xl md:text-3xl font-display font-bold mb-4"
                style={{ color: COLORS.charcoal }}
              >
                Proud to be affiliated with
              </h3>
            </motion.div>

            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
              {[
                { src: "/images/logos/PSI LOGO.png", alt: "PSI Logo", width: 120 },
                { src: "/images/logos/Time to pet logo.jpg", alt: "Time to Pet", width: 140 },
              ].map((logo, i) => (
                <motion.div
                  key={logo.alt}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  className="relative grayscale hover:grayscale-0 transition-all duration-300"
                  style={{ width: logo.width, height: 60 }}
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    fill
                    className="object-contain"
                    sizes="200px"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== FINAL CTA ===== */}
        <section className="py-24 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="p-12 md:p-16 rounded-3xl relative overflow-hidden"
              style={{ 
                backgroundColor: COLORS.white,
                boxShadow: "0 10px 50px rgba(255, 123, 84, 0.15)"
              }}
            >
              <Sparkles 
                className="absolute top-8 right-8 w-12 h-12"
                style={{ color: COLORS.peach, opacity: 0.3 }}
              />
              <h2 
                className="text-3xl md:text-4xl font-display font-bold mb-6"
                style={{ color: COLORS.charcoal }}
              >
                Ready to give your pet the care they deserve?
              </h2>
              <p 
                className="text-lg md:text-xl mb-8"
                style={{ color: COLORS.charcoal, opacity: 0.7 }}
              >
                Start with a free meet and greet so I can meet your pet (they'll probably love me)
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button href="/contact" size="lg" showArrow>
                  Get Started
                </Button>
                <Button href="/book" size="lg" variant="secondary" showArrow>
                  Book Online
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
