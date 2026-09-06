import React, { useEffect } from 'react'
import './styles/GuestsDropdownMobile.sass'
import { MdClose } from 'react-icons/md'

interface GuestsDropdownProps {
    adults: number
    children: number
    childrenAges: number[]
    setAdults: (value: number) => void
    setChildren: (value: number) => void
    setChildrenAges: (value: number[]) => void
    onClose: () => void
    closing?: boolean
}

const GuestsDropdownMobile: React.FC<GuestsDropdownProps> = ({
    adults,
    children,
    childrenAges,
    setAdults,
    setChildren,
    setChildrenAges,
    onClose,
    closing
}) => {

    useEffect(() => {
        document.body.style.overflow = 'hidden'

        return () => {
            document.body.style.overflow = ''
        }
    }, [])

    const handleAdultsChange = (value: number) => {
        const newValue = Math.max(0, value)

        setAdults(newValue)

        if (newValue === 0) {
            setChildren(0)
            setChildrenAges([])
        }
    }

    const handleChildrenChange = (value: number) => {
        if (adults > 0) {
            const newValue = Math.max(0, value)

            setChildren(newValue)

            if (newValue < children) {
                setChildrenAges(
                    childrenAges.slice(0, newValue)
                )
            }
        }
    }

    return (
        <div className={`guests-modal ${closing ? 'closing' : ''}`}>
            <div
                className="guests-modal-content"
                onClick={(event) => event.stopPropagation()}
            >

                <button
                    type="button"
                    className="guests-close"
                    onClick={onClose}
                    aria-label="Fechar"
                >
                    <MdClose />
                </button>

                <div className="guests-header">
                    <span>Hóspedes</span>
                    <strong>
                        Quantas pessoas irão se hospedar?
                    </strong>
                </div>

                <div className="guest-row-mobile">
                    <div className="guest-info">
                        <strong>Adultos</strong>
                        <span>12 anos ou mais</span>
                    </div>

                    <div className="counter-mobile">
                        <button
                            type="button"
                            onClick={() =>
                                handleAdultsChange(adults - 1)
                            }
                        >
                            -
                        </button>

                        <span>{adults}</span>

                        <button
                            type="button"
                            onClick={() =>
                                handleAdultsChange(adults + 1)
                            }
                        >
                            +
                        </button>
                    </div>
                </div>

                <div className="guest-row-mobile">
                    <div className="guest-info">
                        <strong>Crianças</strong>
                        <span>1 a 11 anos</span>
                    </div>

                    <div className="counter-mobile">
                        <button
                            type="button"
                            onClick={() =>
                                handleChildrenChange(children - 1)
                            }
                        >
                            -
                        </button>

                        <span>{children}</span>

                        <button
                            type="button"
                            onClick={() =>
                                handleChildrenChange(children + 1)
                            }
                            disabled={adults === 0}
                        >
                            +
                        </button>
                    </div>
                </div>

                {children > 0 && (
                    <div className="child-age-group-mobile">
                        <strong>
                            Idade das crianças
                        </strong>

                        <div className="child-age-selects-mobile">
                            {Array.from({
                                length: children
                            }).map((_, index) => (
                                <select
                                    key={index}
                                    value={
                                        childrenAges[index] || 1
                                    }
                                    onChange={(event) => {
                                        const ages = [
                                            ...childrenAges
                                        ]

                                        ages[index] = Number(
                                            event.target.value
                                        )

                                        setChildrenAges(ages)
                                    }}
                                >
                                    {Array.from({
                                        length: 17
                                    }).map((_, age) => {
                                        const realAge = age + 1

                                        return (
                                            <option
                                                key={realAge}
                                                value={realAge}
                                            >
                                                {realAge} anos
                                            </option>
                                        )
                                    })}
                                </select>
                            ))}
                        </div>
                    </div>
                )}

                <button
                    type="button"
                    className="apply-btn-mobile"
                    onClick={onClose}
                >
                    Aplicar
                </button>

            </div>
        </div>
    )
}

export default GuestsDropdownMobile