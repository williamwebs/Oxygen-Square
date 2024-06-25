import { Inter } from "next/font/google";
import localfont from "next/font/local";
import "../styles/globals.css";
import NavBar from "@/components/nav/NavBar";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

const grotesk = localfont({
  src: [
    {
      path: "../public/fonts/CabinetGrotesk-Variable.ttf",
      weight: "700",
    },
  ],
  variable: "--font-gotesk",
});

const satoshi = localfont({
  src: [
    {
      path: "../public/fonts/Satoshi-Variable.ttf",
    },
  ],
  variable: "--font-satoshi",
});

export const metadata = {
  title: "Oxygen Sqare",
  description: "breathing...",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${grotesk.variable} ${satoshi.variable}`}>
        <NavBar />
        <main className="">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
