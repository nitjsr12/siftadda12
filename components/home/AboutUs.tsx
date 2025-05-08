"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Trophy, ShieldCheck } from "lucide-react";
import Image from "next/image";

export function AboutUs() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Left Side - Content */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="md:w-1/2"
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              Trusted Moving Services Since 2020
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8">
              At Siftadda, we've revolutionized moving in India with our customer-first approach. 
              What started as a small team in Bangalore has grown into a nationwide network of professional movers.
            </p>
            
            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-2 rounded-full mt-1">
                  <ShieldCheck className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Verified Professionals</h3>
                  <p className="text-muted-foreground">
                    All our movers undergo rigorous background checks and training.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-2 rounded-full mt-1">
                  <Trophy className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Award-Winning Service</h3>
                  <p className="text-muted-foreground">
                    Recognized as India's most reliable moving company 2023.
                  </p>
                </div>
              </div>
            </div>
            
            <Button asChild className="w-fit">
              <Link href="/about" className="flex items-center gap-2">
                Learn More About Us
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
          
          {/* Right Side - Image */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:w-1/2 relative"
          >
            <div className="relative aspect-video md:aspect-square rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/images/promise.png" // Replace with your image path
                alt="Our moving team at work"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent" />
              
              {/* Stats overlay */}
              <div className="absolute bottom-6 left-6 right-6 bg-background/90 backdrop-blur p-4 rounded-lg shadow-sm">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-primary">1000+</p>
                    <p className="text-sm text-muted-foreground">Happy Customers</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-primary">40+</p>
                    <p className="text-sm text-muted-foreground">Cities Covered</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}