"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { MapPin, Phone, Mail, Clock, Send, Loader2, ArrowRight } from "lucide-react";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast.success("Message sent successfully! We'll get back to you soon.");
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-24">
        {/* Hero Section with Parallax Effect */}
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
                Contact Us
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl">
                Have questions? We're here to help and would love to hear from you
              </p>
              <Button variant="outline" className="gap-2">
                Get Started <ArrowRight className="h-4 w-4" />
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Contact Content Section */}
        <section className="py-16 md:py-24 justify-items-center">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="space-y-8"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Our Location</h3>
                    <p className="text-muted-foreground">
                      #677, 27th main, 13th Cross, Sector 1, HSR LAYOUT<br />
                      Bengaluru 560102
                    </p>
                    <Button variant="link" className="pl-0 mt-2" asChild>
                      <a 
                        href="https://maps.google.com/?q=677,27th+main,13th+Cross,Sector+1,HSR+LAYOUT+Bengaluru+560102" 
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View on Map <ArrowRight className="ml-1 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <Button variant="link" className="pl-0 h-auto" asChild>
                      <a href="tel:+919991253250" className="text-muted-foreground hover:text-primary">
                        +91 9991253250
                      </a>
                    </Button>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <div className="space-y-1">
                      <Button variant="link" className="pl-0 h-auto" asChild>
                        <a href="mailto:support@shiftadda.com" className="text-muted-foreground hover:text-primary">
                          support@shiftadda.com
                        </a>
                      </Button>
                      <Button variant="link" className="pl-0 h-auto" asChild>
                        <a href="mailto:business@shiftadda.com" className="text-muted-foreground hover:text-primary">
                          business@shiftadda.com
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Business Hours</h3>
                    <p className="text-muted-foreground">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 10:00 AM - 4:00 PM
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ delay: 0.1 }}
              >
                <form onSubmit={handleSubmit} className="space-y-6 bg-card p-6 rounded-xl border">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">
                        Full Name
                      </label>
                      <Input
                        placeholder="Full Name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">
                        Email
                      </label>
                      <Input
                        type="email"
                        placeholder="Email" 
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">
                      Subject
                    </label>
                    <Input
                      placeholder="How can we help?"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">
                      Message
                    </label>
                    <Textarea
                      placeholder="Your message..."
                      className="min-h-[150px]"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
       
      </main>
      <Footer />
    </div>
  );
} 