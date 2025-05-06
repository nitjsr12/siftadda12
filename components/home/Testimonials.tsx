"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { testimonials } from "@/lib/constants";
import { Testimonial } from "@/lib/types";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setActiveIndex((current) => (current - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setActiveIndex((current) => (current + 1) % testimonials.length);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        className={cn(
          "h-5 w-5",
          i < rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"
        )}
      />
    ));
  };

  const testimonial = testimonials[activeIndex];

  return (
    <section className="py-16 md:py-24 bg-primary/5">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            Trusted by Customers
          </h2>
          <p className="text-muted-foreground text-lg">
            See what our customers have to say about their experience with our platform
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="relative bg-background p-8 md:p-12 rounded-2xl shadow-lg overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-full -mt-20 -mr-20"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-primary/5 rounded-full -mb-20 -ml-20"></div>
            
            <div className="relative">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="shrink-0">
                    
                  
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex mb-4">{renderStars(testimonial.rating)}</div>
                  <blockquote className="text-lg md:text-xl italic mb-4">
                    "{testimonial.comment}"
                  </blockquote>
                  <div className="mt-6">
                    <p className="font-semibold text-lg">{testimonial.name}</p>
                    <p className="text-muted-foreground">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={cn(
                  "w-3 h-3 rounded-full transition-all",
                  index === activeIndex
                    ? "bg-primary w-10"
                    : "bg-primary/30 hover:bg-primary/50"
                )}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-background rounded-full p-2 shadow-md hover:bg-muted transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-background rounded-full p-2 shadow-md hover:bg-muted transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
    </section>
  );
}