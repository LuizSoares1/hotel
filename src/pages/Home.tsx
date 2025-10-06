import React from 'react'
import Header from '../components/Header'
import Landing from './Landing'
import Hotel from './Hotel'
import Acomodacoes from './accommodations'

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Landing />
      <Hotel />
      <Acomodacoes />
    </>
  )
}

export default Home