import React from 'react'
import styled from 'styled-components'

export default function ProjectCards(props){
    const {title, icon} = props
    return(
        <Wrapper>
            <Icon src="../images/logos/ai.png"/>
            <Title>{title || "title goes here"}</Title>
        </Wrapper>
    )
}

const Wrapper=styled.div``
const Icon=styled.img``
const Title=styled.h4``