import { Button } from "@/components/ui/button";
import Link from "next/link";

export function CTASection() {
  return (
    <section className="py-16 md:py-24 bg-primary text-primary-foreground">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              Ready to streamline your business moving needs?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8">
              Join thousands of businesses that have simplified their relocation process with our platform. Get started today and find the perfect moving partner for your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/providers">Find Movers</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/for-providers">Join as Provider</Link>
              </Button>
            </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://images.pexels.com/photos/6169670/pexels-photo-6169670.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Business moving"
              className="w-full h-auto object-cover rounded-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/40 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
}