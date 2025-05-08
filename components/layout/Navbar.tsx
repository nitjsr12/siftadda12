"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/constants";
import { Menu, X, ChevronDown, ChevronUp, Phone, MessageSquare, Info, Rss, Wrench } from "lucide-react";
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
  icon?: React.ElementType<{ className?: string }>; // Correctly type 'icon' as a React component
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
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled
          ? "bg-background/90 backdrop-blur-lg shadow-sm py-2 border-b border-gray-200 dark:border-gray-800"
          : "bg-transparent py-4"
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
                src="/images/shiftadd (1) (1).png"
                alt="Logo"
                className="h-[60px] w-auto transition-all duration-300 group-hover:opacity-90"
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
                    "hover:text-primary",
                    pathname === item.href
                      ? "text-primary"
                      : "text-muted-foreground"
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
                      scaleX: hoveredItem === index || pathname === item.href ? 1 : 0,
                      opacity: hoveredItem === index || pathname === item.href ? 1 : 0
                    }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-primary origin-left"
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
                      "bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700",
                      activeSubmenu === index ? "block" : "hidden"
                    )}
                  >
                    {item.subItems.map((subItem, subIndex) => (
                      <Link
                        key={subIndex}
                        href={subItem.href}
                        className={cn(
                          "flex items-center px-4 py-3 rounded-lg text-sm transition-colors gap-2",
                          "hover:bg-gray-100 dark:hover:bg-gray-800",
                          pathname === subItem.href
                            ? "text-primary font-medium"
                            : "text-muted-foreground"
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
            <ThemeToggle />
            <Button
              variant="ghost"
              size="sm"
              asChild
              className="hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full"
            >
              <Link href="/signin">Sign In</Link>
            </Button>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Button
                size="sm"
                asChild
                className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-lg hover:shadow-xl transition-all rounded-full px-6"
              >
                <Link href="/signup">Get Started</Link>
              </Button>
            </motion.div>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="flex items-center space-x-4 md:hidden">
            <ThemeToggle />
            <motion.button
              whileTap={{ scale: 0.9 }}
              className="focus:outline-none p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Menu"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
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
              <nav className="flex flex-col space-y-2 py-4 bg-background/95 backdrop-blur-lg">
                {items?.map((item, index) => (
                  <div key={index} className="flex flex-col">
                    <div className="flex items-center justify-between">
                      <Link
                        href={item.href}
                        onClick={() => {
                          if (!item.subItems) {
                            setIsOpen(false);
                          }
                        }}
                        className={cn(
                          "text-base font-medium px-4 py-3 rounded-lg transition-colors w-full flex items-center gap-2",
                          "hover:bg-gray-100 dark:hover:bg-gray-800",
                          pathname === item.href
                            ? "text-primary"
                            : "text-muted-foreground"
                        )}
                      >
                        {item.icon && <item.icon className="h-5 w-5" />}
                        {item.title}
                      </Link>
                      {item.subItems && (
                        <button
                          onClick={() => toggleSubmenu(index)}
                          className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
                        >
                          {activeSubmenu === index ? (
                            <ChevronUp className="h-5 w-5" />
                          ) : (
                            <ChevronDown className="h-5 w-5" />
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
                              "hover:bg-gray-100 dark:hover:bg-gray-800",
                              pathname === subItem.href
                                ? "text-primary font-medium"
                                : "text-muted-foreground"
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
                <div className="flex flex-col space-y-2 pt-4 border-t border-gray-200 dark:border-gray-800 px-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    asChild
                    className="w-full hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full justify-start px-4 py-3"
                  >
                    <Link href="/signin" className="flex items-center gap-2">
                      <span>Sign In</span>
                    </Link>
                  </Button>
                  <Button
                    size="sm"
                    asChild
                    className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-full px-4 py-3"
                  >
                    <Link href="/signup" className="flex items-center gap-2">
                      <span>Get Started</span>
                    </Link>
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