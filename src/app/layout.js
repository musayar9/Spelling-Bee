import { Lobster } from "next/font/google";
import "./globals.css";
import GameProvider from "@/context/Context";
import Navbar from "@/components/Navbar";

const lobster = Lobster({ weight: "400", subsets: ["latin"] });

export const metadata = {
  title: "Spelling Bee Game",
  description: "Spelling Bee Game",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Lobster&display=swap"
          rel="stylesheet"
        ></link>
      </head>
      <body className={lobster.className}>
        <GameProvider>
          <Navbar />

          {children}
        </GameProvider>
      </body>
    </html>
  );
}
