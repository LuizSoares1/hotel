import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper/modules'
import './style/accomodations.sass'
import 'swiper/swiper.css'
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

const Acomodacoes: React.FC = () => {
    const [slidesPerView, setSlidesPerView] = useState(3)
    const [spaceBetween, setSpaceBetween] = useState(0)

useEffect(() => {
  const handleResize = () => {
    const width = window.innerWidth
    if (width < 640) {
      setSlidesPerView(1)
      setSpaceBetween(10)
    } else if (width < 768) {
      setSlidesPerView(1)
      setSpaceBetween(15)
    } else if (width < 1024) {
      setSlidesPerView(2)
      setSpaceBetween(20)
    } else {
      setSlidesPerView(3)
      setSpaceBetween(0)
    }
  }

  handleResize()
  window.addEventListener('resize', handleResize)
  return () => window.removeEventListener('resize', handleResize)
}, [])

    return (
        <section className='accommodations-section'>
            <div className='accommodations-container'>
                <div className='accommodations-texts'>
                    <div className='accommodations-tittles'>
                        <div className='accommodations-span'>
                            <span>ACOMODAÇÕES</span>
                        </div>
                        <div className='accommodations-h1'>
                            <h1>Apartamentos e Suítes</h1>
                        </div>
                        <div className='accommodations-bar'>
                            <div className='bar'></div>
                        </div>
                    </div>
                    <div className='accommodations-text'>
                        <div className='accommodations-paragraph'>
                            <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</span>
                        </div>
                    </div>
                </div>
                
                <Swiper
                    className="accommodations-slider"
                    modules={[Pagination, Navigation]}
                    slidesPerView={slidesPerView}
                    spaceBetween={spaceBetween}
                    pagination={{ clickable: true }}
                    navigation={true}
                    loop={true}
                >
                    {rooms.map((room, index) => (
                        <SwiperSlide key={index}>
                            <div className="accommodation-card">
                                <div className="accommodation-card-img">
                                    <img src={room.img} alt={room.title} />
                                </div>
                                <h2>{room.title}</h2>
                                <p>{room.desc}</p>
                                <button>SAIBA MAIS</button>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}

export default Acomodacoes