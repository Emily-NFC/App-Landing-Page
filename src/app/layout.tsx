import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { ClarityInit } from "@/components/ClarityInit";
import "./globals.css";

const GA_MEASUREMENT_ID = "G-X9QNG5F5QM";
const CLARITY_PROJECT_ID = "wr6zqq1hv1";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Fitness Court® — Take it with you",
  description:
    "Download the free Fitness Court® App for guided workouts, check-ins, badges, and challenges.",
};

export const viewport: Viewport = {
  themeColor: "#006CA3",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
      {process.env.NODE_ENV === "production" && (
        <>
          <GoogleAnalytics gaId={GA_MEASUREMENT_ID} />
          <ClarityInit projectId={CLARITY_PROJECT_ID} />
        </>
      )}
    </html>
  );
}
