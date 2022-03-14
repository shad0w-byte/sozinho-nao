import styled from 'styled-components'


const Footer = styled.footer`
    height:auto;
    width:100%;
    display:block;
    background:#4D77FF; 
    color:#fff;
    font-weight:400;
    letter-spacing:1px ;
    
    // footer para diferentes dispositivos
    @media(max-width:576px){
        position:${props => props.positionMobile || "relative"};
        text-align:left;
        margin-top: 20px;
        padding-top: 10px;
    }
    @media(max-width:768px){
        margin-top: 30px;
    
    }
    @media(width:1024px){
        position:fixed;
        bottom:0;
        left:0;
        text-align:left;
    }

    a > i{
        text-decoration:none;
        font-size:22px;
        color:#fff;
        padding:5px;
        margin:5px;
        display: inline-block;
        text-align:left;  
    }
    a{
            font-size:20px;
            cursor:pointer;
            color:#fff;
            cursor:pointer;
            text-decoration:none;
        }
    ul{
        list-style:none;
    }
    li{
        font-size:20px;
    }

    span,p{
        font-size:20px;
        color:#fff;
    }
`




export {Footer}