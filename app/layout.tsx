import type { Metadata } from "next";
import {Genos} from "next/font/google";
import "./globals.css";
import NoiseEffect from "@/app/components/ui/noise-effect";
import React from "react";


const genos = Genos({
  variable: "--font-genos",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "bilel boulahia",
  description: "my humble portflio",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${genos.variable}  antialiased`}>
       <NoiseEffect/>
       {children}
      </body>
    </html>
  );
}
