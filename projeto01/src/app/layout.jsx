import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Primeira aplicação Next.jS",
  description: "Aprendendo ecossistema React!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <header>
        <div className="nav-box">
          
          <nav>

            <div>
              <img className="logo" src="/imagens/Unbounce_Logo.png" alt="logo" />
            </div>

              <ul>
              <li><Link href={'/product'}>Product</Link></li>
              <li><Link href={'/soluction'}>Soluction</Link></li>
              <li><Link href={'/'}>Priking</Link></li>
              <li><Link href={'/'}>Learn</Link></li>
              <li><Link href={'/contact'}>Contact</Link></li>  
            </ul>

            <div className="nav02">
              <img src="\imagens\busca.png" alt="" />
              <Link href={'/login'}>Log in</Link>
              
            </div>
            <div>
              
            </div>
            <Link href={'/'}>Star My free Trial</Link>
            
        </nav>
        </div>
        
      </header>
        
        {children}

        <footer>
          <h3>Redes</h3>
          <ul>
            <li><Link href={'/'}></Link>Instagram</li>
            <li><Link href={'/'}></Link>Facebook</li>
          </ul>
        </footer>
        
        </body>
    </html>
  );
}
