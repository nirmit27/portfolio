import type React from "react";
import type { Metadata } from "next";

import "./styles/globals.css";

import Nav from "./components/Nav";
import ScrollToTop from "./components/ui/ScrollToTop";

export const metadata: Metadata = {
  title: "Nirmit Mishra",
  description: "A machine learning engineer.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        <Nav />
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
