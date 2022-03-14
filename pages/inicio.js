import React from 'react'
import Head from '../components/head'

import Navbar from '../components/navbar/navbar'

import GridDiv from '../patterns/grid-div'
import Div from '../patterns/div'
import Img from '../patterns/img'
import Footer from '../components/footer/footer'


export default function HomeContent() {
    return (
        <div>
           <header>
                <Head title="Sozinho? Não!"/>
           </header>
             <main>
                 <Navbar/>
                 <GridDiv margin="70px 10px" padding="10px" > 
                <Div>
                    <h1>Sozinho? Não!</h1>
                   
                    <p>Você se sente sozinho? Sente que está perdendo tempo ou você não é ninguém? Eu te entendo, já passei por isso...</p>

                    <p>A maioria dos seres humanos tem o costume de olharem a vida com um olhar sético, focarem sempre nos problemas e no lado ruim das coisas, para pessoas que sofrem de problemas psicológicos tudo isso é muito pior (falo por experiência própria). Mas você já parou pra pensar por tudo que você já passou?</p>

                    <p>Você já passou por diversas coisas, boas e ruins, só você sabe pelo o que você já passou para estar aqui bem agora e você enfrentou tudo isso, você está aqui agora, você não desistiu, <b>isso é motivo de orgulho!</b></p>
                    <p>A vida não é fácil, não é um mar de rosas ou algo do tipo, é normal termos momentos de tristeza, reflexão, felicidade ou até mesmo angústia. O problema está quando os sentimentos ruins te dominam, cegando sua visão para ver apenas as coisas ruins, encare esse texto como um conselho, algo para você refletir ok?</p>

                    <p>Por mais que você pense que você está sozinho, você não está! Já parou pra pensar quantas pessoas te amam e sua falta na vida delas iria impactar? Você já parou pra pensar que você não é o mesmo de um ano atrás? Você está em constante processo de evolução, não deixe que nada de ruim te desvie do seu caminho.</p>

                    <p>Coloque na sua cabeça que você pode mudar tudo a sua volta, basta você querer, não precisa ter pressa, é algo que leva tempo e maturidade para acontecer, apenas dê tempo ao tempo.</p>

                </Div>
                <Div>
                    <Img src="/image1.png" alt='imagem 1' width="100%" height="auto"/>
                </Div>
                </GridDiv>
                <Footer/>
             </main>
        </div>
    )
}

