import {createGlobalStyle} from 'styled-components'


const GlobalStyle = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
        font-family: 'Oswald', sans-serif;
    }
    h1,h2,h3,h4,h5,h6{
        font-weight:bold;
        color:#23272a;
    }
    p{
        color:#23272a;
        text-align:left;
        margin:10px 0;
        font-size:20px;
        font-weight:300;
    }

    li{
        font-size: 20px;
        margin: 10px 0;
    }
`
export default GlobalStyle