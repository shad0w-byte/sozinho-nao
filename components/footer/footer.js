import React from 'react'
import {Footer} from './style'
import FlexDiv from '../../patterns/flex-div'
import Section from '../../patterns/section'



export default function footer(props) {
    return (
        <Footer positionMobile={props.positionMobile}>
            <FlexDiv direction="row" justify="left" align="left">
            <Section 
              margin="10px 10px" width="35%" height="100%">
                  <span>
                      Desenvolvido por <a href="https://ssik824.vercel.app" target="_blank" rel="noreferrer"><b>SSIK824</b></a>
                      </span>
                     
                      <div>
                      <i className="bi bi-arrow-right"></i>
                        <a href={process.env.NEXT_PUBLIC_INSTAGRAM} rel="noreferrer" target="_blank">
                        <i className="bi bi-instagram"></i>
                        </a>

                        <a href={process.env.NEXT_PUBLIC_GITHUB} rel="noreferrer" target="_blank">
                        <i className="bi bi-github"></i>
                        </a>

                        <a href={process.env.NEXT_PUBLIC_SPOTIFY} rel="noreferrer" target="_blank">
                        <i className="bi bi-spotify"></i>
                        </a>
                  </div>
              </Section>
              <Section 
              margin="10px 10px" width="30%">
               <p>Compartilhe e divulgue o site para que essa mensagem chegue a mais pessoas!</p>
               <p>Me siga nas redes sociais para me motivar e ficar por dentro de outros projetos =) </p>
              </Section>
               <Section 
              margin="10px 10px" width="35%">
                <ul>
                    <li>CVV - Centro de valorização a vida - Disque 188 ou clique <a href="https://www.cvv.org.br/" target="_blank" rel="noreferrer"><b>aqui</b></a> para ir para o site.</li>

                    <li>Procure ajuda profissional, não se medique ou faça auto-diagnósticos!!</li>
                </ul>
              </Section>
            </FlexDiv>
        </Footer>
    )
}

