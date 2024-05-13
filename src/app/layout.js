import { Lobster } from "next/font/google";
import "./globals.css";
import GameProvider from "@/context/Context";
import Navbar from "@/components/Navbar";
const lobster = Lobster({ weight: "400", subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    
      <body className={lobster.className}>
        <Navbar />
        <GameProvider>{children}</GameProvider>
      </body>
    </html>
  );
}
