import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";


export const metadata: Metadata = {
  title: "AP Today News | Latest News & Breaking News",
  description:
    "AP Today News - Latest breaking news, India, Uttarakhand, politics, business, sports, entertainment, technology and world news.",
  keywords: [
    "AP Today News",
    "Latest News",
    "Breaking News",
    "India News",
    "Uttarakhand News",
    "Dehradun News",
    "Politics News",
    "Sports News",
    "Entertainment News",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />

        {children}
              
        <Footer/>
      </body>
    </html>
  );
}