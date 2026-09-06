import React, { useState } from 'react'
import './style/landingMobile.sass'

import { CiCalendar } from 'react-icons/ci'
import { IoIosArrowDown } from 'react-icons/io'
import { GoPeople, GoTag } from 'react-icons/go'

import CalendarReservaManualMobile from '../../components/Mobile/CalendarReservaManualMobile'
import GuestsDropdownMobile from '../../components/Mobile/GuestsDropdownMobile'

const LandingMobile: React.FC = () => {
    const [showCalendar, setShowCalendar] = useState(false)

    const [activeInput, setActiveInput] = useState<
        'checkin' | 'checkout' | 'guests' | null
    >(null)

    const [closingPopup, setClosingPopup] = useState(false)

    const [checkIn, setCheckIn] = useState<Date | null>(null)
    const [checkOut, setCheckOut] = useState<Date | null>(null)

    const [adults, setAdults] = useState(0)
    const [children, setChildren] = useState(0)
    const [childrenAges, setChildrenAges] = useState<number[]>([])

    // ==========================================
    // FECHAR POPUP COM ANIMAÇÃO
    // ==========================================

    const closePopup = () => {
        // Evita executar o fechamento várias vezes
        if (closingPopup) return

        setClosingPopup(true)

        setTimeout(() => {
            setClosingPopup(false)
            setShowCalendar(false)
            setActiveInput(null)
        }, 300)
    }

    // ==========================================
    // SELECIONAR DATA
    // ==========================================

    const SelecionarData = (date: Date) => {
        if (activeInput === 'checkin') {
            setCheckIn(date)

            // Depois de selecionar o check-in,
            // automaticamente passa para o check-out
            setActiveInput('checkout')
        } else if (activeInput === 'checkout') {
            setCheckOut(date)

            // Fecha com animação
            closePopup()
        }
    }

    // ==========================================
    // ABRIR CALENDÁRIO
    // ==========================================

    const ClicarData = (
        input: 'checkin' | 'checkout'
    ) => {
        // Se já estiver fechando, não permite abrir
        if (closingPopup) return

        setClosingPopup(false)
        setActiveInput(input)
        setShowCalendar(true)
    }

    // ==========================================
    // ABRIR / FECHAR HÓSPEDES
    // ==========================================

    const CliqueHospedes = () => {
        if (closingPopup) return

        // Se o popup de hóspedes já estiver aberto,
        // fecha com animação
        if (activeInput === 'guests') {
            closePopup()
            return
        }

        // Garante que o calendário não fique aberto
        setShowCalendar(false)

        setClosingPopup(false)
        setActiveInput('guests')
    }

    return (
        <section className="landing-mobile">

            <div className="landing-mobile-content">

                <div className="landing-mobile-text">
                    <h1>O MELHOR HOTEL DA REGIÃO</h1>

                    <h2>
                        TEMOS OS MELHORES PREÇOS DE SUITES
                    </h2>
                </div>

                <div className="landing-mobile-form">

                    {/* ======================================
                        CHECK-IN
                    ====================================== */}

                    <button
                        type="button"
                        className="mobile-form-field"
                        onClick={() =>
                            ClicarData('checkin')
                        }
                    >
                        <div className="mobile-form-field-content">

                            <CiCalendar />

                            <div>
                                <span>
                                    Check-in
                                </span>

                                <strong>
                                    {checkIn
                                        ? checkIn.toLocaleDateString(
                                            'pt-BR'
                                        )
                                        : 'Selecione a data'}
                                </strong>
                            </div>

                        </div>

                        <IoIosArrowDown
                            className={
                                activeInput === 'checkin'
                                    ? 'rotated'
                                    : ''
                            }
                        />
                    </button>


                    {/* ======================================
                        CHECK-OUT
                    ====================================== */}

                    <button
                        type="button"
                        className="mobile-form-field"
                        onClick={() =>
                            ClicarData('checkout')
                        }
                    >
                        <div className="mobile-form-field-content">

                            <CiCalendar />

                            <div>
                                <span>
                                    Check-out
                                </span>

                                <strong>
                                    {checkOut
                                        ? checkOut.toLocaleDateString(
                                            'pt-BR'
                                        )
                                        : 'Selecione a data'}
                                </strong>
                            </div>

                        </div>

                        <IoIosArrowDown
                            className={
                                activeInput === 'checkout'
                                    ? 'rotated'
                                    : ''
                            }
                        />

                    </button>


                    {/* ======================================
                        HÓSPEDES
                    ====================================== */}

                    <button
                        type="button"
                        className="mobile-form-field"
                        onClick={CliqueHospedes}
                    >
                        <div className="mobile-form-field-content">

                            <GoPeople />

                            <div>
                                <span>
                                    Hóspedes
                                </span>

                                <strong>
                                    {adults === 0 &&
                                    children === 0
                                        ? 'Selecione os hóspedes'
                                        : `${adults} adulto${adults !== 1
                                            ? 's'
                                            : ''
                                        }${
                                            children > 0
                                                ? `, ${children} criança${
                                                    children !== 1
                                                        ? 's'
                                                        : ''
                                                }`
                                                : ''
                                        }`}
                                </strong>
                            </div>

                        </div>

                        <IoIosArrowDown
                            className={
                                activeInput === 'guests'
                                    ? 'rotated'
                                    : ''
                            }
                        />

                    </button>


                    {/* ======================================
                        CÓDIGO PROMOCIONAL
                    ====================================== */}

                    <div className="mobile-form-field">

                        <div className="mobile-form-field-content">

                            <GoTag />

                            <div>
                                <span>
                                    Código promocional
                                </span>

                                <input
                                    type="text"
                                    placeholder="Digite seu código"
                                />
                            </div>

                        </div>

                    </div>


                    {/* ======================================
                        RESERVAR
                    ====================================== */}

                    <button
                        type="button"
                        className="mobile-reserve-button"
                    >
                        Reservar
                    </button>

                </div>


                {/* ==========================================
                    CALENDÁRIO POPUP
                ========================================== */}

                {showCalendar && (
                    <CalendarReservaManualMobile
                        onSelectDate={SelecionarData}
                        checkIn={checkIn}
                        checkOut={checkOut}
                        onClose={closePopup}
                        closing={closingPopup}
                    />
                )}


                {/* ==========================================
                    HÓSPEDES POPUP
                ========================================== */}

                {activeInput === 'guests' && (
                    <GuestsDropdownMobile
                        adults={adults}
                        children={children}
                        childrenAges={childrenAges}
                        setAdults={setAdults}
                        setChildren={setChildren}
                        setChildrenAges={setChildrenAges}
                        onClose={closePopup}
                        closing={closingPopup}
                    />
                )}

            </div>

        </section>
    )
}

export default LandingMobile