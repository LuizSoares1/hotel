import React from 'react'
import './styles/header.sass'

const Header: React.FC = () => {
  return (
    <header className='header-component'>
        <div className='header-container'>
            <div className='hotel-logo'>
                <h1>Hotel</h1>
            </div>
            <nav className='hotel-navigation'>
                <ul className='hotel-navigation-list'>
                    <li className='hotel-navigation-list-li'>
                        <a href="#">O Hotel</a>
                    </li>
                    <li className='hotel-navigation-list-li'>
                        <a href="#">Acomodações</a>
                    </li>
                    <li className='hotel-navigation-list-li'>
                        <a href="#">Serviços</a>
                    </li>
                    <li className='hotel-navigation-list-li'>
                        <a href="#">Café da Manhã</a>
                    </li>
                    <li className='hotel-navigation-list-li'>
                        <a href="#">Galeria</a>
                    </li>
                    <li className='hotel-navigation-list-li'>
                        <a href="#">Fale Conosco</a>
                    </li>
                </ul>
            </nav>
            <div className='hotel-link'>
                <a href="#">Reserve-Já</a>
            </div>
        </div>
    </header>
  )
}

export default Header