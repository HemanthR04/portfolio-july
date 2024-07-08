import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavigationBar from "@/components/NavigationBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hemanth Ramesh",
  description: "Full stack developer, designer, and creator.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://api.fontshare.com/v2/css?f[]=general-sans@200,201,300,301,400,401,500,501,600,601,700,701&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap" rel="stylesheet"></link>
      </head>
      <body className='bg-primary'>
      <div className="absolute top-0 -z-10 h-full w-full bg-primary"><div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(168,109,244,0.5)] opacity-50 blur-[80px]"></div></div>

        <NavigationBar />
        {children}</body>
    </html>
  );
}
