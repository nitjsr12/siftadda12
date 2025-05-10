"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Search, Calendar, Clock, ArrowRight } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "10 Tips for a Smooth Office Relocation",
    excerpt: "Planning an office move? Here are the essential tips to ensure a seamless transition without disrupting your business operations.",
    image: "https://images.pexels.com/photos/6169668/pexels-photo-6169668.jpeg",
    category: "Office Moving",
    author: "Priya Sharma",
    date: "2024-03-20",
    readTime: "5 min read"
  },
  {
    id: 2,
    title: "The Ultimate Guide to Business Equipment Transportation",
    excerpt: "Learn how to safely transport your valuable business equipment with our comprehensive guide covering best practices and common pitfalls.",
    image: "https://images.pexels.com/photos/6169659/pexels-photo-6169659.jpeg",
    category: "Equipment",
    author: "Rajesh Kumar",
    date: "2024-03-18",
    readTime: "8 min read"
  },
  {
    id: 3,
    title: "Sustainable Moving Practices for Eco-Conscious Businesses",
    excerpt: "Discover how to make your business relocation more environmentally friendly while maintaining efficiency and cost-effectiveness.",
    image: "https://images.pexels.com/photos/6170464/pexels-photo-6170464.jpeg",
    category: "Sustainability",
    author: "Amit Patel",
    date: "2024-03-15",
    readTime: "6 min read"
  },
  {
    id: 4,
    title: "How to Choose the Right Moving Service for Your Business",
    excerpt: "A detailed comparison of different moving services and what factors to consider when selecting the best option for your business needs.",
    image: "https://images.pexels.com/photos/6170441/pexels-photo-6170441.jpeg",
    category: "Tips",
    author: "Sarah Johnson",
    date: "2024-03-12",
    readTime: "7 min read"
  }
];

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const filteredPosts = blogPosts.filter(post =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
                ShiftAdda Blog
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl">
                Expert insights, tips, and guides for business relocation
              </p>
              <div className="relative max-w-xl w-full">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  placeholder="Search articles..."
                  className="pl-10 h-12 text-base"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Blog Posts Section */}
        <section className="py-16 md:py-24 justify-items-center">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { delay: index * 0.1 } }
                  }}
                  whileHover={{ y: -5 }}
                  className="bg-card rounded-xl overflow-hidden border hover:shadow-md transition-all"
                >
                  <Link href={`/blog/${post.id}`}>
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                      />
                    </div>
                    <div className="p-6">
                      <Badge variant="secondary" className="mb-4">
                        {post.category}
                      </Badge>
                      <h2 className="text-xl font-semibold mb-3 line-clamp-2">
                        {post.title}
                      </h2>
                      <p className="text-muted-foreground mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <div className="flex items-center space-x-4">
                          <span className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            {new Date(post.date).toLocaleDateString()}
                          </span>
                          <span className="flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            {post.readTime}
                          </span>
                        </div>
                        <Button variant="ghost" size="sm" className="text-primary">
                          Read More <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
            
            {/* Empty State */}
            {filteredPosts.length === 0 && (
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                className="text-center py-16"
              >
                <h3 className="text-xl font-medium mb-2">No articles found</h3>
                <p className="text-muted-foreground">
                  Try adjusting your search query
                </p>
              </motion.div>
            )}
          </div>
        </section>

        {/* CTA Section
        <section className="py-16 md:py-24 bg-gradient-to-r from-primary to-secondary">
          <div className="container px-4 md:px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="max-w-4xl mx-auto text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-6">
                Want More Relocation Insights?
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Subscribe to our newsletter for the latest tips and industry updates.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <Input 
                  placeholder="Your email address" 
                  className="bg-white/90 text-foreground" 
                />
                <Button variant="secondary" size="lg" className="gap-2">
                  Subscribe <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </motion.div>
          </div>
        </section> */}
      </main>
      <Footer />
    </div>
  );
}