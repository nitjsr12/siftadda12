"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

// Sample data (replace with dynamic if needed)
const serviceTypes = [
  { id: "office", name: "Office Relocation" },
  { id: "warehouse", name: "Warehouse Move" },
  { id: "it", name: "IT Equipment Transfer" },
];

const cities = [
  "Bangalore",
  "Hyderabad",
  "Chennai",
  "Mumbai",
  "Delhi",
  "Pune",
  "Kolkata",
];

// Background images for slider
const slides = [
  { image: "/images/hero1.jpeg" },
  { image: "/images/hero1.jpeg" },
  { image: "/images/hero1.jpeg" },
];

const heroContent = {
  title: "Professional Business Relocation Services",
  subtitle: "Seamless office moves with expert care and precision",
  features: [
    "Verified Providers",
    "Free Quotes",
    "Service Guarantee",
    "Business Support",
  ],
};

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export function Hero() {
  const [moveType, setMoveType] = useState("");
  const [location, setLocation] = useState("");
  const [currentSlide, setCurrentSlide] = useState(0);

  const [sliderRef, sliderInstance] = useKeenSlider(
    {
      loop: true,
      mode: "snap",
      slides: { perView: 1, spacing: 0 },
      defaultAnimation: { duration: 2000 },
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>;
        let mouseOver = false;

        const clearNextTimeout = () => clearTimeout(timeout);
        const nextTimeout = () => {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => slider.next(), 5000);
        };

        slider.on("created", nextTimeout);
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  return (
    <div className="relative overflow-hidden h-screen">
      {/* Background Image Slider */}
      <div ref={sliderRef} className="keen-slider absolute inset-0 -z-10">
        {slides.map((slide, idx) => (
          <div
            key={idx}
            className="keen-slider__slide h-screen w-full relative"
          >
            <div
              className="absolute inset-0 h-full w-full bg-cover bg-center transition-transform duration-[2s]"
              style={{
                backgroundImage: `url(${slide.image})`,
                transform: currentSlide === idx ? "scale(1.1)" : "scale(1)",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
            </div>
          </div>
        ))}
      </div>

      {/* Hero Content */}
      <div className="container px-4 md:px-6 mx-auto h-full flex flex-col justify-center z-10 relative">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="text-center"
        >
          <motion.h1
            variants={fadeIn}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight max-w-3xl mx-auto leading-tight mb-6 text-white"
          >
            {heroContent.title}
          </motion.h1>

          <motion.p
            variants={fadeIn}
            className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto mb-10"
          >
            {heroContent.subtitle}
          </motion.p>

          {/* Select Form */}
          <motion.div
            variants={fadeIn}
            className="w-full max-w-4xl bg-white/10 backdrop-blur-sm p-6 rounded-2xl shadow-2xl mx-auto"
          >
            <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
              <div className="md:col-span-3">
                <Select value={moveType} onValueChange={setMoveType}>
                  <SelectTrigger className="bg-white/20 text-white border-white/30">
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
                  <SelectTrigger className="bg-white/20 text-white border-white/30">
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

              <Button className="md:col-span-1 h-full bg-primary text-white hover:bg-primary/90" asChild>
                <Link href="/providers">
                  Find <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </motion.div>

          {/* Features */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap justify-center gap-4 mt-10"
          >
            {heroContent.features.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="flex items-center px-4 py-2 bg-white/10 text-white backdrop-blur-sm rounded-full"
              >
                <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                <span>{item}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => sliderInstance.current?.moveToIdx(idx)}
            className={`w-2 h-2 rounded-full transition-all ${
              currentSlide === idx ? "w-8 bg-white" : "bg-white/30"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
