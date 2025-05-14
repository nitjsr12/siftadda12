import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from "@/components/ui/sonner";
import { siteConfig } from '@/lib/constants';
import { ThemeProvider } from "@/components/theme-provider";
import  GoogleAnalytics  from "@/components/GoogleAnalytics";
import Script from 'next/script';


const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "B2B",
    "moving",
    "packers",
    "movers",
    "business relocation",
    "office moving",
    "logistics",
    "warehouse moving",
    "equipment transport",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Google Tag Manager - Global site tag (gtag.js) */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-TZXCG1Y2HH`}
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-TZXCG1Y2HH');
          `}
        </Script>
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
         <GoogleAnalytics/>
          <Toaster position="top-right" />
        </ThemeProvider>
      </body>
    </html>
  );
}