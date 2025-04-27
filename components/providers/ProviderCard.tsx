import { Provider } from "@/lib/types";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Star, 
  MapPin, 
  ExternalLink,
  MessageSquare,
  PhoneCall,
  CheckCircle
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ProviderCardProps {
  provider: Provider;
}

export function ProviderCard({ provider }: ProviderCardProps) {
  return (
    <div className="bg-background rounded-xl shadow-md border border-border overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="relative">
        <img
          src={provider.image}
          alt={provider.name}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 right-4">
          {provider.verified && (
            <Badge variant="secondary" className="flex items-center gap-1">
              <CheckCircle className="h-3 w-3" />
              Verified
            </Badge>
          )}
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-semibold">{provider.name}</h3>
          <div className="flex items-center text-yellow-500">
            <Star className="h-4 w-4 fill-yellow-500" />
            <span className="ml-1 font-medium">{provider.rating}</span>
            <span className="text-muted-foreground text-sm ml-1">({provider.reviewCount})</span>
          </div>
        </div>
        
        <div className="flex items-center text-muted-foreground mb-4">
          <MapPin className="h-4 w-4 mr-1" />
          <span className="text-sm">{provider.location}</span>
        </div>
        
        <p className="text-muted-foreground mb-4 text-sm line-clamp-2">
          {provider.description}
        </p>
        
        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            {provider.services.map((service, index) => (
              <Badge key={index} variant="outline">
                {service}
              </Badge>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-3">
          <Button variant="outline" size="sm" asChild className="w-full">
            <Link href={`/providers/${provider.id}`}>
              <ExternalLink className="h-4 w-4 mr-2" />
              View Profile
            </Link>
          </Button>
          <Button size="sm" asChild className="w-full">
            <Link href={`/quote-request?provider=${provider.id}`}>
              <MessageSquare className="h-4 w-4 mr-2" />
              Request Quote
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}