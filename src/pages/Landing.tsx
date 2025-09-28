import React from 'react'
import './style/landing.sass'

const Landing: React.FC = () => {
  return (
    <section className='landing-section'>
        <div className='landing-container'>
            <div className='landing-text-div'>
                <h1>O MELHOR HOTEL DA REGIÃO</h1>
                <h2>VENHA NOS VISITAR</h2>
            </div>
        </div>
    </section>
  )
}

export default Landing