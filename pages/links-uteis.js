import React from 'react'
import Head from '../components/head'

import Navbar from '../components/navbar/navbar'

import GridDiv from '../patterns/grid-div'
import Div from '../patterns/div'
import Img from '../patterns/img'
import Footer from '../components/footer/footer'


export default function usefulLinks() {
    return (
        <div>
           <header>
                <Head title="Sozinho? Não!"/>
           </header>
             <main>
                 <Navbar/>
                 <GridDiv margin="70px 10px" padding="10px" > 
                <Div>
                    <h1>Link Úteis</h1>
                   
                    <p>Confira alguns links que podem ser úteis para você.</p>
                    <ul>
                    <li>
                        <a href="https://www.vittude.com/blog/ansiedade/" target="_blank" rel="noreferrer">Ansiedade e seus sintomas.</a>
                    </li>
                    <li> 
                        <a href="https://www.minhavida.com.br/saude/temas/depressao#:~:text=A%20depress%C3%A3o%20(CID%2010%20%E2%80%93%20F33,doen%C3%A7a%20e%20iniciar%20acompanhamento%20m%C3%A9dico." target="_blank" rel="noreferrer">Depressão: sintomas e definição</a>
                        </li>
                    <li>
                    <a href="https://www.esneca.pt/blog/a-importancia-da-saude-mental/#:~:text=A%20sa%C3%BAde%20mental%20define%20o,os%20outros%20e%20tomamos%20decis%C3%B5es." target="_blank" rel="noreferrer">A importância da saúde mental.</a>
                    </li>
                    <li>
                        <a href="https://www.wainerpsicologia.com.br/site/2021/05/26/a-importancia-de-fazer-terapia/" target="_blank" rel="noreferrer">A importância de fazer terapia</a>
                    </li>
                    </ul>
                </Div>
                <Div>
                    <Img src="/image3.png" alt='imagem 3' width="100%" height="auto"/>
                </Div>
                </GridDiv>
                <Footer/>
             </main>
        </div>
    )
}
