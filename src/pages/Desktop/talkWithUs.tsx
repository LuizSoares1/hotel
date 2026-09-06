import React from "react";
import './style/talkwithus.sass'

const FaleConosco: React.FC = () => {
    return (
        <section className="talkwithus-section">
            <div className="talkwithus-cobntainer">
                <div className="talkwithus-tittle">
                    <div className='talkwithus-text'>
                        <div className='talkwithus-text-span'>
                            <span>Fale conosco</span>
                        </div>
                        <div className='talkwithus-text-tittle'>
                            <div className="talkwithus-text-tittle-h1">
                                <h1>Como podemos te ajudar?</h1>
                            </div>
                            <div className='talkwithus-text-tittle-bar'>
                                <div className='bar'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="talkwithus-form">
                <form className="contact-form">
                    <div className="form-row">
                        <div className="form-input">
                            <input type="text" placeholder="Nome" />
                        </div>
                        <div className="form-input">
                            <input type="email" placeholder="Email" />
                        </div>
                    </div>

                    <div className="form-input">
                        <input type="tel" placeholder="Telefone" />
                    </div>
                    <div className="form-input">
                        <textarea placeholder="Sua mensagem:"></textarea>
                    </div>
                    <div className="form-check">
                        <input type="checkbox" id="consent" />
                        <label htmlFor="consent">
                            Ao marcar, concordo em compartilhar minhas respostas do formulário.
                        </label>
                    </div>
                    <div className="form-submit">
                        <button type="submit">ENVIAR</button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default FaleConosco