"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Truck, Box, Warehouse, Building2, Cpu, ShieldCheck, ArrowRight, Phone, MapPin, Calendar, ClipboardCheck } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import  Link  from "next/link";

export default function ServicesPage() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const services = [
    {
      title: "Home Shifting (1 BHK to 5 BHK)",
      description: "Safe packing, careful loading/unloading, secure transport – your home in safe hands.",
      icon: <Building2 className="h-8 w-8" />,
      features: [
        "Packing & unpacking",
        "Furniture disassembly & assembly",
        "On-time doorstep delivery"
      ]
    },
    {
      title: "Two-Wheeler & Car Transport",
      description: "Enclosed carriers, safe handling for your vehicles.",
      icon: <Truck className="h-8 w-8" />,
      features: [
        "Bike transport with padding",
        "Car carriers with GPS tracking",
        "Door-to-door delivery"
      ]
    },
    {
      title: "Local & Intercity Moves",
      description: "We cover all areas in Bangalore and major cities across India.",
      icon: <MapPin className="h-8 w-8" />,
      features: [
        "Local experts for every city",
        "Dedicated relocation advisors",
        "Affordable, fixed-price plans"
      ]
    },
    {
      title: "Office Relocation",
      description: "Complete office moves with minimal downtime",
      icon: <Cpu className="h-8 w-8" />,
      features: [
        "Furniture disassembly/reassembly",
        "IT equipment handling",
        "Post-move support"
      ]
    },
    {
      title: "Secure Document Transport",
      description: "Confidential handling of important files",
      icon: <ShieldCheck className="h-8 w-8" />,
      features: [
        "Chain-of-custody tracking",
        "Climate-controlled vehicles",
        "Digital scanning options"
      ]
    },
    {
      title: "Specialty Item Moving",
      description: "Handling of fragile and high-value items",
      icon: <Box className="h-8 w-8" />,
      features: [
        "Artwork transport",
        "Lab equipment relocation",
        "Custom crating"
      ]
    }
  ];
  

  const processSteps = [
    {
      title: "Consultation",
      description: "We assess your specific needs",
      icon: <Phone className="h-6 w-6" />
    },
    {
      title: "Planning",
      description: "Customized relocation strategy",
      icon: <MapPin className="h-6 w-6" />
    },
    {
      title: "Scheduling",
      description: "Choose dates that work for you",
      icon: <Calendar className="h-6 w-6" />
    },
    {
      title: "Execution",
      description: "Professional move with real-time updates",
      icon: <ClipboardCheck className="h-6 w-6" />
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-24 self-center">
        {/* Hero Section */}
        <section className="relative py-32 md:py-40 overflow-hidden w-full">
          <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/4508751/pexels-photo-4508751.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-center bg-fixed">
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
                Our Services
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                Comprehensive relocation solutions tailored to your business needs
              </p>
              <Button size="lg" className="gap-2">
                <Link href="/contact" className="flex items-center">
                Get a Free Quote <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Services Tabs */}
        <section className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <Tabs defaultValue="commercial" className="w-full">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 mb-12">
                <TabsTrigger value="commercial">Commercial</TabsTrigger>
                <TabsTrigger value="industrial">Industrial</TabsTrigger>
                <TabsTrigger value="specialized">Specialized</TabsTrigger>
              </TabsList>
              
              <TabsContent value="commercial">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeIn}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                  {services.slice(0, 3).map((service, index) => (
                    <Card 
                      key={index}
                      className="hover:shadow-lg transition-all hover:-translate-y-1 h-full"
                    >
                      <CardHeader>
                        <div className="p-3 bg-primary/10 rounded-full w-fit mb-4">
                          {service.icon}
                        </div>
                        <CardTitle>{service.title}</CardTitle>
                        <CardDescription>{service.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {service.features.map((feature, i) => (
                            <li key={i} className="flex items-start">
                              <span className="text-primary mr-2">✓</span>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <Button variant="link" className="pl-0 mt-4 gap-2">
                          Learn more <ArrowRight className="h-4 w-4" />
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </motion.div>
              </TabsContent>
              
              <TabsContent value="industrial">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeIn}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                  {services.slice(3, 6).map((service, index) => (
                    <Card 
                      key={index}
                      className="hover:shadow-lg transition-all hover:-translate-y-1 h-full"
                    >
                      <CardHeader>
                        <div className="p-3 bg-primary/10 rounded-full w-fit mb-4">
                          {service.icon}
                        </div>
                        <CardTitle>{service.title}</CardTitle>
                        <CardDescription>{service.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {service.features.map((feature, i) => (
                            <li key={i} className="flex items-start">
                              <span className="text-primary mr-2">✓</span>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <Button variant="link" className="pl-0 mt-4 gap-2">
                          Learn more <ArrowRight className="h-4 w-4" />
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </motion.div>
              </TabsContent>
              
              <TabsContent value="specialized">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeIn}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                  {services.slice(2, 5).map((service, index) => (
                    <Card 
                      key={index}
                      className="hover:shadow-lg transition-all hover:-translate-y-1 h-full"
                    >
                      <CardHeader>
                        <div className="p-3 bg-primary/10 rounded-full w-fit mb-4">
                          {service.icon}
                        </div>
                        <CardTitle>{service.title}</CardTitle>
                        <CardDescription>{service.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {service.features.map((feature, i) => (
                            <li key={i} className="flex items-start">
                              <span className="text-primary mr-2">✓</span>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <Button variant="link" className="pl-0 mt-4 gap-2">
                          Learn more <ArrowRight className="h-4 w-4" />
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </motion.div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 md:py-24 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <motion.h2 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="text-3xl font-bold tracking-tight mb-4"
              >
                Our Relocation Process
              </motion.h2>
              <motion.p 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="text-lg text-muted-foreground"
              >
                A streamlined approach to ensure your move is efficient and stress-free
              </motion.p>
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
                    visible: { 
                      opacity: 1, 
                      y: 0, 
                      transition: { 
                        delay: index * 0.1,
                        type: "spring",
                        stiffness: 100
                      } 
                    }
                  }}
                >
                  <Card className="h-full text-center hover:shadow-md transition-shadow">
                    <CardHeader>
                      <div className="p-3 bg-primary/10 rounded-full w-fit mx-auto mb-4">
                        {step.icon}
                      </div>
                      <CardTitle>{step.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{step.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
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
                  Why Businesses Choose ShiftAdda
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  We go beyond traditional moving services to provide a comprehensive relocation experience tailored to modern business needs.
                </p>
                <ul className="space-y-4">
                  {[
                    "Verified and insured moving partners",
                    "Real-time shipment tracking",
                    "Dedicated move coordinators",
                    "Flexible storage solutions",
                    "Competitive pricing with no hidden fees"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span className="text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
              
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="bg-[url('https://images.pexels.com/photos/8293778/pexels-photo-8293778.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-center rounded-xl aspect-video"
              >
                <div className="h-full w-full bg-gradient-to-r from-primary/30 to-secondary/30 rounded-xl flex items-center justify-center">
                  <Button variant="secondary" size="lg" className="gap-2">
                    Watch Our Process <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </motion.div>
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
                Ready to Plan Your Business Move?
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Get started with a free consultation and quote from our relocation experts.
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