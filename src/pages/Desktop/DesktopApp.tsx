import React from 'react'
import Header from '../../components/Desktop/HeaderDesktop'
import Landing from './Landing'
import Hotel from './Hotel'
import Acomodacoes from './accommodations'
import Servicos from './services'
import CafeDaManha from './breakfast'
import PetFriendly from './petFriendly'
import FaleConosco from './talkWithUs'
import FooterDesktop from '../../components/Desktop/FooterDesktop'

const DesktopApp: React.FC = () => {
  return (
    <>
      <Header />
      <Landing />
      <Hotel />
      <Acomodacoes />
      <Servicos />
      <CafeDaManha />
      <PetFriendly />
      <FaleConosco />
      <FooterDesktop />
    </>
  )
}

export default DesktopApp