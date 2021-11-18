import React from 'react'
import styled from "styled-components"

export default function PurchaseButton(props){
    const{ title, subtitle } = props
    return(
        <Wrapper>
            <Title>{title ||"Contact Me"}</Title>
            <Subtitle>{subtitle || "Get Access"}</Subtitle>
        </Wrapper>
    )
}

const Wrapper = styled.div``
const Title = styled.p``
const Subtitle = styled.p``


