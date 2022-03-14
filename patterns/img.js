import React from 'react'
import styled from  'styled-components'

//componente reutilizável estilizado atráves de props

const Img = styled.img`
    position:relative;
    width:${props => props.width || "auto"};
    height:${props => props.height || "auto"};
    padding:${props => props.padding || "0"};
    margin:${props => props.margin || "0"};
    @media(max-width:576px){
        position:relative;
        max-width:100%;
        height:auto;
        margin: 0;
        padding:10px;

        &:hover{
            transform: scale(1.2);
            transition: .2s ease-in-out;
        }
    }
`

export default function img(props) {
    return (
        <Img
        width={props.width}
        height={props.height}
        margin={props.margin}
        padding={props.padding}
        border={props.border}
        src={props.src}
        alt={props.alt}>
      
        </Img>
    )
}
