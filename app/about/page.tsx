"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Building2, Users, Award, Globe, ArrowRight, Target, Handshake, Shield, Clock, MapPin, Phone, Mail } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const processSteps = [
    {
      title: "Request a Quote",
      description: "Get instant estimates from verified movers",
      icon: <Phone className="h-6 w-6" />
    },
    {
      title: "Compare & Select",
      description: "Review profiles, ratings and choose your mover",
      icon: <Handshake className="h-6 w-6" />
    },
    {
      title: "Schedule Your Move",
      description: "Pick a date that works for your business",
      icon: <Clock className="h-6 w-6" />
    },
    {
      title: "Relocate with Confidence",
      description: "Track your move in real-time with our platform",
      icon: <MapPin className="h-6 w-6" />
    }
  ];

  const values = [
    {
      title: "Transparency",
      description: "No hidden costs, clear pricing upfront",
      icon: <Shield className="h-6 w-6" />
    },
    {
      title: "Reliability",
      description: "Verified partners with proven track records",
      icon: <Award className="h-6 w-6" />
    },
    {
      title: "Innovation",
      description: "Technology-driven solutions for complex moves",
      icon: <Building2 className="h-6 w-6" />
    },
    {
      title: "Customer First",
      description: "Dedicated support throughout your journey",
      icon: <Users className="h-6 w-6" />
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-24 self-center">
        {/* Hero Section with Parallax Effect */}
        <section className="relative py-32 md:py-40 overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/6169666/pexels-photo-6169666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-center bg-fixed">
            <div className="absolute inset-0 bg-background/80" />
          </div>
          <div className="container px-4 md:px-6 relative">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ duration: 0.8 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 gradient-text">
                About ShiftAdda
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                Revolutionizing business relocation through technology, transparency, and trust
              </p>
              <Button variant="outline" className="gap-2">
                Explore Our Services <ArrowRight className="h-4 w-4" />
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Stats Section with Animated Counters */}
        <section className="py-16 bg-gradient-to-r from-primary/10 to-secondary/10">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: 5000, suffix: "+", label: "Businesses Served" },
                { number: 1000, suffix: "+", label: "Verified Providers" },
                { number: 50, suffix: "+", label: "Cities Covered" },
                { number: 98, suffix: "%", label: "Satisfaction Rate" },
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
                  <div className="text-3xl md:text-5xl font-bold text-primary mb-2">
                    <motion.span
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                    >
                      {stat.number}
                    </motion.span>
                    {stat.suffix}
                  </div>
                  <div className="text-sm md:text-base text-muted-foreground">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission & Vision Tabs */}
        <section className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <Tabs defaultValue="mission" className="max-w-4xl mx-auto">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="mission">Our Mission</TabsTrigger>
                <TabsTrigger value="vision">Our Vision</TabsTrigger>
              </TabsList>
              <TabsContent value="mission" className="mt-8">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeIn}
                  className="space-y-6"
                >
                  <Target className="h-12 w-12 text-primary mx-auto" />
                  <h2 className="text-3xl font-bold tracking-tight text-center">
                    Driving Business Mobility Forward
                  </h2>
                  <p className="text-lg text-muted-foreground text-center">
                    At ShiftAdda, we're on a mission to eliminate the stress and uncertainty from business relocation. We combine cutting-edge technology with a network of verified professionals to deliver seamless moving experiences.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6 pt-6">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">What We Do</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">
                          We connect businesses with pre-vetted relocation specialists, provide real-time tracking, and ensure transparent pricing - all through our intuitive platform.
                        </p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Why We Do It</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">
                          Because business relocation shouldn't mean downtime. We empower companies to move with confidence, minimizing disruption to operations.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              </TabsContent>
              <TabsContent value="vision" className="mt-8">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeIn}
                  className="space-y-6"
                >
                  <Globe className="h-12 w-12 text-primary mx-auto" />
                  <h2 className="text-3xl font-bold tracking-tight text-center">
                    Redefining Business Relocation Globally
                  </h2>
                  <p className="text-lg text-muted-foreground text-center">
                    We envision a world where business relocation is as simple as clicking a button - where companies can expand, relocate, or restructure without logistical headaches.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6 pt-6">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Future Goals</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">
                          Expand our network to 200+ cities across Asia by 2025 and introduce AI-powered relocation planning tools.
                        </p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Industry Impact</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">
                          Setting new standards for transparency and reliability in the business relocation industry.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Our Process Section */}
        <section className="py-16 md:py-24 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold tracking-tight mb-4">
                Our Relocation Process
              </h2>
              <p className="text-lg text-muted-foreground">
                Simple, transparent, and designed for business continuity
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { delay: index * 0.1 } }
                  }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardHeader className="items-center">
                      <div className="p-3 bg-primary/10 rounded-full">
                        {step.icon}
                      </div>
                      <CardTitle className="text-xl">{step.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                      <p className="text-muted-foreground">{step.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Core Values Section */}
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
                  Our Core Values
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  These principles guide every decision we make and every interaction we have with our customers and partners.
                </p>
                <Button variant="outline" className="gap-2">
                  Learn About Our Standards <ArrowRight className="h-4 w-4" />
                </Button>
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="grid grid-cols-2 gap-6"
              >
                {values.map((value, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow">
                    <CardHeader className="flex-row items-center space-y-0 space-x-4">
                      <div className="p-2 bg-primary/10 rounded-full">
                        {value.icon}
                      </div>
                      <CardTitle className="text-lg">{value.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Team Section with Hover Effects */}
        <section className="py-16 md:py-24 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold tracking-tight mb-4">
                Leadership Team
              </h2>
              <p className="text-lg text-muted-foreground">
                The visionaries driving ShiftAdda's innovation and growth
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Rajesh Kumar",
                  role: "CEO & Founder",
                  bio: "Serial entrepreneur with 15+ years in logistics technology",
                  image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
                  social: {
                    linkedin: "#",
                    twitter: "#"
                  }
                },
                {
                  name: "Priya Sharma",
                  role: "COO",
                  bio: "Operations expert specializing in service standardization",
                  image: "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg",
                  social: {
                    linkedin: "#",
                    twitter: "#"
                  }
                },
                {
                  name: "Amit Patel",
                  role: "CTO",
                  bio: "Technology architect focused on scalable relocation solutions",
                  image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg",
                  social: {
                    linkedin: "#",
                    twitter: "#"
                  }
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
                  whileHover={{ y: -5 }}
                  className="bg-background rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-all"
                >
                  <div className="relative w-40 h-40 mx-auto mb-6 group">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="rounded-full object-cover w-full h-full group-hover:opacity-90 transition-opacity"
                    />
                    <div className="absolute inset-0 rounded-full border-2 border-transparent group-hover:border-primary transition-all duration-300" />
                  </div>
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-primary mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm mb-4">{member.bio}</p>
                  <div className="flex justify-center space-x-4">
                    <Button variant="ghost" size="sm" className="rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </Button>
                    <Button variant="ghost" size="sm" className="rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                      </svg>
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-primary to-secondary">
          <div className="container px-4 md:px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="max-w-4xl mx-auto text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-6">
                Ready to Simplify Your Business Relocation?
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Join thousands of businesses who trust ShiftAdda for their relocation needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="secondary" size="lg" className="gap-2">
                  Get a Free Quote <ArrowRight className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="lg" className="gap-2 bg-transparent text-white hover:bg-white/10">
                  Contact Our Team <Phone className="h-4 w-4" />
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}