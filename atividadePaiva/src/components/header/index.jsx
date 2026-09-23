'use client'
import "./header.css";
import Link from "next/link"

export default function Header() {
  return (
    <header>
      <div className="lado-e">
        <ul>
          <img src="/img/logo.png" alt="" className="img" />
          <div className="dad">
            <li><Link href={"/"}>Home</Link></li>
          </div>
          <div className="dad">
            <li><Link href={"/sobre"}>Sobre</Link></li>
          </div>
          <div className="dad">
            <li><Link href={"/blog"}>Blog</Link></li>
          </div>
          <div className="dad">
            <li><Link href={"/ordens"}>Ordens</Link></li>
          </div>
          <div className="dad">
            <div className="dropdown">
              <li><Link href={"/sobre/empresa"}>Sobre Empresa</Link></li>
              <div className="dropdown-menu">
                <ul>
                  <li className="li-drop"><Link href={"/daniel"}>Silk</Link></li>
                  <li className="li-drop"><Link href={"/"}>Funcionou</Link></li>
                  <li className="li-drop"><Link href={"/"}>Funcionou</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </ul>
      </div>
      <div className="lado-d">
        <div className="svg">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-search-icon lucide-search"><path d="m21 21-4.34-4.34" /><circle cx="11" cy="11" r="8" /></svg>
        </div>
        <div className="btn bb">Log in</div>
        <div className="btn bbb">Start My Free Trial</div>
      </div>
    </header>
  )
}