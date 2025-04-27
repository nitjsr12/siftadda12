"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Building2, Users, Award, Globe } from "lucide-react";

export default function AboutPage() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-24">
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/6169666/pexels-photo-6169666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-center">
            <div className="absolute inset-0 bg-background/90" />
          </div>
          <div className="container px-4 md:px-6 relative">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="max-w-3xl mx-auto text-center"
            >
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 gradient-text">
                About ShiftAdda
              </h1>
              <p className="text-xl text-muted-foreground">
                Transforming business relocation through technology and trust
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: "5000+", label: "Businesses Served" },
                { number: "1000+", label: "Verified Providers" },
                { number: "50+", label: "Cities Covered" },
                { number: "98%", label: "Satisfaction Rate" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { delay: index * 0.1 } }
                  }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
              >
                <h2 className="text-3xl font-bold tracking-tight mb-6">
                  Our Mission
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  At ShiftAdda, we're on a mission to revolutionize business relocation. 
                  We understand that moving your business is more than just transporting 
                  items - it's about ensuring business continuity and peace of mind.
                </p>
                <p className="text-lg text-muted-foreground">
                  Through our platform, we connect businesses with verified, professional 
                  moving services, making the entire process seamless, transparent, and efficient.
                </p>
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="grid grid-cols-2 gap-6"
              >
                {[
                  {
                    icon: Building2,
                    title: "Business First",
                    description: "Tailored solutions for businesses of all sizes"
                  },
                  {
                    icon: Users,
                    title: "Verified Partners",
                    description: "Rigorous vetting process for all service providers"
                  },
                  {
                    icon: Award,
                    title: "Quality Assured",
                    description: "Guaranteed service standards and support"
                  },
                  {
                    icon: Globe,
                    title: "Pan-India Network",
                    description: "Extensive coverage across major cities"
                  }
                ].map((feature, index) => (
                  <div key={index} className="bg-card p-6 rounded-xl border">
                    <feature.icon className="h-8 w-8 text-primary mb-4" />
                    <h3 className="font-semibold mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 md:py-24 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold tracking-tight mb-4">
                Meet Our Leadership
              </h2>
              <p className="text-lg text-muted-foreground">
                The team behind ShiftAdda's innovation and success
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Rajesh Kumar",
                  role: "CEO & Founder",
                  image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
                },
                {
                  name: "Priya Sharma",
                  role: "COO",
                  image: "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg"
                },
                {
                  name: "Amit Patel",
                  role: "CTO",
                  image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg"
                }
              ].map((member, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { delay: index * 0.1 } }
                  }}
                  className="bg-background rounded-xl p-6 text-center hover-card"
                >
                  <div className="relative w-32 h-32 mx-auto mb-4">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="rounded-full object-cover w-full h-full"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-muted-foreground">{member.role}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}