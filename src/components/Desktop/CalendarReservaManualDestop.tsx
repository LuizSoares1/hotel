import React, { useState } from 'react'
import './styles/CalendarReservaManual.sass'
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md'

interface Day {
    date: Date
    isCurrentMonth: boolean
}

const diasSemana = ['DO', 'SE', 'TE', 'QU', 'QI', 'SE', 'SA']

function gerarDias(mes: number, ano: number): Day[] {
    const primeiroDia = new Date(ano, mes, 1)
    const ultimoDia = new Date(ano, mes + 1, 0)

    const dias: Day[] = []

    const inicioSemana = primeiroDia.getDay()
    for (let i = 0; i < inicioSemana; i++) {
        dias.push({ date: new Date(), isCurrentMonth: false })
    }

    for (let d = 1; d <= ultimoDia.getDate(); d++) {
        dias.push({ date: new Date(ano, mes, d), isCurrentMonth: true })
    }

    return dias
}

interface Props {
    onSelectDate: (date: Date) => void
    checkIn: Date | null
    checkOut: Date | null
}

const CalendarReservaManualDesktop: React.FC<Props> = ({ onSelectDate, checkIn, checkOut }) => {
    const hoje = new Date()
    const [currentMonth, setCurrentMonth] = useState(hoje.getMonth())
    const [currentYear, setCurrentYear] = useState(hoje.getFullYear())

    const isSelecionado = (dia: Date) => {
        if (checkIn && checkOut) {
            return dia >= checkIn && dia <= checkOut
        }
        return checkIn?.toDateString() === dia.toDateString()
    }

    const mudarMes = (delta: number) => {
        let novoMes = currentMonth + delta
        let novoAno = currentYear

        if (novoMes < 0) {
            novoMes = 11
            novoAno -= 1
        } else if (novoMes > 11) {
            novoMes = 0
            novoAno += 1
        }

        setCurrentMonth(novoMes)
        setCurrentYear(novoAno)
    }

    const renderMes = (mes: number, ano: number) => {
        const dias = gerarDias(mes, ano)
        const nomeMes = new Date(ano, mes).toLocaleString('pt-BR', { month: 'long' })

        return (
            <div className="mes">
                <div className="mes-header">
                    {nomeMes.charAt(0).toUpperCase() + nomeMes.slice(1)} {ano}
                </div>
                <div className="dias-semana">
                    {diasSemana.map(d => <span key={d}>{d}</span>)}
                </div>
                <div className="grid-dias">
                    {dias.map((d, i) => (
                        <button
                            key={i}
                            type="button"
                            className={`dia ${d.isCurrentMonth ? '' : 'placeholder'} ${isSelecionado(d.date) ? 'selecionado' : ''}`}
                            onClick={() => d.isCurrentMonth && onSelectDate(d.date)}
                            disabled={!d.isCurrentMonth}
                        >
                            {d.isCurrentMonth ? d.date.getDate() : ''}
                        </button>
                    ))}
                </div>
            </div>
        )
    }

    // calcula o próximo mês
    const proximoMes = (currentMonth + 1) % 12
    const proximoAno = currentMonth === 11 ? currentYear + 1 : currentYear

    return (
        <div className="calendar-reserva">
            <button className="nav-btn left" onClick={() => mudarMes(-2)}><MdArrowBackIosNew /></button>
            {renderMes(currentMonth, currentYear)}
            {renderMes(proximoMes, proximoAno)}
            <button className="nav-btn right" onClick={() => mudarMes(2)}><MdArrowForwardIos /></button>
        </div>
    )
}

export default CalendarReservaManualDesktop
