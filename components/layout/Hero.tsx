"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckCircle, Box, Truck, ShieldCheck, CalendarCheck, MapPin, Home, Briefcase, Car, Warehouse, Globe,Phone, } from "lucide-react";
import { serviceTypes, cities } from "@/lib/constants";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export function Hero() {
  const [moveType, setMoveType] = useState("");
  const [location, setLocation] = useState("");

  return (
    <div className="relative w-full overflow-hidden pt-32 pb-20"> 
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ 
            backgroundImage: "url(https://images.unsplash.com/photo-1601758003122-53c40e686a19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80)",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/20" />
        </div>
      </div>

      {/* Content */}
      <div className="container flex items-center justify-center px-4 md:px-6 mx-auto">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="w-full max-w-6xl text-center"
        >
          <motion.h1 
            variants={fadeIn}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-6"
          >
            <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              Stress-Free Moving
            </span> <br />
            Done Right
          </motion.h1>
          
          <motion.p 
            variants={fadeIn}
            className="text-xl md:text-2xl text-muted-foreground mb-10 mx-auto max-w-3xl"
          >
            Trusted by thousands for reliable packing, moving, and storage solutions across India.
            Get matched with professional movers in minutes.
          </motion.p>

          {/* Moving Calculator */}
          <motion.div 
            variants={fadeIn}
            className="w-full bg-background/80 backdrop-blur-md p-6 rounded-2xl shadow-xl mx-auto max-w-4xl border border-border/30"
          >
            <div className="grid grid-cols-1 md:grid-cols-8 gap-4">
              <div className="md:col-span-3">
                <Select value={moveType} onValueChange={setMoveType}>
                  <SelectTrigger className="h-14 text-base">
                    <div className="flex items-center gap-2">
                      <Box className="h-5 w-5 text-primary" />
                      <SelectValue placeholder="What are you moving?" />
                    </div>
                  </SelectTrigger>
                  <SelectContent>
                    {serviceTypes.map((service) => (
                      <SelectItem key={service.id} value={service.id} className="text-base">
                        <div className="flex items-center gap-2">
                          {service.icon && <service.icon className="h-4 w-4" />}
                          {service.name}
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="md:col-span-3">
                <Select value={location} onValueChange={setLocation}>
                  <SelectTrigger className="h-14 text-base">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-primary" />
                      <SelectValue placeholder="Moving from?" />
                    </div>
                  </SelectTrigger>
                  <SelectContent>
                    {cities.map((city) => (
                      <SelectItem key={city} value={city} className="text-base">
                        {city}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <motion.div 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="md:col-span-2"
              >
                <Button 
                  className="w-full h-14 text-base bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90"
                  asChild
                >
                  <Link href="/providers">
                    Get Quotes
                  </Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>

          {/* Features */}
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap justify-center gap-4 mt-8"
          >
            {[
              { text: "Verified Packers", icon: ShieldCheck },
              { text: "Free Estimates", icon: CalendarCheck },
              { text: "Damage Protection", icon: ShieldCheck },
              { text: "24/7 Support", icon: Phone },
              { text: "Same Day Service", icon: Truck }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                whileHover={{ y: -3 }}
                className="flex items-center px-4 py-2 bg-background/80 backdrop-blur-sm rounded-full border border-border/30 shadow-sm"
              >
                <item.icon className="h-5 w-5 text-primary mr-2" />
                <span className="text-foreground font-medium">{item.text}</span>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Trust indicators */}
          <motion.div 
            variants={fadeIn}
            className="mt-12 text-muted-foreground flex flex-col items-center"
          >
            <div className="flex items-center space-x-4 mb-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <div key={star} className="text-yellow-400">
                  ★
                </div>
              ))}
            </div>
            <p className="text-sm md:text-base">
              Trusted by <span className="font-semibold text-foreground">15,000+ families</span> and <span className="font-semibold text-foreground">500+ businesses</span>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}