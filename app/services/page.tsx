"use client";

import { motion } from "framer-motion";
import { PawPrint, Heart, Clock, Shield, Check, Star } from "lucide-react";
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

const services = [
  {
    icon: PawPrint,
    title: "Dog Walking",
    price: "Starting at $30/walk",
    description: "Daily walks customized to your dog's energy level, pace, and routine.",
    features: [
      "30, 45, or 60-minute walks",
      "Consistent schedule that works for you",
      "Updates and photos after every walk",
      "Rain or shine reliability",
      "Individual attention (no pack walks)",
    ],
  },
  {
    icon: Heart,
    title: "Pet Sitting",
    price: "Starting at $40/visit",
    description: "In-home visits that keep your pet comfortable, safe, and following their routine.",
    features: [
      "Feeding and fresh water",
      "Playtime and companionship",
      "Medication administration",
      "Litter box cleaning",
      "Mail and plant care included",
    ],
  },
  {
    icon: Clock,
    title: "Overnight Care",
    price: "Starting at $100/night",
    description: "Extended stays in your home so your pet can sleep in their own bed.",
    features: [
      "Evening and morning care",
      "Nighttime companionship",
      "Home security presence",
      "Following bedtime routines",
      "Daily photo updates",
    ],
  },
  {
    icon: Shield,
    title: "Private Boarding",
    price: "Custom pricing",
    description: "Your pet stays with Mowi in a calm, home-like environment with one-on-one attention.",
    features: [
      "No cages or kennels",
      "Individualized care and attention",
      "Comfortable sleeping arrangements",
      "Regular updates and photos",
      "Perfect for anxious or senior pets",
    ],
  },
];

export default function ServicesPage() {
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
                Services Built Around{" "}
                <span style={{ color: COLORS.coral }}>Your Pet's Needs</span>
              </h1>
              <p 
                className="text-xl md:text-2xl max-w-3xl mx-auto"
                style={{ color: COLORS.charcoal, opacity: 0.8 }}
              >
                From daily walks to overnight care, every service is personalized to what makes your companion feel safe, seen, and loved.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ===== SERVICES GRID ===== */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto space-y-16">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  i % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                {/* Service Icon & Info */}
                <div className={i % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div 
                    className="p-12 rounded-3xl"
                    style={{ 
                      backgroundColor: COLORS.white,
                      boxShadow: "0 10px 40px rgba(255, 123, 84, 0.1)"
                    }}
                  >
                    <motion.div
                      whileHover={{ rotate: 15, scale: 1.1 }}
                      transition={{ type: "spring" }}
                      className="w-20 h-20 rounded-full flex items-center justify-center mb-6"
                      style={{ backgroundColor: COLORS.cream }}
                    >
                      <service.icon className="w-10 h-10" style={{ color: COLORS.coral }} />
                    </motion.div>
                    
                    <h2 
                      className="text-3xl md:text-4xl font-display font-bold mb-3"
                      style={{ color: COLORS.charcoal }}
                    >
                      {service.title}
                    </h2>
                    
                    <p 
                      className="text-xl mb-6"
                      style={{ color: COLORS.coral }}
                    >
                      {service.price}
                    </p>
                    
                    <p 
                      className="text-lg mb-8 leading-relaxed"
                      style={{ color: COLORS.charcoal, opacity: 0.8 }}
                    >
                      {service.description}
                    </p>

                    <Button href="/contact" variant="primary" showArrow>
                      Book This Service
                    </Button>
                  </div>
                </div>

                {/* Features List */}
                <div className={i % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}>
                  <div className="space-y-4">
                    <h3 
                      className="text-2xl font-display font-bold mb-6"
                      style={{ color: COLORS.charcoal }}
                    >
                      What's Included
                    </h3>
                    {service.features.map((feature, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                        className="flex items-start gap-4 p-4 rounded-xl"
                        style={{ backgroundColor: COLORS.cream }}
                      >
                        <Check 
                          className="w-6 h-6 flex-shrink-0 mt-1" 
                          style={{ color: COLORS.teal }} 
                        />
                        <span 
                          className="text-lg"
                          style={{ color: COLORS.charcoal }}
                        >
                          {feature}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ===== SPECIAL SERVICES ===== */}
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
                Special Care for <span style={{ color: COLORS.coral }}>Special Needs</span>
              </h2>
              <p 
                className="text-xl max-w-3xl mx-auto"
                style={{ color: COLORS.charcoal, opacity: 0.8 }}
              >
                Every pet has unique needs. I'm experienced with all kinds of situations.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "Puppies & Kittens", description: "Extra potty breaks, socialization, and gentle training reinforcement" },
                { title: "Senior Pets", description: "Patient care, mobility assistance, and medication management" },
                { title: "Anxious or Shy Pets", description: "Calm approach, consistent routine, and stress-free handling" },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="p-8 rounded-3xl text-center"
                  style={{ backgroundColor: COLORS.cream }}
                >
                  <Star 
                    className="w-12 h-12 mx-auto mb-4" 
                    style={{ color: COLORS.coral }}
                    fill={COLORS.coral}
                  />
                  <h3 
                    className="text-xl font-display font-bold mb-3"
                    style={{ color: COLORS.charcoal }}
                  >
                    {item.title}
                  </h3>
                  <p 
                    className="leading-relaxed"
                    style={{ color: COLORS.charcoal, opacity: 0.7 }}
                  >
                    {item.description}
                  </p>
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
              className="p-12 md:p-16 rounded-3xl text-center relative overflow-hidden"
              style={{ 
                backgroundColor: COLORS.coral,
              }}
            >
              <h2 
                className="text-3xl md:text-4xl font-display font-bold mb-6"
                style={{ color: COLORS.white }}
              >
                Ready to get started?
              </h2>
              <p 
                className="text-lg md:text-xl mb-8"
                style={{ color: COLORS.white, opacity: 0.95 }}
              >
                Book a free meet and greet, or reach out with questions.
                <br />
                Text <strong>818-696-0055</strong> to get started!
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button href="/contact" size="lg" variant="outline" className="bg-white" showArrow>
                  Schedule Meet & Greet
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

