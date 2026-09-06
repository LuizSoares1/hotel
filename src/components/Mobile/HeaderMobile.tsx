import React, { useState } from 'react'
import './styles/HeaderMobile.sass'

const HeaderMobile: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <header className="header-mobile">
      <div className="header-mobile-container">
        <h1 className="hotel-logo">
          HOTEL
        </h1>

        <button
          className={`menu-button ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div
        className={`mobile-menu-overlay ${menuOpen ? 'open' : ''}`}
        onClick={closeMenu}
      />

      <nav className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <ul>
          <li>
            <a href="#hotel" onClick={closeMenu}>
              Hotel
            </a>
          </li>

          <li>
            <a href="#acomodacoes" onClick={closeMenu}>
              Acomodações
            </a>
          </li>

          <li>
            <a href="#experiencias" onClick={closeMenu}>
              Café da Manhã
            </a>
          </li>

          <li>
            <a href="#experiencias" onClick={closeMenu}>
              Pet Friendly
            </a>
          </li>

          <li>
            <a href="#contato" onClick={closeMenu}>
              Fale Conosco
            </a>
          </li>
        </ul>

        <div className="mobile-menu-reservation">
          <a href="#reserva" onClick={closeMenu}>
            Reserva Já
          </a>
        </div>
      </nav>
    </header>
  )
}

export default HeaderMobile