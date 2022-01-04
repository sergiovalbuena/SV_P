import React from 'react'
import styled from 'styled-components'

const CellGroup = styled.div`
    display: grid;
    grid-template-columns: 60px auto;
    grid-gap: 25px;
    align-items: center;
`
const CellImage = styled.img`
    width: 60px;
    height: 60px;
    background: white;
    border-radius: 10px;
    background-size: 60px;
`

const CellTitle = styled.h5`
    font-size: 24px;
    border-bottom: 1px solid rgba(0,0,0,.1);
    padding: 30px 0;
    color: black;
`

const Cell = props => (
    <CellGroup>
        <CellImage src={props.image}/>
        <CellTitle>{props.title}</CellTitle>
    </CellGroup>
)

export default Cell