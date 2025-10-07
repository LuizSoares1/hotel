import React from 'react'
import Header from '../components/Header'
import Landing from './Landing'
import Hotel from './Hotel'
import Acomodacoes from './accommodations'
import Servicos from './services'

const Home: React.FC = () => {
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

export default Home