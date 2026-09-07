import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper/modules'

import './style/accomodations-mobile.sass'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'


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


const AcomodacoesMobile: React.FC = () => {

    return (
        <section
            className="accommodations-section-mobile"
            id="acomodacoes"
        >

            <div className="accommodations-container-mobile">

                {/* =====================================================
                    TÍTULOS E DESCRIÇÃO
                   ===================================================== */}

                <div className="accommodations-texts-mobile">

                    <div className="accommodations-tittles-mobile">

                        <div className="accommodations-span-mobile">
                            <span>ACOMODAÇÕES</span>
                        </div>

                        <div className="accommodations-h1-mobile">
                            <h1>Apartamentos e Suítes</h1>
                        </div>

                        <div className="accommodations-bar-mobile">
                            <div className="bar-mobile"></div>
                        </div>

                    </div>


                    <div className="accommodations-text-mobile">

                        <div className="accommodations-paragraph-mobile">

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

                <div className="accommodations-slider-wrapper-mobile">

                    <Swiper
                        className="accommodations-slider-mobile"

                        modules={[
                            Pagination,
                            Navigation
                        ]}

                        slidesPerView={1.08}

                        centeredSlides={true}

                        spaceBetween={16}

                        breakpoints={{
                            700: {
                                slidesPerView: 2,
                                centeredSlides: false,
                                spaceBetween: 20,
                                slidesOffsetBefore: 24,
                                slidesOffsetAfter: 24
                            },
                            1024: {
                                slidesPerView: 3,
                                centeredSlides: false,
                                spaceBetween: 24,
                                slidesOffsetBefore: 16,
                                slidesOffsetAfter: 16
                            }
                        }}

                        pagination={{
                            clickable: true
                        }}

                        navigation={{
                            prevEl: '.accommodations-prev-mobile',
                            nextEl: '.accommodations-next-mobile'
                        }}

                        loop={true}
                    >

                        {rooms.map((room, index) => (

                            <SwiperSlide key={index}>

                                <article className="accommodation-card-mobile">

                                    {/* =================================================
                                        IMAGEM
                                       ================================================= */}

                                    <div className="accommodation-card-img-mobile">

                                        <img
                                            src={room.img}
                                            alt={room.title}
                                        />

                                        <div className="accommodation-card-overlay-mobile"></div>

                                    </div>


                                    {/* =================================================
                                        CONTEÚDO
                                       ================================================= */}

                                    <div className="accommodation-card-content-mobile">
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
                                            className="accommodation-card-button-mobile"
                                            type="button"
                                        >

                                            <span>
                                                SAIBA MAIS
                                            </span>

                                            <span className="button-arrow-mobile">
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
                        className="accommodations-prev-mobile"
                        type="button"
                        aria-label="Apartamento anterior"
                    >
                        <span>‹</span>
                    </button>


                    {/* =====================================================
                        ARROW DIREITA
                       ===================================================== */}

                    <button
                        className="accommodations-next-mobile"
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


export default AcomodacoesMobile
