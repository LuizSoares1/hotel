import React from 'react'
import './style/services.sass'
import { TbAirConditioning, TbIroning2 } from 'react-icons/tb'
import { TfiCar } from 'react-icons/tfi'
import { FaWifi, FaUniversalAccess, FaTv } from 'react-icons/fa'
import { LuRefrigerator } from 'react-icons/lu'
import { PiHairDryer } from 'react-icons/pi'
import { MdOutlineLocalLaundryService, MdBalcony, MdOutlineElevator } from 'react-icons/md'
import { Ri24HoursFill } from 'react-icons/ri'


const services = [
    {
        icon: <TbAirConditioning />,
        nameService: "Ar Condicionado"
    },
    {
        icon: <TfiCar />,
        nameService: "Estacionamento"
    },
    {
        icon: <FaWifi />,
        nameService: "Wi-Fi Grátis"
    },
    {
        icon: <FaUniversalAccess />,
        nameService: "Acessibilidade"
    },
    {
        icon: <FaTv />,
        nameService: "TV Led"
    },
    {
        icon: <LuRefrigerator />,
        nameService: "Frigobar"
    },
    {
        icon: <PiHairDryer />,
        nameService: "Secador de Cabelo"
    },
    {
        icon: <MdOutlineLocalLaundryService />,
        nameService: "Lavanderia"
    },
    {
        icon: <Ri24HoursFill />,
        nameService: "Recepção 24 Horas"
    },
    {
        icon: <MdBalcony />,
        nameService: "Varanda"
    },
    {
        icon: <TbIroning2 />,
        nameService: "Ferro de Passar"
    },
    {
        icon: <MdOutlineElevator />,
        nameService: "Elevador"
    },
] 

const Servicos: React.FC = () => {
    return (
        <section className='services-section'>
            <div className='services-container'>
                <div className='services-sobre'>
                    <div className='services-text-span'>
                        <span>COMODIDADES</span>
                    </div>
                    <div className='services-text-tittle'>
                        <div className="services-text-tittle-h1">
                            <h1>Nossos Serviços</h1>
                        </div>
                        <div className='services-text-tittle-bar'>
                            <div className='bar'></div>
                        </div>
                    </div>
                </div>
                <div className="services-container-grid">
                    <div className="services-grid">
                        {services.map((service) => (
                        <div className='services-items'>
                            {service.icon}
                            <span>{service.nameService}</span>
                        </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Servicos