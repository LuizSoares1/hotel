import React from 'react'
import './style/breakfast.sass'

const CafeDaManha: React.FC = () => {
  return (
    <section className="breakfast-section" id='cafe-da-manha'>
      <div className="breakfast-container">
        <div className="breackfast-image">
          <div className="breakfast-image-img">
            <img src="/cafadamanha.jpg" alt="" draggable="false"/>
          </div>
        </div>
        <div className='breakfast-text'>
          <div className='breakfast-text-span'>
            <span>Gastronomia</span>
          </div>
          <div className='breakfast-text-tittle'>
            <div className="breakfast-text-tittle-h1">
              <h1>Café da Manhã</h1>
            </div>
            <div className='breakfast-text-tittle-bar'>
              <div className='bar'></div>
            </div>
          </div>
          <div className='breakfast-text-p'>
            <span>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CafeDaManha