import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pacific Automation — AI That Increases Profit",
  description:
    "Pacific Automation designs and implements AI receptionists and scheduling automations for hospitality, real estate, and appointment-based businesses.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
