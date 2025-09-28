import React from 'react'
import './styles/GuestsDropdown.sass'

interface GuestsDropdownProps {
    adults: number
    children: number
    childrenAges: number[]
    setAdults: (value: number) => void
    setChildren: (value: number) => void
    setChildrenAges: (value: number[]) => void
    onClose: () => void
}

const GuestsDropdown: React.FC<GuestsDropdownProps> = ({
    adults,
    children,
    childrenAges,
    setAdults,
    setChildren,
    setChildrenAges,
    onClose
}) => {
    const handleAdultsChange = (newValue: number) => {
        setAdults(Math.max(0, newValue))
        if (newValue === 0) {
            setChildren(0)
            setChildrenAges([])
        }
    }

    const handleChildrenChange = (newValue: number) => {
        if (adults > 0) {
            setChildren(Math.max(0, newValue))
        }
    }

    return (
        <div className="guests-dropdown" onClick={(e) => e.stopPropagation()}>
            <div className="guest-row">
                <span>Adultos</span>
                <div className="counter">
                    <button onClick={() => handleAdultsChange(adults - 1)}>-</button>
                    <span>{adults}</span>
                    <button onClick={() => handleAdultsChange(adults + 1)}>+</button>
                </div>
            </div>

            <div className="guest-row">
                <span>Crianças</span>
                <div className="counter">
                    <button onClick={() => handleChildrenChange(children - 1)}>-</button>
                    <span>{children}</span>
                    <button
                        onClick={() => handleChildrenChange(children + 1)}
                        disabled={adults === 0} // desabilita se não houver adulto
                    >
                        +
                    </button>
                </div>
            </div>

            {Array.from({ length: children }).map((_, i) => (
                <div className="child-age" key={i}>
                    <label>Criança {i + 1}</label>
                    <select
                        value={childrenAges[i] || 1}
                        onChange={(e) => {
                            const newAges = [...childrenAges]
                            newAges[i] = parseInt(e.target.value)
                            setChildrenAges(newAges)
                        }}
                    >
                        {Array.from({ length: 17 }).map((_, age) => {
                            const realAge = age + 1 // começa em 1
                            return (
                                <option key={realAge} value={realAge}>
                                    {realAge} anos
                                </option>
                            )
                        })}
                    </select>
                </div>
            ))}

            <button className="apply-btn" onClick={onClose}>
                Aplicar
            </button>
        </div>
    )
}

export default GuestsDropdown
