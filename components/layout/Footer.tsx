"use client";

import Link from "next/link";
import { TruckIcon, Phone, Mail, MapPin, MessageCircle, X ,ArrowRight  } from "lucide-react";
import { siteConfig } from "@/lib/constants";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Footer() {
  const [isVisible, setIsVisible] = useState(false);
  const [showContactPanel, setShowContactPanel] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <>
      {/* Contact Info Floating Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ 
          opacity: isVisible ? 1 : 0,
          scale: isVisible ? 1 : 0.5
        }}
        transition={{ duration: 0.3 }}
        className={`fixed bottom-6 left-6 z-50 ${isVisible ? 'block' : 'hidden'}`}
      >
        
      </motion.div>

      {/* WhatsApp Floating Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ 
          opacity: isVisible ? 1 : 0,
          scale: isVisible ? 1 : 0.5
        }}
        transition={{ duration: 0.3 }}
        className={`fixed bottom-6 right-6 z-50 ${isVisible ? 'block' : 'hidden'}`}
      >
        <a
          href="https://wa.me/919740894949"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center transition-all duration-300"
        >
          <MessageCircle className="h-6 w-6" />
        </a>
      </motion.div>

      {/* Full-page Contact Panel */}
      <AnimatePresence>
        {showContactPanel && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            onClick={() => setShowContactPanel(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-background rounded-xl shadow-2xl max-w-md w-full p-6 relative"
            >
              <button
                onClick={() => setShowContactPanel(false)}
                className="absolute top-4 right-4 text-muted-foreground hover:text-primary"
              >
                <X className="h-6 w-6" />
              </button>
              
              <h3 className="text-2xl font-bold mb-6">Contact Us</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Our Location</h4>
                    <address className="text-muted-foreground not-italic mt-1">
                    #677,27th main ,13th Cross, Sector 1, HSR LAYOUT  Bengaluru 
                    560102
                    </address>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Call Us</h4>
                    <a href="tel:+919740894949" className="text-muted-foreground hover:text-primary mt-1 block">
                    +91 9740894949
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Email Us</h4>
                    <a href="mailto:contact@shiftadda.com" className="text-muted-foreground hover:text-primary mt-1 block">
                    contact@shiftadda.com
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-border/30">
                <h4 className="font-semibold mb-3">Business Hours</h4>
                <div className="text-muted-foreground space-y-1">
                  <p>Monday - Friday: 8:00 AM - 8:00 PM</p>
                  <p>Saturday: 9:00 AM - 6:00 PM</p>
                  <p>Sunday: Emergency services only</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="border-t bg-[#0c0d06]">
        <div className="container px-4 md:px-6 py-12 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <div className="md:col-span-2">
            <Link href="/" className="flex items-center space-x-2 group">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <img
                src="/images/logo.jpg"
                alt="Logo"
                className="h-[90px] w-auto transition-all duration-300 group-hover:opacity-90"
              />
            </motion.div>
          </Link>

              <p className="mt-3 text-muted-foreground text-sm">
                {siteConfig.description}
              </p>
              
              <div className="flex mt-6 space-x-4">
                {siteConfig.socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary"
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-3">Services</h3>
              <ul className="space-y-2 text-sm">
                {siteConfig.services.map((service) => (
                  <li key={service.name}>
                    {/* <Link href={service.href} className="text-muted-foreground hover:text-primary">
                      {service.name}
                    </Link> */}
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-3">Company</h3>
              <ul className="space-y-2 text-sm">
                {siteConfig.companyLinks.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-muted-foreground hover:text-primary">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Dedicated Contact Column */}
            <div>
              <h3 className="font-semibold text-lg mb-3">Contact</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">
                  #677,27th main ,13th Cross, Sector 1, HSR LAYOUT  Bengaluru 
                  560102
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-primary" />
                  <a href="tel:+91991253250" className="text-muted-foreground hover:text-primary">
                    +91 9740894949
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-primary" />
                  <a href="mailto:contact@shiftadda.com" className="text-muted-foreground hover:text-primary">
                    contact@shiftadda.com
                  </a>
                </li>
              </ul>
              
              <button
                onClick={() => setShowContactPanel(true)}
                className="mt-4 text-sm font-medium text-primary hover:text-primary/80 flex items-center gap-1"
              >
                View full contact details
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
          
          <div className="mt-10 pt-8 border-t text-center text-sm text-muted-foreground">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p>&copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
              <div className="flex space-x-6">
                {siteConfig.footerLinks.map((link) => (
                  <Link key={link.name} href={link.href} className="hover:text-primary">
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}