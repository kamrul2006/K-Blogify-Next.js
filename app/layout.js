import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Others/Navbar";
import Footer from "./Components/Others/Footer";
import AuthProvider from "./Components/AuthProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: 'K-Blogify',
  description: 'AI Powered Blog Platform',
};


export default function RootLayout({ children }) {
  return (
    <html foxified="" className="font-serif">

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        <AuthProvider>
          <Navbar />

          {children}

          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
