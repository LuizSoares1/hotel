import React from 'react'
import './style/servicesMobile.sass'
import { TbAirConditioning, TbIroning2 } from 'react-icons/tb'
import { TfiCar } from 'react-icons/tfi'
import { FaWifi, FaUniversalAccess, FaTv } from 'react-icons/fa'
import { LuRefrigerator } from 'react-icons/lu'
import { PiHairDryer } from 'react-icons/pi'
import { MdOutlineLocalLaundryService, MdBalcony, MdOutlineElevator } from 'react-icons/md'
import { Ri24HoursFill } from 'react-icons/ri'

const services = [
    { icon: <TbAirConditioning />, nameService: "Ar Condicionado" },
    { icon: <TfiCar />, nameService: "Estacionamento" },
    { icon: <FaWifi />, nameService: "Wi-Fi Grátis" },
    { icon: <FaUniversalAccess />, nameService: "Acessibilidade" },
    { icon: <FaTv />, nameService: "TV Led" },
    { icon: <LuRefrigerator />, nameService: "Frigobar" },
    { icon: <PiHairDryer />, nameService: "Secador de Cabelo" },
    { icon: <MdOutlineLocalLaundryService />, nameService: "Lavanderia" },
    { icon: <Ri24HoursFill />, nameService: "Recepção 24 Horas" },
    { icon: <MdBalcony />, nameService: "Varanda" },
    { icon: <TbIroning2 />, nameService: "Ferro de Passar" },
    { icon: <MdOutlineElevator />, nameService: "Elevador" },
]

const ServicosMobile: React.FC = () => {
    return (
        <section className='services-mobile-section' id='servicos'>
            <div className='services-mobile-container'>
                <div className='services-mobile-sobre'>
                    <div className='services-mobile-text-span'>
                        <span>COMODIDADES</span>
                    </div>
                    <div className='services-mobile-text-tittle'>
                        <h2>Nossos Serviços</h2>
                        <div className='services-mobile-bar'></div>
                    </div>
                </div>

                <div className='services-mobile-grid'>
                    {services.map((service, index) => (
                        <div className='services-mobile-items' key={index}>
                            <div className='services-mobile-icon'>
                                {service.icon}
                            </div>
                            <span>{service.nameService}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ServicosMobile