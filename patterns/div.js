import React from 'react'
import styled from 'styled-components'

//componente reutilizável estilizado atráves de props


const Div = styled.div`
    position:${props => props.position || "relative"};
    background-color:${props => props.bgColor || "none"};
    width:${props => props.width || "auto"};
    height:${props => props.height || "auto"};
    margin:${props => props.margin || "0"};
    padding:${props => props.padding || "0"};
    background-image:url(${props => props.background || 'none'});
    background-size:cover;
    background-repeat:no-repeat;
    
    @media(max-width:576px){
        position: relative;
        width:auto;
        height:100%;
        margin:10px;
        padding:10px 0;
    }
`

export default function div(props) {
    return (
        <Div
         position={props.position}
         bgColor={props.bgColor}
         width={props.width}
         heigth={props.height}
         margin={props.margin}
         marginMobile={props.marginMobile}
         padding={props.padding}
         bgImage={props.background}>
            {props.children}
        </Div>
    )
}
