import React, { useEffect, useState } from 'react'
import './styles/header.sass'

const Header: React.FC = () => {
    const [scrolled, setScrolled] = useState(false)
    const [activeSection, setActiveSection] = useState('')

    useEffect(() => {
    const sections = [
        'hotel',
        'acomodacoes',
        'servicos',
        'cafe-da-manha',
        'pet-friendly',
        'fale-conosco'
    ]

    const scrolledColorActive = () => {
        const scrollPosition = window.scrollY

        setScrolled(scrollPosition > 10)

        let currentSection = ''

        sections.forEach((id) => {
            const section = document.getElementById(id)

            if (!section) return

            const sectionTop = section.offsetTop

            if (scrollPosition >= sectionTop - 150) {
                currentSection = id
            }
        })

        setActiveSection(currentSection)
    }

    window.addEventListener('scroll', scrolledColorActive)

    scrolledColorActive()

    return () => {
        window.removeEventListener('scroll', scrolledColorActive)
    }
}, [])

    return (
        <header className='header-component'>
            <div
                className={`header-container ${
                    scrolled ? 'scrolled' : ''
                }`}
            >
                <div className='hotel-logo'>
                    <h1>Hotel</h1>
                </div>

                <nav className='hotel-navigation'>
                    <ul className='hotel-navigation-list'>

                        <li className='hotel-navigation-list-li'>
                            <a
                                href="#hotel"
                                className={
                                    activeSection === 'hotel'
                                        ? 'active'
                                        : ''
                                }
                            >
                                O Hotel
                            </a>
                        </li>

                        <li className='hotel-navigation-list-li'>
                            <a
                                href="#acomodacoes"
                                className={
                                    activeSection === 'acomodacoes'
                                        ? 'active'
                                        : ''
                                }
                            >
                                Acomodações
                            </a>
                        </li>

                        <li className='hotel-navigation-list-li'>
                            <a
                                href="#servicos"
                                className={
                                    activeSection === 'servicos'
                                        ? 'active'
                                        : ''
                                }
                            >
                                Serviços
                            </a>
                        </li>

                        <li className='hotel-navigation-list-li'>
                            <a
                                href="#cafe-da-manha"
                                className={
                                    activeSection === 'cafe-da-manha'
                                        ? 'active'
                                        : ''
                                }
                            >
                                Café da Manhã
                            </a>
                        </li>

                        <li className='hotel-navigation-list-li'>
                            <a
                                href="#pet-friendly"
                                className={
                                    activeSection === 'pet-friendly'
                                        ? 'active'
                                        : ''
                                }
                            >
                                Pet Friendly
                            </a>
                        </li>

                        <li className='hotel-navigation-list-li'>
                            <a
                                href="#fale-conosco"
                                className={
                                    activeSection === 'fale-conosco'
                                        ? 'active'
                                        : ''
                                }
                            >
                                Fale Conosco
                            </a>
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
