"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { businessFeatures, providerFeatures } from "@/lib/constants";
import { Feature } from "@/lib/types";
import { 
  TrendingUp, 
  Shield, 
  Clock, 
  Headphones, 
  LayoutDashboard, 
  Star, 
  DollarSign ,
  Package,
  BadgeCheck,
  Home,
  Briefcase,
  MapPin,
  Boxes,
  Car,
  ShieldCheck,
} from "lucide-react";

const iconMap = {
  TrendingUp,
  Clock,
  Headphones,
  LayoutDashboard,
  Star,
  DollarSign,
  BadgeCheck,
  Package,
  Home,
  Briefcase,
  Shield,
  MapPin,
  Boxes,
  Car,
  ShieldCheck,
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

interface FeatureSectionProps {
  title: string;
  subtitle: string;
  features: Feature[];
  reversed?: boolean;
  image: string;
  altText: string;
}

export function FeaturesSection({
  title,
  subtitle,
  features,
  reversed = false,
  image,
  altText,
}: FeatureSectionProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const IconComponent = (iconName: string) => {
    const Icon = iconMap[iconName as keyof typeof iconMap] || Shield;
    return <Icon className="h-6 w-6 text-primary" />;
  };

  return (
    <section ref={ref} className="py-16 md:py-24 bg-muted/50 overflow-hidden">
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div 
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{
            visible: { transition: { staggerChildren: 0.2 } }
          }}
          className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${reversed ? 'md:flex-row-reverse' : ''}`}
        >
          <motion.div 
            variants={fadeInUp}
            className={`${reversed ? 'md:order-2' : ''}`}
          >
            <h2 className="text-3xl font-bold tracking-tight mb-4">{title}</h2>
            <p className="text-muted-foreground mb-8 text-lg">{subtitle}</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  variants={fadeInUp}
                  className="group hover:bg-primary/5 p-4 rounded-xl transition-all duration-300"
                >
                  <div className="flex">
                    <div className="flex-shrink-0 mr-4 mt-1">
                      <div className="bg-primary/10 p-3 rounded-xl group-hover:bg-primary/20 transition-colors">
                        {IconComponent(feature.icon)}
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium text-lg mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground text-sm">{feature.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            variants={fadeInUp}
            className={`relative rounded-2xl overflow-hidden shadow-xl ${reversed ? 'md:order-1' : ''}`}
          >
            <div className="aspect-w-16 aspect-h-9">
              <img
                src={image}
                alt={altText}
                className="w-full h-full object-cover rounded-2xl transition-all duration-700 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export function BusinessFeatures() {
  return (
    <FeaturesSection
      title="Our Promise to You"
      subtitle="At ShiftAdda, we believe moving should be simple, affordable, and worry-free. With 5+ years of logistics experience and a team of trained professionals, we handle every move with care – from packing delicate items to safely delivering them to your new home or office."
      features={businessFeatures}
      image="/images/promise.png"
      altText="Business office moving"

    />
  );
}
export function ProviderFeatures() {
  return (
    <FeaturesSection
      title="For Service Providers"
      subtitle="Grow your moving business by connecting with quality clients."
      features={providerFeatures}
      reversed={true}
      image="/images/services.png"
      altText="Moving service provider"
    />
  );
}