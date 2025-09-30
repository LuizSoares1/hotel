import React from 'react'
import Header from '../components/Header'
import Landing from './Landing'
import Hotel from './Hotel'

const Home: React.FC = () => {
  return (
    <div>
        <Header />
        <Landing />
        <Hotel />
    </div>

  )
}

export default Home