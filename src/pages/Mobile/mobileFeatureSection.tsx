import React from 'react'
import './style/mobileFeatureSection.sass'

interface MobileFeatureSectionProps {
    id: string
    image: string
    imageAlt?: string
    spanText: string
    title: string
    paragraph: string
}

const MobileFeatureSection: React.FC<MobileFeatureSectionProps> = ({
    id,
    image,
    imageAlt = '',
    spanText,
    title,
    paragraph
}) => {
    return (
        <section className="mobile-feature-section" id={id}>
            <div className="mobile-feature-container">
                <div className="mobile-feature-heading">
                    <div className="mobile-feature-span">
                        <span>{spanText}</span>
                    </div>
                    <div className="mobile-feature-tittle">
                        <h2>{title}</h2>
                        <div className="bar"></div>
                    </div>
                </div>

                <div className="mobile-feature-image">
                    <img src={image} alt={imageAlt} draggable="false" />
                </div>

                <div className="mobile-feature-text">
                    <div className="mobile-feature-p">
                        <span>{paragraph}</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MobileFeatureSection