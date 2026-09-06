import React from 'react'
import './style/petfriendly.sass'

const petFriendly: React.FC = () => {
    return (
        <section className="petFriendly-section" id='pet-friendly'>
            <div className="petFriendly-container">
                <div className='petFriendly-text'>
                    <div className='petFriendly-text-span'>
                        <span>Para você e seu melhor amigo</span>
                    </div>
                    <div className='petFriendly-text-tittle'>
                        <div className="petFriendly-text-tittle-h1">
                            <h1>Pet Friendly</h1>
                        </div>
                        <div className='petFriendly-text-tittle-bar'>
                            <div className='bar'></div>
                        </div>
                    </div>
                    <div className='petFriendly-text-p'>
                        <span>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        </span>
                    </div>
                </div>
                <div className="petFriendly-image">
                    <div className="petFriendly-image-img">
                        <img src="/petfriendly.jpg" alt="" draggable="false" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default petFriendly