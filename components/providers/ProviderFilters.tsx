"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { serviceTypes, cities } from "@/lib/constants";
import { 
  Search,
  SlidersHorizontal,
  X,
  Check,
  MapPin,
  Star
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";

interface FilterOptions {
  search: string;
  location: string;
  serviceTypes: string[];
  rating: number | null;
  verifiedOnly: boolean;
}

interface ProviderFiltersProps {
  onFilterChange: (filters: FilterOptions) => void;
}

export function ProviderFilters({ onFilterChange }: ProviderFiltersProps) {
  const [filters, setFilters] = useState<FilterOptions>({
    search: "",
    location: "",
    serviceTypes: [],
    rating: null,
    verifiedOnly: false,
  });

  const [showFilters, setShowFilters] = useState(false);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newFilters = { ...filters, search: e.target.value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handleLocationChange = (value: string) => {
    const newFilters = { ...filters, location: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handleServiceTypeChange = (serviceType: string, checked: boolean) => {
    const newServiceTypes = checked
      ? [...filters.serviceTypes, serviceType]
      : filters.serviceTypes.filter((type) => type !== serviceType);
    
    const newFilters = { ...filters, serviceTypes: newServiceTypes };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handleRatingChange = (value: string) => {
    const rating = value ? parseInt(value, 10) : null;
    const newFilters = { ...filters, rating };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handleVerifiedChange = (checked: boolean) => {
    const newFilters = { ...filters, verifiedOnly: checked };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const clearFilters = () => {
    const newFilters = {
      search: "",
      location: "",
      serviceTypes: [],
      rating: null,
      verifiedOnly: false,
    };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const hasActiveFilters = 
    filters.location || 
    filters.serviceTypes.length > 0 || 
    filters.rating !== null || 
    filters.verifiedOnly;

  return (
    <div className="mb-8">
      <div className="flex flex-col md:flex-row gap-4 mb-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search providers..."
            className="pl-10"
            value={filters.search}
            onChange={handleSearchChange}
          />
        </div>
        <Button
          variant="outline"
          className="md:w-auto"
          onClick={() => setShowFilters(!showFilters)}
        >
          <SlidersHorizontal className="h-4 w-4 mr-2" />
          Filters
          {hasActiveFilters && (
            <Badge variant="secondary" className="ml-2">
              {filters.serviceTypes.length + 
               (filters.location ? 1 : 0) + 
               (filters.rating ? 1 : 0) + 
               (filters.verifiedOnly ? 1 : 0)}
            </Badge>
          )}
        </Button>
      </div>

      {showFilters && (
        <div className="bg-background p-4 rounded-lg border border-border shadow-sm mb-6 animate-in fade-in-50 slide-in-from-top-5 duration-300">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold">Filter Options</h3>
            {hasActiveFilters && (
              <Button
                variant="ghost"
                size="sm"
                onClick={clearFilters}
                className="text-sm h-8"
              >
                <X className="h-3 w-3 mr-1" /> Clear All
              </Button>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="text-sm font-medium flex items-center mb-2">
                <MapPin className="h-4 w-4 mr-1 text-muted-foreground" />
                Location
              </label>
              <Select
                value={filters.location}
                onValueChange={handleLocationChange}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Any location" />
                </SelectTrigger>
                <SelectContent>
                  {cities.map((city) => (
                    <SelectItem key={city} value={city}>
                      {city}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-sm font-medium flex items-center mb-2">
                <Star className="h-4 w-4 mr-1 text-muted-foreground" />
                Minimum Rating
              </label>
              <Select
                value={filters.rating?.toString() || ""}
                onValueChange={handleRatingChange}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Any rating" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="3">3+ Stars</SelectItem>
                  <SelectItem value="4">4+ Stars</SelectItem>
                  <SelectItem value="5">5 Stars</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">Verification</label>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="verified"
                  checked={filters.verifiedOnly}
                  onCheckedChange={(checked) => 
                    handleVerifiedChange(checked as boolean)
                  }
                />
                <label
                  htmlFor="verified"
                  className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Verified providers only
                </label>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <label className="text-sm font-medium mb-3 block">Service Types</label>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
              {serviceTypes.map((service) => (
                <div key={service.id} className="flex items-center space-x-2">
                  <Checkbox
                    id={service.id}
                    checked={filters.serviceTypes.includes(service.id)}
                    onCheckedChange={(checked) => 
                      handleServiceTypeChange(service.id, checked as boolean)
                    }
                  />
                  <label
                    htmlFor={service.id}
                    className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {service.name}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {hasActiveFilters && (
        <div className="flex flex-wrap gap-2 mb-4">
          {filters.location && (
            <Badge variant="secondary" className="flex items-center gap-1">
              Location: {filters.location}
              <X
                className="h-3 w-3 ml-1 cursor-pointer"
                onClick={() => handleLocationChange("")}
              />
            </Badge>
          )}
          
          {filters.rating !== null && (
            <Badge variant="secondary" className="flex items-center gap-1">
              {filters.rating}+ Stars
              <X
                className="h-3 w-3 ml-1 cursor-pointer"
                onClick={() => handleRatingChange("")}
              />
            </Badge>
          )}
          
          {filters.verifiedOnly && (
            <Badge variant="secondary" className="flex items-center gap-1">
              Verified Only
              <X
                className="h-3 w-3 ml-1 cursor-pointer"
                onClick={() => handleVerifiedChange(false)}
              />
            </Badge>
          )}
          
          {filters.serviceTypes.map((serviceType) => {
            const service = serviceTypes.find((s) => s.id === serviceType);
            return (
              <Badge key={serviceType} variant="secondary" className="flex items-center gap-1">
                {service?.name}
                <X
                  className="h-3 w-3 ml-1 cursor-pointer"
                  onClick={() => handleServiceTypeChange(serviceType, false)}
                />
              </Badge>
            );
          })}
        </div>
      )}
    </div>
  );
}