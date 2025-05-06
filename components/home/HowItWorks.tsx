import { howItWorksSteps } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  ClipboardList,
  Layers,
  CheckCircle,
  Calendar,
  ArrowRight,
  Wallet,
  Truck,
} from "lucide-react";

const iconMap = {
  ClipboardList,
  Layers,
  CheckCircle,
  Calendar,
  Wallet,
  Truck,

}


export function HowItWorks() {
  const IconComponent = (iconName: string) => {
    const Icon = iconMap[iconName as keyof typeof iconMap] || CheckCircle;
    return <Icon className="h-10 w-10 text-primary" />;
  };

  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">How It Works</h2>
          <p className="text-muted-foreground text-lg">
            Our streamlined process makes finding the right moving partner quick and efficient
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {howItWorksSteps.map((step, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center p-6 bg-background rounded-xl shadow-sm border border-border transition-all duration-300 hover:shadow-md"
            >
              <div className="relative mb-6">
                <div className="absolute -inset-1 rounded-full bg-primary/10 animate-pulse"></div>
                <div className="relative bg-background p-4 rounded-full border border-primary/20">
                  {IconComponent(step.icon)}
                </div>
                <div className="absolute -right-3 -top-3 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">
                  {index + 1}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button size="lg" asChild>
            <Link href="/providers">
              Find Movers Now <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}