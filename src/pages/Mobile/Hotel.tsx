import React, { useEffect, useRef, useState } from 'react'
import './style/hotel.sass'

import {
    IoIosArrowBack,
    IoIosArrowForward
} from 'react-icons/io'

const images = [
    'academia.jpg',
    'frente.jpg',
    'praia.jpg',
    'quarto.jpg',
    'suite.jpg',
    'suite-master.jpg',
    'suite-trabalho.jpg'
]

const HotelMobile: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0)

    const touchStartX = useRef<number | null>(null)
    const touchEndX = useRef<number | null>(null)

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length)
    }

    const prevSlide = () => {
        setCurrentIndex(
            (prev) => (prev - 1 + images.length) % images.length
        )
    }

    useEffect(() => {
        const interval = setInterval(nextSlide, 10000)

        return () => clearInterval(interval)
    }, [])

    const handleTouchStart = (
        event: React.TouchEvent<HTMLDivElement>
    ) => {
        touchStartX.current = event.touches[0].clientX
    }

    const handleTouchMove = (
        event: React.TouchEvent<HTMLDivElement>
    ) => {
        touchEndX.current = event.touches[0].clientX
    }

    const handleTouchEnd = () => {
        if (
            touchStartX.current === null ||
            touchEndX.current === null
        ) {
            return
        }

        const distance =
            touchStartX.current - touchEndX.current

        const minimumSwipe = 50

        if (Math.abs(distance) >= minimumSwipe) {
            if (distance > 0) {
                nextSlide()
            } else {
                prevSlide()
            }
        }

        touchStartX.current = null
        touchEndX.current = null
    }

    return (
        <section className="hotel-mobile" id="hotel">

            <div className="hotel-mobile-container">

                <div className="hotel-mobile-header">

                    <span>
                        Sobre Nós
                    </span>

                    <h1>
                        Hotel
                    </h1>

                    <div className="hotel-mobile-bar" />

                    <p>
                        Lorem Ipsum is simply dummy text of the
                        printing and typesetting industry. Lorem
                        Ipsum has been the industry's standard dummy
                        text ever since the 1500s, when an unknown
                        printer took a galley of type and scrambled
                        it to make a type specimen book.
                    </p>

                </div>


                <div
                    className="hotel-mobile-slider"
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                >

                    {images.map((img, index) => (
                        <img
                            key={img}
                            src={`/${img}`}
                            alt={`Hotel - imagem ${index + 1}`}
                            className={`hotel-mobile-image ${index === currentIndex
                                    ? 'active'
                                    : ''
                                }`}
                            draggable="false"
                        />
                    ))}

                    <button
                        type="button"
                        className="hotel-mobile-btn prev"
                        onClick={prevSlide}
                        aria-label="Imagem anterior"
                    >
                        <IoIosArrowBack />
                    </button>

                    <button
                        type="button"
                        className="hotel-mobile-btn next"
                        onClick={nextSlide}
                        aria-label="Próxima imagem"
                    >
                        <IoIosArrowForward />
                    </button>

                </div>

            </div>

        </section>
    )
}

export default HotelMobile
