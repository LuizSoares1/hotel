import React from 'react'
import Header from '../../components/Desktop/HeaderDesktop'
import Landing from './Landing'
import Hotel from './Hotel'
import Acomodacoes from './accommodations'
import Servicos from './services'

const DesktopApp: React.FC = () => {
  return (
    <>
      <Header />
      <Landing />
      <Hotel />
      <Acomodacoes />
      <Servicos />
    </>
  )
}

export default DesktopApp