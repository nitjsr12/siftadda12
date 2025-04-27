"use client";

import { useSearchParams } from "next/navigation";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { QuoteRequestForm } from "@/components/forms/QuoteRequestForm";
import { dummyProviders } from "@/lib/constants";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function QuoteRequestPage() {
  const searchParams = useSearchParams();
  const providerId = searchParams.get("provider");
  
  const provider = providerId 
    ? dummyProviders.find(p => p.id === providerId) 
    : null;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-24">
        <div className="container px-4 md:px-6 mx-auto py-8">
          <Button variant="ghost" size="sm" asChild className="mb-6">
            <Link href="/providers">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to providers
            </Link>
          </Button>

          <div className="max-w-3xl mx-auto bg-background rounded-xl shadow-md border border-border p-6 md:p-8">
            <div className="mb-8">
              <h1 className="text-2xl font-bold tracking-tight mb-2">
                {provider 
                  ? `Request a Quote from ${provider.name}` 
                  : "Request a Quote"}
              </h1>
              <p className="text-muted-foreground">
                {provider 
                  ? `Fill out the form below to request a customized quote from ${provider.name}` 
                  : "Fill out the form below to request a customized quote"}
              </p>
            </div>

            {provider && (
              <div className="flex items-center mb-8 p-4 bg-muted rounded-lg">
                <img 
                  src={provider.image} 
                  alt={provider.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h2 className="font-semibold">{provider.name}</h2>
                  <p className="text-sm text-muted-foreground">{provider.location}</p>
                </div>
              </div>
            )}

            <QuoteRequestForm providerId={providerId || undefined} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}