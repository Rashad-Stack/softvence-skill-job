import Footer from "@/shared/Footer";
import Navbar from "@/shared/Navbar";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "SoftVence",
  description:
    "Currently following positions are open, feel free to apply any one where you are skilled and prefer to join.",
  alternates: {
    canonical: "https://softvence-skill-job.vercel.app/",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Canonical Tag here */}
        <link
          rel="canonical"
          href="https://softvence-skill-job.vercel.app/"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
        <ToastContainer position="top-right" autoClose={3000} />
      </body>
    </html>
  );
}

