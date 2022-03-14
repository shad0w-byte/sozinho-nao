import React from 'react'
import styled from 'styled-components'

//componente reutilizável estilizado atráves de props

const Section = styled.section`
    background-color:${props => props.bgColor || "none"};
    width:${props => props.width || "auto"};
    margin:${props => props.margin || "0px"};
    padding:${props => props.padding || "10px"};
    
    @media(max-width:576px){
        margin:5px;
        padding:5px;
        width:auto;

    }
`

export default function section(props) {
    return (
        <Section
        bgColor={props.bgColor} 
        width={props.width} 
        margin={props.margin}
        padding={props.padding}
        hoverColor={props.hoverColor}
        >
            {props.children}
        </Section>
    )
}
