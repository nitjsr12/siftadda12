"use client";

import { useState, useEffect } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ProviderFilters } from "@/components/providers/ProviderFilters";
import { ProviderList } from "@/components/providers/ProviderList";
import { QuoteRequestForm } from "@/components/forms/QuoteRequestForm";
import { Button } from "@/components/ui/button";
import { api } from "@/utils/api";
import { BuildingIcon, Loader2 } from "lucide-react";
import { Provider } from "@/lib/types"; // Assuming you have a Provider type defined in your types file

interface FilterOptions {
  search: string;
  location: string;
  serviceTypes: string[];
  rating: number | null;
  verifiedOnly: boolean;
}

export default function ProvidersPage() {
  

  // Remove the local Provider interface since we are using the imported one

  const [providers, setProviders] = useState<Provider[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showQuoteForm, setShowQuoteForm] = useState(false);

  const loadProviders = async (filters: Partial<FilterOptions>) => {
    setIsLoading(true);
    let filteredData: any[] = [];
    try {
      const data = await api.business.getAll.query({
        type: filters.serviceTypes?.[0],
        location: filters.location,
        status: filters.verifiedOnly ? 'active' : undefined,
      });
      
      filteredData = [...data];
      
      // Apply search filter
      if (filters.search) {
        const searchLower = filters.search.toLowerCase();
        filteredData = filteredData.filter(
          (provider: any) =>
            provider.name.toLowerCase().includes(searchLower) ||
            provider.type.toLowerCase().includes(searchLower)
        );
      }
      
      // Apply rating filter if needed
      if (filters.rating) {
        filteredData = filteredData.filter(
          (provider: any) => provider.rating >= filters.rating!
        );
      }
      
      setProviders(filteredData);
    } catch (error) {
      console.error('Failed to load providers:', error);
      // Ensure the data matches the expected Provider structure
      setProviders(
              filteredData.map((provider: any) => ({
                id: provider.id,
                name: provider.name,
                type: provider.type,
                rating: provider.rating,
                image: provider.image,
                reviewCount: provider.reviewCount,
                location: provider.location,
                verified: provider.verified || false, // Ensure default value if missing
                services: provider.services || [], // Ensure default value if missing
                description: provider.description || "", // Ensure default value if missing
              }))
            );
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadProviders({});
  }, []);

  const handleFilterChange = (filters: FilterOptions) => {
    loadProviders(filters);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-24">
        <div className="container px-4 md:px-6 mx-auto py-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold tracking-tight mb-2">Find Movers</h1>
              <p className="text-muted-foreground">
                Browse our verified providers and request quotes
              </p>
            </div>
            <Button 
              onClick={() => setShowQuoteForm(!showQuoteForm)}
              className="mt-4 md:mt-0"
            >
              {showQuoteForm ? "View Providers" : "Request Multiple Quotes"}
            </Button>
          </div>

          {showQuoteForm ? (
            <div className="bg-background rounded-xl shadow-md border border-border p-6 md:p-8 animate-in fade-in-50 slide-in-from-top-5 duration-300">
              <div className="flex items-center justify-center mb-6">
                <div className="bg-primary/10 p-3 rounded-full">
                  <BuildingIcon className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-2xl font-semibold ml-3">Request Quotes from Multiple Providers</h2>
              </div>
              <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-8">
                Fill out this form once and receive customized quotes from our verified moving providers that match your requirements.
              </p>
              <QuoteRequestForm />
            </div>
          ) : (
            <>
              <ProviderFilters onFilterChange={handleFilterChange} />
              
              {isLoading ? (
                <div className="flex justify-center items-center h-60">
                  <Loader2 className="h-10 w-10 animate-spin text-primary/70" />
                </div>
              ) : providers.length === 0 ? (
                <div className="text-center py-16">
                  <h3 className="text-xl font-semibold mb-2">No providers found</h3>
                  <p className="text-muted-foreground mb-8">
                    Try adjusting your filters to see more results
                  </p>
                  <Button 
                    variant="outline" 
                    onClick={() => handleFilterChange({
                      search: "",
                      location: "",
                      serviceTypes: [],
                      rating: null,
                      verifiedOnly: false,
                    })}
                  >
                    Clear All Filters
                  </Button>
                </div>
              ) : (
                <ProviderList providers={providers} />
              )}
            </>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}