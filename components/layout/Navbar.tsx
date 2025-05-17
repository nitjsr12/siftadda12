"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/constants";
import {
  Menu,
  X,
  ChevronDown,
  ChevronUp,
  PhoneCall,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { NavItem } from "@/lib/types";
import { motion, AnimatePresence } from "framer-motion";

interface NavbarProps {
  items?: NavItem[];
}

export interface SubItem {
  title: string;
  href: string;
  icon?: React.ElementType<{ className?: string }>;
}

export function Navbar({ items = siteConfig.mainNav }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<number | null>(null);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleSubmenu = (index: number) => {
    setActiveSubmenu(activeSubmenu === index ? null : index);
  };

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50  duration-300 bg-[#0c0d06] ",
        scrolled
          ? "bg-[#0c0d06] backdrop-blur-md shadow-md py-2 border-b border-[#2e2e2e]"
          : "py-4"
      )}
    >
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex items-center justify-between">
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

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {items?.map((item, index) => (
              <div
                key={index}
                className="relative group"
                onMouseEnter={() => {
                  setHoveredItem(index);
                  if (item.subItems) setActiveSubmenu(index);
                }}
                onMouseLeave={() => {
                  setHoveredItem(null);
                  if (!item.subItems) setActiveSubmenu(null);
                }}
              >
                <Link
                  href={item.href}
                  className={cn(
                    "px-4 py-2 rounded-lg font-medium transition-all flex items-center relative",
                    pathname === item.href
                      ? "text-[#c0c0c0]"
                      : "text-[#999999] hover:text-[#c0c0c0]"
                  )}
                >
                  {item.title}
                  {item.subItems && (
                    <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-200" />
                  )}

                  {/* Animated underline */}
                  <motion.span
                    initial={{ scaleX: 0 }}
                    animate={{
                      scaleX:
                        hoveredItem === index || pathname === item.href ? 1 : 0,
                      opacity:
                        hoveredItem === index || pathname === item.href ? 1 : 0,
                    }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-[#c0c0c0] origin-left"
                  />
                </Link>

                {item.subItems && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{
                      opacity: activeSubmenu === index ? 1 : 0,
                      y: activeSubmenu === index ? 0 : -10,
                    }}
                    transition={{ duration: 0.2 }}
                    className={cn(
                      "absolute left-0 top-full mt-1 w-56 rounded-xl shadow-lg p-2",
                      "bg-[#1a1a1a] border border-[#2e2e2e]",
                      activeSubmenu === index ? "block" : "hidden"
                    )}
                  >
                    {item.subItems.map((subItem, subIndex) => (
                      <Link
                        key={subIndex}
                        href={subItem.href}
                        className={cn(
                          "flex items-center px-4 py-3 rounded-lg text-sm transition-colors gap-2",
                          "hover:bg-[#2a2a2a]",
                          pathname === subItem.href
                            ? "text-[#c0c0c0] font-medium"
                            : "text-[#999999]"
                        )}
                      >
                        {subItem.icon && <subItem.icon className="h-4 w-4" />}
                        {subItem.title}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </div>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-2">
            
            <Button
              variant="ghost"
              size="sm"
              asChild
              className="bg-[#c0c0c0] hover:bg-[#d4d4d4] text-black shadow-lg hover:shadow-xl transition-all rounded-full px-5 flex items-center gap-2"
            >
              <a href="mailto:example@email.com">Email Us</a>
            </Button>

            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Button
                size="sm"
                asChild
                className="bg-[#c0c0c0] hover:bg-[#d4d4d4] text-black shadow-lg hover:shadow-xl transition-all rounded-full px-5 flex items-center gap-2"
              >
                <a href="tel:+919740894949">
                  <PhoneCall className="w-4 h-4" />
                  +91 9740894949
                </a>
              </Button>
            </motion.div>
          </div>

          {/* Mobile Nav Toggle */}
          <div className="flex items-center space-x-4 md:hidden">
            
            <motion.button
              whileTap={{ scale: 0.9 }}
              className="focus:outline-none p-2 rounded-lg hover:bg-[#2e2e2e]"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Menu"
            >
              {isOpen ? (
                <X className="h-6 w-6 text-[#c0c0c0]" />
              ) : (
                <Menu className="h-6 w-6 text-[#c0c0c0]" />
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <nav className="flex flex-col space-y-2 py-4 bg-[#1a1a1a]/95 backdrop-blur-lg">
                {items?.map((item, index) => (
                  <div key={index} className="flex flex-col">
                    <div className="flex items-center justify-between">
                      <Link
                        href={item.href}
                        onClick={() => {
                          if (!item.subItems) setIsOpen(false);
                        }}
                        className={cn(
                          "text-base font-medium px-4 py-3 rounded-lg transition-colors w-full flex items-center gap-2",
                          "hover:bg-[#2e2e2e]",
                          pathname === item.href
                            ? "text-[#c0c0c0]"
                            : "text-[#999999]"
                        )}
                      >
                        {item.title}
                      </Link>
                      {item.subItems && (
                        <button
                          onClick={() => toggleSubmenu(index)}
                          className="p-2 rounded-full hover:bg-[#2e2e2e]"
                        >
                          {activeSubmenu === index ? (
                            <ChevronUp className="h-5 w-5 text-[#c0c0c0]" />
                          ) : (
                            <ChevronDown className="h-5 w-5 text-[#c0c0c0]" />
                          )}
                        </button>
                      )}
                    </div>
                    {item.subItems && activeSubmenu === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="pl-8 mt-1 space-y-1"
                      >
                        {item.subItems.map((subItem, subIndex) => (
                          <Link
                            key={subIndex}
                            href={subItem.href}
                            onClick={() => setIsOpen(false)}
                            className={cn(
                              "flex items-center px-4 py-3 rounded-lg text-sm gap-3",
                              "hover:bg-[#2a2a2a]",
                              pathname === subItem.href
                                ? "text-[#c0c0c0] font-medium"
                                : "text-[#999999]"
                            )}
                          >
                            {subItem.icon && <subItem.icon className="h-4 w-4" />}
                            {subItem.title}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </div>
                ))}
                <div className="flex flex-col space-y-2 pt-4 border-t border-[#2e2e2e] px-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    asChild
                    className="w-full hover:bg-[#2e2e2e] text-[#999999] hover:text-[#c0c0c0] rounded-full justify-start px-4 py-3"
                  >
              <a href="mailto:contact@Shiftadda.com">Email Us</a>
              </Button>
                  <Button
                    size="sm"
                    asChild
                    className="w-full bg-[#c0c0c0] hover:bg-[#d4d4d4] text-black rounded-full px-4 py-3"
                  >
                   <a href="tel:+919740894949">
                  <PhoneCall className="w-4 h-4" />
                  Call Now
                </a>
                  </Button>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
