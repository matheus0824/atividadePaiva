import "./footer.css";

export default function Header() {
  return (
    <footer>
      <div className="body-footer">
        <div className="head-footer">
          <div className="section">
            <img src="/img/logo.png" className="img-footer" />
          </div>
          <div className="section-2">
            <ul>
              <li><strong>Navegação</strong></li>
              <li>Home</li>
              <li>Últimas Notícias</li>
              <li>Populares</li>
            </ul>
          </div>
          <div className="section-2">
            <ul>
              <li><strong>Categorias</strong></li>
              <li>Hardware</li>
              <li>Monitores</li>
              <li>Periféricos</li>
            </ul>
          </div>
          <div className="section-2">
            <ul>
              <li><strong>Comunidade</strong></li>
              <li>Discord</li>
              <li>Fórum</li>
              <li>Newsletter</li>
            </ul>
          </div>
          <div className="section-2">
            <ul>
              <li><strong>Legal</strong></li>
              <li>Sobre</li>
              <li>Contato</li>
              <li>Privacidade</li>
            </ul>
          </div>
        </div>
        <div className="row-footer"></div>
        <div className="footer-bottom">
          <span><i>© 2026 BYTEHAUS Tech Portal. All rights reserved.</i></span>
        </div>
      </div>
    </footer>
  )
}
