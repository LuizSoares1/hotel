import React, { useState, useRef, useEffect } from 'react'
import './style/landing.sass'
import { CiCalendar } from 'react-icons/ci'
import { IoIosArrowDown } from 'react-icons/io'
import { GoPeople, GoTag } from 'react-icons/go'
import CalendarReservaManual from '../components/CalendarReservaManual'
import GuestsDropdown from '../components/GuestsDropdown'

const Landing: React.FC = () => {
  const [showCalendar, setShowCalendar] = useState(false)
  const [isClosing, setIsClosing] = useState(false)
  const [activeInput, setActiveInput] = useState<'checkin' | 'checkout' | 'guests' | null>(null)

  const [checkIn, setCheckIn] = useState<Date | null>(null)
  const [checkOut, setCheckOut] = useState<Date | null>(null)

  const [adults, setAdults] = useState(0)
  const [children, setChildren] = useState(0)
  const [childrenAges, setChildrenAges] = useState<number[]>([])

  const calendarRef = useRef<HTMLDivElement>(null)
  const formRef = useRef<HTMLDivElement>(null)

  // Fecha com animação
  const closeCalendar = () => {
    setIsClosing(true)
    setTimeout(() => {
      setShowCalendar(false)
      setIsClosing(false)
      setActiveInput(null)
    }, 300)
  }

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        calendarRef.current &&
        !calendarRef.current.contains(event.target as Node) &&
        formRef.current &&
        !formRef.current.contains(event.target as Node)
      ) {
        closeCalendar()
      }
    }

    if (showCalendar) {
      document.addEventListener('mousedown', handleClickOutside)
    } else {
      document.removeEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [showCalendar])

  const handleDateSelect = (date: Date) => {
    if (activeInput === 'checkin') {
      setCheckIn(date)
      setActiveInput('checkout')
    } else if (activeInput === 'checkout') {
      setCheckOut(date)
      closeCalendar()
    }
  }

  const handleInputClick = (input: 'checkin' | 'checkout') => {
    if (activeInput === input && showCalendar) {
      closeCalendar()
    } else {
      setActiveInput(input)
      setShowCalendar(true)
    }
  }

  return (
    <section className='landing-section'>
      <div className='landing-container'>
        <div className='landing-text-div'>
          <h1>O MELHOR HOTEL DA REGIÃO</h1>
          <h2>TEMOS OS MELHORES PREÇOS DE SUITES</h2>
        </div>
      </div>

      <div className="landing-form-container" ref={formRef}>
        <form className='landing-form'>
          <div className='landing-form-groups'>
            <div
              className='landing-form-group-date'
              onClick={() => handleInputClick('checkin')}
            >
              <CiCalendar />
              <input
                type="text"
                value={checkIn ? checkIn.toLocaleDateString() : "Check-in"}
                readOnly
              />
              <IoIosArrowDown className={`arrow-icon ${showCalendar ? 'rotated' : ''}`} />
            </div>
            <div
              className='landing-form-group-date'
              onClick={() => handleInputClick('checkout')}
            >
              <CiCalendar />
              <input
                type="text"
                value={checkOut ? checkOut.toLocaleDateString() : "Check-out"}
                readOnly
              />
              <IoIosArrowDown className={`arrow-icon ${showCalendar ? 'rotated' : ''}`} />
            </div>
            <div
              className='landing-form-group-date'
              onClick={() => setActiveInput(activeInput === 'guests' ? null : 'guests')}
            >
              <GoPeople />
              <input
                type="text"
                value={
                  adults === 0 && children === 0
                    ? "Hóspedes"
                    : `${adults > 0 ? `${adults} Adulto${adults > 1 ? 's' : ''}` : ''}${children > 0 ? `${adults > 0 ? ', ' : ''}${children} Criança${children > 1 ? 's' : ''}` : ''
                    }`
                }
                readOnly
              />
              <IoIosArrowDown className={`arrow-icon ${activeInput === 'guests' ? 'rotated' : ''}`} />
            </div>
            <div className='landing-form-group-date'>
              <GoTag />
              <input type="text" placeholder="Código promocional" />
            </div>
          </div>

          <div className='landing-form-group-btn'>
            <button type="submit">Reservar</button>
          </div>
        </form>
        {showCalendar && (
          <div
            className={`calendar-wrapper ${isClosing ? 'closing' : 'opening'}`}
            ref={calendarRef}
          >
            <CalendarReservaManual
              onSelectDate={handleDateSelect}
              checkIn={checkIn}
              checkOut={checkOut}
            />
          </div>
        )}
        {activeInput === 'guests' && (
          <div className={`guests-wrapper ${isClosing ? 'closing' : 'opening'}`}>
            <GuestsDropdown
              adults={adults}
              children={children}
              childrenAges={childrenAges}
              setAdults={setAdults}
              setChildren={setChildren}
              setChildrenAges={setChildrenAges}
              onClose={() => setActiveInput(null)}
            />
          </div>
        )}
      </div>
    </section>
  )
}

export default Landing
