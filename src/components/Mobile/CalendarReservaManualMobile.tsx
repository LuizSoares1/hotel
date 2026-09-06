import React, { useEffect, useState } from 'react'
import './styles/CalendarReservaManualMobile.sass'

import {
    MdArrowBackIosNew,
    MdArrowForwardIos,
    MdClose
} from 'react-icons/md'

interface Day {
    date: Date
    isCurrentMonth: boolean
}

interface Props {
    onSelectDate: (date: Date) => void
    checkIn: Date | null
    checkOut: Date | null
    onClose: () => void
    closing?: boolean
}

const diasSemana = [
    'DO',
    'SE',
    'TE',
    'QU',
    'QI',
    'SE',
    'SA'
]

function gerarDias(mes: number, ano: number): Day[] {
    const primeiroDia = new Date(ano, mes, 1)
    const ultimoDia = new Date(ano, mes + 1, 0)

    const dias: Day[] = []

    const inicioSemana = primeiroDia.getDay()

    for (let i = 0; i < inicioSemana; i++) {
        dias.push({
            date: new Date(),
            isCurrentMonth: false
        })
    }

    for (
        let d = 1;
        d <= ultimoDia.getDate();
        d++
    ) {
        dias.push({
            date: new Date(ano, mes, d),
            isCurrentMonth: true
        })
    }

    return dias
}

const CalendarReservaManualMobile: React.FC<Props> = ({
    onSelectDate,
    checkIn,
    checkOut,
    onClose,
    closing
}) => {
    const hoje = new Date()

    const [currentMonth, setCurrentMonth] = useState(
        hoje.getMonth()
    )

    const [currentYear, setCurrentYear] = useState(
        hoje.getFullYear()
    )

    useEffect(() => {
        document.body.style.overflow = 'hidden'

        return () => {
            document.body.style.overflow = ''
        }
    }, [])

    const mudarMes = (delta: number) => {
        let novoMes = currentMonth + delta
        let novoAno = currentYear

        if (novoMes < 0) {
            novoMes = 11
            novoAno--
        }

        if (novoMes > 11) {
            novoMes = 0
            novoAno++
        }

        setCurrentMonth(novoMes)
        setCurrentYear(novoAno)
    }

    const isSelecionado = (dia: Date) => {
        if (checkIn && checkOut) {
            return dia >= checkIn && dia <= checkOut
        }

        return (
            checkIn?.toDateString() ===
            dia.toDateString()
        )
    }

    const renderMes = (mes: number, ano: number) => {
        const dias = gerarDias(mes, ano)

        const nomeMes = new Date(
            ano,
            mes
        ).toLocaleString('pt-BR', {
            month: 'long'
        })

        return (
            <div className="calendar-month">

                <div className="calendar-month-title">
                    {nomeMes.charAt(0).toUpperCase() +
                        nomeMes.slice(1)}{' '}
                    {ano}
                </div>

                <div className="dias-semana-mobile">
                    {diasSemana.map((dia, index) => (
                        <span key={index}>
                            {dia}
                        </span>
                    ))}
                </div>

                <div className="grid-dias-mobile">
                    {dias.map((dia, index) => (
                        <button
                            key={index}
                            type="button"
                            disabled={!dia.isCurrentMonth}
                            className={`
                dia-mobile
                ${!dia.isCurrentMonth ? 'placeholder' : ''}
                ${isSelecionado(dia.date)
                                    ? 'selecionado'
                                    : ''
                                }
              `}
                            onClick={() => {
                                if (dia.isCurrentMonth) {
                                    onSelectDate(dia.date)
                                }
                            }}
                        >
                            {dia.isCurrentMonth
                                ? dia.date.getDate()
                                : ''}
                        </button>
                    ))}
                </div>

            </div>
        )
    }

    const proximoMes =
        currentMonth === 11
            ? 0
            : currentMonth + 1

    const proximoAno =
        currentMonth === 11
            ? currentYear + 1
            : currentYear

    return (
        <div className={`calendar-modal ${closing ? 'closing' : ''}`}>
            <div
                className="calendar-modal-content"
                onClick={(event) =>
                    event.stopPropagation()
                }
            >

                <button
                    type="button"
                    className="calendar-close"
                    onClick={onClose}
                    aria-label="Fechar calendário"
                >
                    <MdClose />
                </button>

                <div className="calendar-modal-header">
                    <div>
                        <span>
                            {checkIn && !checkOut
                                ? 'Selecione o check-out'
                                : 'Selecione suas datas'}
                        </span>

                        <strong>
                            {checkIn
                                ? checkIn.toLocaleDateString(
                                    'pt-BR'
                                )
                                : 'Check-in'}

                            {' — '}

                            {checkOut
                                ? checkOut.toLocaleDateString(
                                    'pt-BR'
                                )
                                : 'Check-out'}
                        </strong>
                    </div>
                </div>

                <div className="calendar-navigation">

                    <button
                        type="button"
                        onClick={() => mudarMes(-1)}
                    >
                        <MdArrowBackIosNew />
                    </button>

                    <div className="calendar-months">
                        {renderMes(
                            currentMonth,
                            currentYear
                        )}

                        {renderMes(
                            proximoMes,
                            proximoAno
                        )}
                    </div>

                    <button
                        type="button"
                        onClick={() => mudarMes(1)}
                    >
                        <MdArrowForwardIos />
                    </button>

                </div>

            </div>
        </div>
    )
}

export default CalendarReservaManualMobile