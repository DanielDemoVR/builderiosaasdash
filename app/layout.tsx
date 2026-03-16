import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: {
    default: "SaaS Dashboard",
    template: "%s | SaaS Dashboard",
  },
  description: "Modern SaaS dashboard built with Next.js, TypeScript, and Tailwind.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
