import { Lobster } from "next/font/google";
import "./globals.css";
import GameProvider from "@/context/Context";
import Navbar from "@/components/Navbar";
import Favicon from "../../public/assets/favicon-32x32.png"
const lobster = Lobster({ weight: "400", subsets: ["latin"] });

export const metadata = {
  title: "Spelling Bee Game",
  description: "Spelling Bee Game",
  icons: [{ rel: "icon", url: Favicon.src }],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={lobster.className}>
        <GameProvider>
          <Navbar />
          
          
          {children}
        </GameProvider>
      </body>
    </html>
  );
}
