import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ProviderFeatures } from "@/components/home/FeaturesSection";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";

export default function ForProvidersPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-24">
        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                Grow Your Moving Business with ShiftAdda
              </h1>
              <p className="text-xl md:text-2xl text-primary-foreground/80 mb-8">
                Join our network of trusted moving providers and connect with quality business clients looking for your services.
              </p>
              <Button size="lg" variant="secondary" asChild>
                <Link href="/signup">
                  Join as Provider <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <ProviderFeatures />

        <section className="py-16 md:py-24">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight mb-4">
                Why Choose ShiftAdda?
              </h2>
              <p className="text-muted-foreground text-lg">
                Join the platform that puts your business growth first
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Quality Leads",
                  description: "Connect with verified businesses actively looking for moving services.",
                },
                {
                  title: "Zero Upfront Costs",
                  description: "Only pay when you get confirmed bookings. No monthly fees or hidden charges.",
                },
                {
                  title: "Growth Tools",
                  description: "Access marketing tools, analytics, and insights to grow your business.",
                },
                {
                  title: "Flexible Operations",
                  description: "Choose your service areas, pricing, and availability with full control.",
                },
                {
                  title: "Secure Payments",
                  description: "Get paid securely and on time for every completed move.",
                },
                {
                  title: "Dedicated Support",
                  description: "Access 24/7 support to help you succeed on our platform.",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="bg-background p-6 rounded-xl border border-border"
                >
                  <div className="flex items-center mb-4">
                    <div className="bg-primary/10 p-2 rounded-full mr-4">
                      <CheckCircle className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg">{feature.title}</h3>
                  </div>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button size="lg" asChild>
                <Link href="/signup">
                  Start Growing Your Business <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-muted">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold tracking-tight mb-8">
                Ready to expand your moving business?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Join ShiftAdda today and start connecting with businesses looking for quality moving services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/signup">Join as Provider</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/contact">Contact Sales</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}