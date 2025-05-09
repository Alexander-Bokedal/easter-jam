import type { Metadata } from "next";
import { EggListContextProvider } from "@/lib/context";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Easter Jam",
  description: "Jamming all easter ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv">
      <body
        className={`bg-yellow-100 flex justify-center items-center min-h-screen w-dvw ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <EggListContextProvider>
          {children}
        </EggListContextProvider>
        <ToastContainer />
      </body>
    </html>
  );
}
