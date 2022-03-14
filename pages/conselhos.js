import React from 'react'
import Head from '../components/head'

import Navbar from '../components/navbar/navbar'

import GridDiv from '../patterns/grid-div'
import Div from '../patterns/div'
import Img from '../patterns/img'
import Footer from '../components/footer/footer'


export default function advice() {
    return (
        <div>
           <header>
                <Head title="Sozinho? Não!"/>
           </header>
             <main>
                 <Navbar/>
                 <GridDiv margin="70px 10px" padding="10px" > 
                <Div>
                    <h1>Conselhos</h1>
                   
                    <p>Aqui vai alguns conselhos que eu demorei muito tempo para aprender:</p>
                    <ol>
                    <li>Não se compare com ninguém, todos nós somos únicos;</li>
                    <li>Se algo custa sua paz é muito caro;</li>
                    <li>Faça tudo e viva por você, não pelos outros;</li>
                    <li>Fale menos e faça mais</li>
                    <li>Lembre-se de que a sua versão de hoje já não é a mesma de ontem;</li>
                    <li>Você tem que dominar sua mente, não sua mente te dominar;</li>
                    <li>Nenhum problema é maior que você;</li>
                    <li>Valorize quem te valoriza e te faz bem;</li>
                    <li>Suicídio não é a solução;</li>
                    <li>Sua mente pode ser sua melhor amiga ou seu pior inimigo;</li>
                    <li>Nem todo mundo é realmente seu amigo;</li>
                    <li>Amizades boas te ajudam a levantar, não te afundar;</li>
                    <li>Sinais de depressão e  ansiedade não devem ser ignorados;</li>
                    <li>Saiba filtrar o que é útil e o que não é;</li>
                    <li>Procurar ajuda psicológica quando necessário é super importante;</li>
                    <li>Foque no seu futuro e não em coisas momentâneas;</li>
                    <li>Drogas não são a solução, elas não vão resolver seus problemas, só quem pode fazer isso é você;</li>
                    <li>Não prenda sua felicidade a pessoas ou objetos, prenda sua felicidade a você;</li>
                    <li>Ninguém além de você tem que entender seu processo de evolução;</li>
                    <li>Ignore pessoas que dizem que problemas psicológicos são frescura;</li>
                    <li>Ouça conselhos de pessoas melhores que você, não piores;</li>
                    <li>Não tenha medo de recomeçar, recomeços são necessários;</li>
                    <li>Não pense no problema, pense na solução</li>
                    <li>Procure deixar um bom legado, você pode ser exemplo para outras pessoas;</li>
                    <li>Não se culpe pelo erro, reflita e aprenda com ele;</li>
                    <li>Se você está em um momento ruim, reflita para sair desse momento melhor do que você entrou;</li>
                    <li>A vida não é uma corrida, não tenha pressa;</li>
                    <li>Quem te humilha um dia vai querer ser você;</li>
                    <li>Não guarde rancor ou mágoas, saiba perdoar;</li>
                    <li>A vida tem sempre um lado bom, saiba agradecer e apreciar esse lado.</li>
                    </ol>
                </Div>
                <Div>
                    <Img src="/image2.png" alt='imagem 2' width="100%" height="auto"/>
                </Div>
                </GridDiv>
                <Footer/>
             </main>
        </div>
    )
}
