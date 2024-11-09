import { Inter } from "next/font/google";
import "./globals.css";
import "./style.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AiNrzy: An Open Source Community for AI Developers",
  description: "Join Ainrzy, the open source community dedicated to AI developers. Get involved in collaborative projects, share knowledge, and connect with fellow AI enthusiasts. Start contributing to the future of AI today!",
  keywords: "Ainrzy, open source, community, AI developers, collaborative projects, knowledge sharing, AI enthusiasts",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  );
}