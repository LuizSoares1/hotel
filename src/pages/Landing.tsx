import React from 'react'
import './style/landing.sass'
import { CiCalendar } from 'react-icons/ci'
import { IoIosArrowDown } from 'react-icons/io'
import { GoPeople, GoTag } from 'react-icons/go'

const Landing: React.FC = () => {
  return (
    <section className='landing-section'>
        <div className='landing-container'>
            <div className='landing-text-div'>
                <h1>O MELHOR HOTEL DA REGIÃO</h1>
                <h2>VENHA NOS VISITAR</h2>
            </div>
        </div>
        <div className="landing-form-container">
            <form className='landing-form'>
                <div className='landing-form-groups'>
                    <div className='landing-form-group-date'>
                        <CiCalendar />
                        <input type="text"  />
                        <IoIosArrowDown />
                    </div>
                    <div className='landing-form-group-date'>
                        <CiCalendar />
                        <input type="text"  />
                        <IoIosArrowDown />
                    </div>
                    <div className='landing-form-group-date'>
                        <GoPeople />
                        <input type="text"  />
                        <IoIosArrowDown />
                    </div>
                    <div className='landing-form-group-date'>
                        <GoTag />
                        <input type="text"  />
                        <IoIosArrowDown />
                    </div>
                </div>
                <div className='landing-form-group-btn'>
                    <button>Reservar</button>
                </div>
            </form>
        </div>
    </section>
  )
}

export default Landing