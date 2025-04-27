"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import { serviceTypes, cities } from "@/lib/constants";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

const slides = [
  {
    image: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg",
    title: "Professional Business Relocation",
    subtitle: "Seamless office moves with expert care"
  },
  {
    image: "https://images.pexels.com/photos/7706455/pexels-photo-7706455.jpeg",
    title: "Warehouse & Logistics Solutions",
    subtitle: "Efficient inventory transportation"
  },
  {
    image: "https://images.pexels.com/photos/4246120/pexels-photo-4246120.jpeg",
    title: "Equipment Transport Specialists",
    subtitle: "Safe handling of sensitive equipment"
  },
  {
    image: "https://images.pexels.com/photos/4246234/pexels-photo-4246234.jpeg",
    title: "Retail Business Moving",
    subtitle: "Minimize downtime during relocation"
  }
];

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
  const [currentSlide, setCurrentSlide] = useState(0);

  const [sliderRef, sliderInstance] = useKeenSlider({
    loop: true,
    mode: "snap",
    slides: {
      perView: 1,
      spacing: 0,
    },
    defaultAnimation: {
      duration: 2000,
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
  }, [
    (slider) => {
      let timeout: ReturnType<typeof setTimeout>;
      let mouseOver = false;
      
      function clearNextTimeout() {
        clearTimeout(timeout);
      }
      
      function nextTimeout() {
        clearTimeout(timeout);
        if (mouseOver) return;
        timeout = setTimeout(() => {
          slider.next();
        }, 5000);
      }
      
      slider.on("created", () => {
        nextTimeout();
      });
      
      slider.on("dragStarted", clearNextTimeout);
      slider.on("animationEnded", nextTimeout);
      slider.on("updated", nextTimeout);
    },
  ]);

  return (
    <div className="relative overflow-hidden">
      <div ref={sliderRef} className="keen-slider h-screen">
        {slides.map((slide, idx) => (
          <div key={idx} className="keen-slider__slide relative">
            <div className="absolute inset-0">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-[2s]" 
                style={{ 
                  backgroundImage: `url(${slide.image})`,
                  transform: currentSlide === idx ? 'scale(1.1)' : 'scale(1)'
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/20" />
              </div>
            </div>

            <div className="container px-4 md:px-6 mx-auto relative h-full">
              <motion.div 
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
                className="flex flex-col items-center text-center h-full pt-32 pb-16 md:pt-40 md:pb-24"
              >
                <motion.h1 
                  variants={fadeIn}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight max-w-3xl leading-tight mb-6 gradient-text"
                >
                  {slide.title}
                </motion.h1>
                
                <motion.p 
                  variants={fadeIn}
                  className="text-xl md:text-2xl text-muted-foreground max-w-2xl mb-10"
                >
                  {slide.subtitle}
                </motion.p>

                <motion.div 
                  variants={fadeIn}
                  className="w-full max-w-4xl glass p-6 rounded-2xl shadow-2xl"
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
        ))}
      </div>

      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              if (sliderInstance.current) sliderInstance.current.moveToIdx(idx);
            }}
            className={`w-2 h-2 rounded-full transition-all ${
              currentSlide === idx ? "w-8 bg-primary" : "bg-primary/30"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}