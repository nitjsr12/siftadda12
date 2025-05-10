"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Box,
  Truck,
  ShieldCheck,
  CalendarCheck,
  MapPin,
  Phone,
} from "lucide-react";
import { serviceTypes } from "@/lib/constants";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function Hero() {
  const [formData, setFormData] = useState({
    moveType: "",
    pickupLocation: "",
    dropLocation: "",
    phoneNumber: "",
    date: undefined as Date | undefined,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (field: string, value: string | Date) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    setIsSubmitting(true);

    if (
      !formData.moveType ||
      !formData.pickupLocation ||
      !formData.dropLocation ||
      !formData.phoneNumber
    ) {
      alert("Please fill all required fields");
      setIsSubmitting(false);
      return;
    }
    if (!/^\d{10}$/.test(formData.phoneNumber)) {
      alert("Please enter a valid 10-digit phone number");
      setIsSubmitting(false);
      return;
    }

    const message = `*New Moving Request*
*Service Type:* ${formData.moveType}
*Pickup Location:* ${formData.pickupLocation}
*Drop Location:* ${formData.dropLocation}
*Phone Number:* ${formData.phoneNumber}
*Moving Date:* ${
      formData.date ? format(formData.date, "dd/MM/yyyy") : "Not specified"
    }`;

    const encodedMessage = encodeURIComponent(message.trim());
    window.open(
      `https://wa.me/919740894949?text=${encodedMessage}`,
      "_blank"
    );

    setIsSubmitting(false);
  };

  return (
    <div className="relative w-full overflow-hidden pt-32 pb-20 mt-28 xs:mt-20 xs:pb-0">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
      <div className="absolute inset-0">
        <img
          src="/images/bg.webp"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/20" />
      </div>

      </div>

      {/* Content */}
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="w-full max-w-7xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-6">
            <span className="bg-white bg-clip-text text-transparent">
            Precision in Every Pack. Premium in Every Move.
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-10">
            Trusted by thousands for reliable packing, moving, and storage
            solutions across India.
          </p>

          {/* Moving Form - Horizontal */}
          <div className="w-full bg-background/80 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-border/30">
            <div className="flex flex-col md:flex-row md:flex-nowrap gap-4">
              {/* Move Type */}
              <Select
                value={formData.moveType}
                onValueChange={(value) => handleChange("moveType", value)}
              >
                <SelectTrigger className="h-14 text-base md:w-[16%] w-full">
                  <div className="flex items-center gap-2">
                    <Box className="h-5 w-5 text-primary" />
                    <SelectValue placeholder="What are you moving?" />
                  </div>
                </SelectTrigger>
                <SelectContent>
                  {serviceTypes.map((service) => (
                    <SelectItem
                      key={service.id}
                      value={service.name}
                      className="text-base"
                    >
                      <div className="flex items-center gap-2">
                        {service.icon && <service.icon className="h-4 w-4" />}
                        {service.name}
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* Pickup */}
              <Input
                className="h-14 text-base md:w-[16%] w-full"
                placeholder="Pickup Location"
                value={formData.pickupLocation}
                onChange={(e) =>
                  handleChange("pickupLocation", e.target.value)
                }
              />

              {/* Drop */}
              <Input
                className="h-14 text-base md:w-[16%] w-full"
                placeholder="Drop Location"
                value={formData.dropLocation}
                onChange={(e) => handleChange("dropLocation", e.target.value)}
              />

              {/* Phone */}
              <Input
                className="h-14 text-base md:w-[16%] w-full"
                placeholder="Phone Number"
                type="tel"
                value={formData.phoneNumber}
                onChange={(e) => handleChange("phoneNumber", e.target.value)}
              />

              {/* Date */}
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={`h-14 text-base md:w-[16%] w-full justify-start text-left font-normal ${
                      !formData.date && "text-muted-foreground"
                    }`}
                  >
                    {formData.date ? (
                      format(formData.date, "dd/MM/yyyy")
                    ) : (
                      <span>Pick Date</span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={formData.date}
                    onSelect={(date) => handleChange("date", date as Date)}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>

              {/* Submit */}
              <Button
                className="h-14 text-base md:w-[10%] w-full bg-white hover:from-primary/90 hover:to-blue-600/90"
                onClick={handleSubmit}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Processing..." : "Enquiry Now"}
              </Button>
            </div>
          </div>

          {/* Features */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {[
              { text: "Verified Packers", icon: ShieldCheck },
              { text: "Free Estimates", icon: CalendarCheck },
              { text: "Damage Protection", icon: ShieldCheck },
              { text: "24/7 Support", icon: Phone },
              { text: "Same Day Service", icon: Truck },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center px-4 py-2 bg-background/80 backdrop-blur-sm rounded-full border border-border/30 shadow-sm"
              >
                <item.icon className="h-5 w-5 text-primary mr-2" />
                <span className="text-foreground font-medium">
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
