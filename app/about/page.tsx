"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Building2, Users, Award, Globe, ArrowRight, Target, Handshake, Shield, Clock, MapPin, Phone, Mail } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import  Link  from "next/link";

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
      title: "Select",
      description: "Review profiles, ratings and choose your mover",
      icon: <Handshake className="h-6 w-6" />
    },
    {
      title: "Schedule Your Move",
      description: "Pick a date that works for you",
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
  const services = [
    {
      title: "Corporate Relocation",
      description: "Tailored solutions for businesses of all sizes",
      icon: <Building2 className="h-6 w-6" />
    },
    {
      title: "International Moves",
      description: "Global network for seamless international relocations",
      icon: <Globe className="h-6 w-6" />
    },
    {
      title: "Local Moves",
      description: "Efficient and reliable local moving services",
      icon: <MapPin className="h-6 w-6" />
    },
    {
      title: "Storage Solutions",
      description: "Secure storage options for your belongings",
      icon: <Shield className="h-6 w-6" />
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-24">
        {/* Hero Section with Parallax Effect - Modified for full width */}
        <section className="relative py-32 md:py-40 w-full">
          <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/6169666/pexels-photo-6169666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-center bg-fixed">
            <div className="absolute inset-0 bg-background/80" />
          </div>
          <div className="relative mx-auto w-full max-w-7xl px-4 md:px-6">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ duration: 0.8 }}
              className="w-full text-center flex flex-col items-center justify-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 gradient-text">
                About Shiftadda
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl">
                Revolutionizing business relocation through technology, transparency, and trust
              </p>
              <Button variant="outline" className="gap-2">
                <Link href="/services" className="flex items-center">
                Explore Our Services <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>

          {/* Stats Section with Animated Counters */}
          <section className="py-16 bg-gradient-to-r from-primary/10 to-secondary/10">
  <div className="container px-4 md:px-6 mx-auto">
    <div className="flex flex-col items-center">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {[
          { number: 1000, suffix: "+", label: "Happy Customers" },
          { number: 40, suffix: "+", label: "Cities Covered" },
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
  </div>
</section>
        {/* Mission & Vision Tabs */}
        <section className="py-16 md:py-24 justify-items-center">
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
                  At Shiftadda, we're on a mission to eliminate the stress and uncertainty from both business and household relocations. By combining cutting-edge technology with a trusted network of verified professionals, we deliver seamless, end-to-end moving experiences. From standard moves to premium services tailored for delicate or high-value items, Shiftadda ensures every relocation is smooth, reliable, and hassle-free.
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
                  Premium Relocation. For Homes. For Businesses
                  </h2>
                  <p className="text-lg text-muted-foreground text-center">
                  We envision a world where relocation—be it for businesses or households—is as simple as clicking a button. A future where companies and families alike can expand, move, or restructure without logistical headaches, backed by reliable support and premium services tailored to their unique needs
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
                        Delivering unmatched reliability and openness in the relocation industry—for homes and businesses alike.
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
        <section className="py-16 md:py-24 bg-muted/50 justify-items-center">
          <div className="container px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold tracking-tight mb-4">
                Our Relocation Process
              </h2>
              <p className="text-lg text-muted-foreground">
                Simple, transparent, and designed for business and home  continuity
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
<section className="py-12 sm:py-16 md:py-24 lg:py-28 justify-items-center">
  <div className="container px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-4 sm:mb-6">
          Our Core Values
        </h2>
        <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8">
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
        className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6"
      >
        {values.map((value, index) => (
          <Card key={index} className="hover:shadow-md transition-shadow">
            <CardHeader className="flex-row items-center space-y-0 space-x-3 sm:space-x-4">
              <div className="p-2 bg-primary/10 rounded-full">
                {value.icon}
              </div>
              <CardTitle className="text-base sm:text-lg">{value.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs sm:text-sm text-muted-foreground">
                {value.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </motion.div>
    </div>
  </div>
</section>
      </main>
      <Footer />
    </div>
  );
}