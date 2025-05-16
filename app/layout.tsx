import type { Metadata } from "next";
import {Genos} from "next/font/google";
import "./globals.css";
import NoiseEffect from "@/app/components/ui/noise-effect";
import React from "react";
import {domAnimation, LazyMotion} from "motion/react"
import {Analytics} from "@vercel/analytics/next";

const genos = Genos({
  variable: "--font-genos",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "bilel boulahia",
  description: "my humble portflio",
    openGraph: {
        title: "bilel boulahia",
        description: "my humble portfolio",
        url: "https://my-portfolio-two-blue-10.vercel.app/",
        siteName: "bilel boulahia",
        images: [
            {
                url: "https://cdn.dribbble.com/userupload/17904222/file/original-223be05790512966cb3145797aed562c.jpeg?resize=752x&vertical=center",
                width: 1200,
                height: 630,
                alt: "bilel boulahia portfolio preview",
            },
        ],

    },

};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <head>
        <link rel="preload" as="image" href="/images/me.webp"/>
        <link
            rel="preload"
            href="/images/cinemapic.jpg"
            as="image"
        />
        <link
            rel="preload"
            href="/images/hi.png"
            as="image"
        />
        <link
            rel="preload"
            href="/images/hiarticles.jpg"
            as="image"
        />
        <link
            rel="preload"
            href="/images/meteo.png"
            as="image"
        />
        <link
            rel="preload"
            href="/images/qr.png"
            as="image"
        />
        <link
            rel="preload"
            href="/images/wrt.png"
            as="image"
        />
        <link
            rel="preload"
            href="https://i.ibb.co/8LRVmCD7/Untitled-1-1.png"
            as="image"
        />
        <link
            rel="preload"
            href="https://i.ibb.co/B2JVWVjY/Untitled-1.png"
            as="image"
        />
        <title>portfolio</title>
    </head>

    <LazyMotion features={domAnimation}>
        <body className={`${genos.variable}  overflow-x-hidden antialiased`}>
        <NoiseEffect/>
        {children}
        <Analytics mode="production"/>;
        </body>
    </LazyMotion>
    </html>
  );
}
