import React, { useState, useEffect } from 'react'
import './style/hotel.sass'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

const images = [
    'academia.jpg',
    'frente.jpg',
    'praia.jpg',
    'quarto.jpg',
    'suite.jpg',
    'suite-master.jpg',
    'suite-trabalho.jpg'
]

const Hotel: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0)

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length)
    }

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
    }

    useEffect(() => {
        const interval = setInterval(nextSlide, 10000)
        return () => clearInterval(interval)
    }, [])

    return (
        <section className='hotel-section'>
            <div className="hotel-container">
                <div className='hotel-sobre'>
                    <div className='hotel-text-span'>
                        <span>Sobre Nós</span>
                    </div>
                    <div className='hotel-text-tittle'>
                        <div className="hotel-text-tittle-h1">
                            <h1>Hotel</h1>
                        </div>
                        <div className='hotel-text-tittle-bar'>
                            <div className='bar'></div>
                        </div>
                    </div>
                    <div className='hotel-text-p'>
                        <span>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        </span>
                    </div>
                </div>
                <div className="hotel-slider">
                    <div className="slider-wrapper">
                        {images.map((img, index) => (
                            <img
                                key={img}
                                src={`/${img}`}
                                alt={`Slide ${index + 1}`}
                                className={`slider-image ${index === currentIndex ? 'active' : ''}`}
                                draggable="false"
                            />
                        ))}
                        <button className="slider-btn prev" onClick={prevSlide}>
                            <IoIosArrowBack className='slider-btn-icon' />
                        </button>
                        <button className="slider-btn next" onClick={nextSlide}>
                            <IoIosArrowForward className='slider-btn-icon' />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hotel