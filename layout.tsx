
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Elevate AI Advisory — AI That Increases Profit",
  description: "Practical AI implementations for hospitality, service-based real estate, and appointment-based businesses.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
