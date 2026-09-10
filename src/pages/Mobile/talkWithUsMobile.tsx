import React from "react";
import './style/talkwithusMobile.sass'

const FaleConoscoMobile: React.FC = () => {
    return (
        <section className="talkwithus-mobile-section" id="fale-conosco">
            <div className="talkwithus-mobile-tittle">
                <div className='talkwithus-mobile-text'>
                    <div className='talkwithus-mobile-text-span'>
                        <span>Fale conosco</span>
                    </div>
                    <div className='talkwithus-mobile-text-tittle'>
                        <h2>Como podemos te ajudar?</h2>
                        <div className='bar'></div>
                    </div>
                </div>
            </div>

            <div className="talkwithus-mobile-form">
                <form className="contact-form-mobile">
                    <div className="form-input-mobile">
                        <input type="text" placeholder="Nome" />
                    </div>
                    <div className="form-input-mobile">
                        <input type="email" placeholder="Email" />
                    </div>
                    <div className="form-input-mobile">
                        <input type="tel" placeholder="Telefone" />
                    </div>
                    <div className="form-input-mobile">
                        <textarea placeholder="Sua mensagem:"></textarea>
                    </div>
                    <div className="form-check-mobile">
                        <input type="checkbox" id="consent-mobile" />
                        <label htmlFor="consent-mobile">
                            Ao marcar, concordo em compartilhar minhas respostas do formulário.
                        </label>
                    </div>
                    <div className="form-submit-mobile">
                        <button type="submit">ENVIAR</button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default FaleConoscoMobile