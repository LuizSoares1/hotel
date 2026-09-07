import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'

import './style/accomodations.sass'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'


const rooms = [
    {
        img: '/suite-master.jpg',
        title: 'Suíte Master',
        desc: 'Apartamento com uma cama de casal, TV LED 32”, Wi-Fi, frigobar e ar-condicionado.'
    },

    {
        img: '/suite-trabalho.jpg',
        title: 'Quarto Duplo',
        desc: 'Apartamento com 2 camas de solteiro, TV e Wi-Fi.'
    },

    {
        img: '/suite.jpg',
        title: 'Quarto Quádruplo',
        desc: 'Apartamento com uma cama de casal e duas de solteiro ou quatro camas de solteiro, TV e Wi-Fi.'
    },

    {
        img: '/suite-master.jpg',
        title: 'Suíte Master',
        desc: 'Apartamento com uma cama de casal, TV LED 32”, Wi-Fi, frigobar e ar-condicionado.'
    },

    {
        img: '/suite-trabalho.jpg',
        title: 'Quarto Duplo',
        desc: 'Apartamento com 2 camas de solteiro, TV e Wi-Fi.'
    },

    {
        img: '/suite.jpg',
        title: 'Quarto Quádruplo',
        desc: 'Apartamento com uma cama de casal e duas de solteiro ou quatro camas de solteiro, TV e Wi-Fi.'
    },
]


const Acomodacoes: React.FC = () => {

    return (
        <section
            className="accommodations-section"
            id="acomodacoes"
        >

            <div className="accommodations-container">

                {/* =====================================================
                    TÍTULOS E DESCRIÇÃO
                   ===================================================== */}

                <div className="accommodations-texts">

                    <div className="accommodations-tittles">

                        <div className="accommodations-span">
                            <span>ACOMODAÇÕES</span>
                        </div>

                        <div className="accommodations-h1">
                            <h1>Apartamentos e Suítes</h1>
                        </div>

                        <div className="accommodations-bar">
                            <div className="bar"></div>
                        </div>

                    </div>


                    <div className="accommodations-text">

                        <div className="accommodations-paragraph">

                            <span>
                                Lorem Ipsum is simply dummy text of the printing and
                                typesetting industry. Lorem Ipsum has been the industry's
                                standard dummy text ever since the 1500s, when an unknown
                                printer took a galley of type and scrambled it to make a
                                type specimen book.
                            </span>

                        </div>

                    </div>

                </div>


                {/* =====================================================
                    WRAPPER DO SLIDER
                   ===================================================== */}

                <div className="accommodations-slider-wrapper">

                    <Swiper
                        className="accommodations-slider"

                        modules={[
                            Navigation
                        ]}

                        slidesPerView={3}

                        spaceBetween={28}

                        pagination={{
                            clickable: true
                        }}

                        navigation={{
                            prevEl: '.accommodations-prev',
                            nextEl: '.accommodations-next'
                        }}

                        loop={true}
                    >

                        {rooms.map((room, index) => (

                            <SwiperSlide key={index}>

                                <article className="accommodation-card">

                                    {/* =================================================
                                        IMAGEM
                                       ================================================= */}

                                    <div className="accommodation-card-img">

                                        <img
                                            src={room.img}
                                            alt={room.title}
                                        />

                                        <div className="accommodation-card-overlay"></div>

                                    </div>


                                    {/* =================================================
                                        CONTEÚDO
                                       ================================================= */}

                                    <div className="accommodation-card-content">
                                        <h2>
                                            {room.title}
                                        </h2>
                                        <p>
                                            {room.desc}
                                        </p>
                                        {/* =================================================
                                            BOTÃO
                                           ================================================= */}
                                        <button
                                            className="accommodation-card-button"
                                            type="button"
                                        >

                                            <span>
                                                SAIBA MAIS
                                            </span>

                                            <span className="button-arrow">
                                                →
                                            </span>

                                        </button>

                                    </div>

                                </article>

                            </SwiperSlide>

                        ))}

                    </Swiper>


                    {/* =====================================================
                        ARROW ESQUERDA
                       ===================================================== */}

                    <button
                        className="accommodations-prev"
                        type="button"
                        aria-label="Apartamento anterior"
                    >
                        <span>‹</span>
                    </button>


                    {/* =====================================================
                        ARROW DIREITA
                       ===================================================== */}

                    <button
                        className="accommodations-next"
                        type="button"
                        aria-label="Próximo apartamento"
                    >
                        <span>›</span>
                    </button>

                </div>

            </div>

        </section>
    )
}


export default Acomodacoes