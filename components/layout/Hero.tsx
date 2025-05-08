"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Box, Truck, ShieldCheck, CalendarCheck, MapPin, Phone } from "lucide-react";
import { serviceTypes } from "@/lib/constants";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export function Hero() {
  const [formData, setFormData] = useState({
    moveType: "",
    pickupLocation: "",
    dropLocation: "",
    phoneNumber: "",
    date: undefined as Date | undefined
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (field: string, value: string | Date) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    setIsSubmitting(true);
    
    // Validate required fields
    if (!formData.moveType || !formData.pickupLocation || !formData.dropLocation || !formData.phoneNumber) {
      alert("Please fill all required fields");
      setIsSubmitting(false);
      return;
    }

    // Format WhatsApp message
    const message = `*New Moving Request*%0A%0A
*Service Type:* ${formData.moveType}%0A
*Pickup Location:* ${formData.pickupLocation}%0A
*Drop Location:* ${formData.dropLocation}%0A
*Phone Number:* ${formData.phoneNumber}%0A
*Moving Date:* ${formData.date ? format(formData.date, 'dd/MM/yyyy') : 'Not specified'}`;

    // Encode message for WhatsApp URL
    const encodedMessage = encodeURIComponent(message.trim());
    
    // Open WhatsApp with pre-filled message
    window.open(`https://wa.me/917256889395?text=${encodedMessage}`, '_blank');
    
    setIsSubmitting(false);
  };

  return (
    <div className="relative w-full overflow-hidden pt-32 pb-20">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ 
            backgroundImage: "url(https://images.unsplash.com/photo-1601758003122-53c40e686a19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80)",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/20" />
        </div>
      </div>

      {/* Content */}
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="w-full max-w-4xl mx-auto text-center"
        >
          <h3 className="text-4xl md:text-2xl lg:text-2xl font-bold tracking-tight leading-tight mb-6">
            <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              Stress-Free Moving
            </span> <br />
            Done Right
          </h3>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-10">
            Trusted by thousands for reliable packing, moving, and storage solutions across India.
          </p>

          {/* Moving Form */}
          <div className="w-full bg-background/80 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-border/30">
            <div className="space-y-4">
              {/* Service Type */}
              <div>
                <Select 
                  value={formData.moveType} 
                  onValueChange={(value) => handleChange('moveType', value)}
                >
                  <SelectTrigger className="h-14 text-base">
                    <div className="flex items-center gap-2">
                      <Box className="h-5 w-5 text-primary" />
                      <SelectValue placeholder="What are you moving?" />
                    </div>
                  </SelectTrigger>
                  <SelectContent>
                    {serviceTypes.map((service) => (
                      <SelectItem key={service.id} value={service.name} className="text-base">
                        <div className="flex items-center gap-2">
                          {service.icon && <service.icon className="h-4 w-4" />}
                          {service.name}
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              {/* Pickup Location */}
              <div>
                <div className="flex items-center gap-2 mb-1 ml-1">
                  <MapPin className="h-4 w-4 text-primary" />
                  <label className="text-sm font-medium">Pickup Location*</label>
                </div>
                <Input 
                  className="h-14 text-base"
                  placeholder="HSR Layout, Bengaluru..."
                  value={formData.pickupLocation}
                  onChange={(e) => handleChange('pickupLocation', e.target.value)}
                  required
                />
              </div>
              
              {/* Drop Location */}
              <div>
                <div className="flex items-center gap-2 mb-1 ml-1">
                  <MapPin className="h-4 w-4 text-primary" />
                  <label className="text-sm font-medium">Drop Location*</label>
                </div>
                <Input 
                  className="h-14 text-base"
                  placeholder="Electronic City, Bengaluru..."
                  value={formData.dropLocation}
                  onChange={(e) => handleChange('dropLocation', e.target.value)}
                  required
                />
              </div>
              
              {/* Phone Number */}
              <div>
                <div className="flex items-center gap-2 mb-1 ml-1">
                  <Phone className="h-4 w-4 text-primary" />
                  <label className="text-sm font-medium">Phone Number*</label>
                </div>
                <Input 
                  className="h-14 text-base"
                  placeholder="7256889395"
                  type="tel"
                  value={formData.phoneNumber}
                  onChange={(e) => handleChange('phoneNumber', e.target.value)}
                  required
                />
              </div>
              
              {/* Moving Date */}
              <div>
                <div className="flex items-center gap-2 mb-1 ml-1">
                  <CalendarCheck className="h-4 w-4 text-primary" />
                  <label className="text-sm font-medium">Shifting Date</label>
                </div>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={`h-14 w-full text-base justify-start text-left font-normal ${!formData.date && "text-muted-foreground"}`}
                    >
                      {formData.date ? format(formData.date, "dd/MM/yyyy") : <span>Pick a date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={formData.date}
                      onSelect={(date) => handleChange('date', date as Date)}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
              
              {/* Submit Button */}
              <Button 
                className="w-full h-14 text-base bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 mt-4"
                onClick={handleSubmit}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Processing..." : "Check Price on WhatsApp"}
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
              { text: "Same Day Service", icon: Truck }
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center px-4 py-2 bg-background/80 backdrop-blur-sm rounded-full border border-border/30 shadow-sm"
              >
                <item.icon className="h-5 w-5 text-primary mr-2" />
                <span className="text-foreground font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}