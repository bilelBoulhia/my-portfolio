import type { Metadata } from "next";
import {Genos} from "next/font/google";
import "./globals.css";
import NoiseEffect from "@/app/components/ui/noise-effect";
import {FloatingDock} from "@/app/components/ui/floating-docks";
import {IconBrandGithub, IconCategory, IconFolder, IconHome, IconInfoSquare, IconPhoneCall} from "@tabler/icons-react";
import React from "react";

const genos = Genos({
  variable: "--font-genos",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "bilel boulahia",
  description: "my humble portflio",
};
const links = [
  {
    title: "Home",
    icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#",
  },

  {
    title: "Projects",
    icon: (
        <IconFolder className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#",
  },

  {
    title: "Aceternity UI",
    icon: (

        <IconInfoSquare className="h-full w-full text-neutral-500 dark:text-neutral-300" />

    ),
    href: "#",
  },
  {
    title: "Contact me",
    icon: (
        <IconPhoneCall className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#",
  },

  {
    title: "Twitter",
    icon: (
        <IconCategory className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#",
  },
  {
    title: "GitHub",
    icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#",
  },
];
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${genos.variable}  antialiased`}>
       <NoiseEffect/>
       <FloatingDock className='fixed overflow-hidden top-1/2  right-0 mr-2 -translate-y-1/2 items-center justify-center '  items={links}/>
       {children}
      </body>
    </html>
  );
}
