import { Geist, Geist_Mono, Inter, Open_Sans, Montserrat, Space_Grotesk } from "next/font/google";
import "./globals.css";
// import Link from "next/link";
import Header from "@/components/header/index";
import Footer from "@/components/footer/index";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"]
})

const open_sans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"]
})

const mont = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"]
})

const space = Space_Grotesk({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"]
})

export const metadata = {
  title: "Primeira aplicação nextjs",
  description: "Aprendendo ecossistema react",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${open_sans.variable} ${mont.variable} ${space.variable}`}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}