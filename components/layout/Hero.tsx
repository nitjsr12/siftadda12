"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import { serviceTypes, cities } from "@/lib/constants";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
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
    <div className="relative h-screen w-full overflow-hidden">
      {/* Static background image */}
      <div className="absolute inset-0 -z-10">
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ 
            backgroundImage: "url(https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg)",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/20" />
        </div>
      </div>

      {/* Centered content */}
      <div className="container h-full flex items-center justify-center px-4 md:px-6 mx-auto">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="w-full max-w-5xl text-center"
        >
          <motion.h1 
            variants={fadeIn}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-6 gradient-text"
          >
            Professional Business Relocation Services
          </motion.h1>
          
          <motion.p 
            variants={fadeIn}
            className="text-xl md:text-2xl text-muted-foreground mb-10 mx-auto max-w-2xl"
          >
            Seamless commercial moving solutions tailored to your Personal & business needs
          </motion.p>

          <motion.div 
            variants={fadeIn}
            className="w-full glass p-6 rounded-2xl shadow-2xl mx-auto max-w-4xl"
          >
            <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
              <div className="md:col-span-3">
                <Select value={moveType} onValueChange={setMoveType}>
                  <SelectTrigger className="bg-background/80 backdrop-blur border-border/30">
                    <SelectValue placeholder="Move Type" />
                  </SelectTrigger>
                  <SelectContent>
                    {serviceTypes.map((service) => (
                      <SelectItem key={service.id} value={service.id}>
                        {service.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="md:col-span-3">
                <Select value={location} onValueChange={setLocation}>
                  <SelectTrigger className="bg-background/80 backdrop-blur border-border/30">
                    <SelectValue placeholder="Your Location" />
                  </SelectTrigger>
                  <SelectContent>
                    {cities.map((city) => (
                      <SelectItem key={city} value={city}>
                        {city}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <Button 
                className="md:col-span-1 h-full bg-primary hover:bg-primary/90" 
                asChild
              >
                <Link href="/providers">
                  Find <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap justify-center gap-6 mt-8"
          >
            {[
              "Verified Providers",
              "Free Quotes",
              "Service Guarantee",
              "Business Support"
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="flex items-center px-4 py-2 glass rounded-full"
              >
                <CheckCircle className="h-4 w-4 text-primary mr-2" />
                <span className="text-foreground">{item}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}