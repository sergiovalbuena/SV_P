import React from 'react'
import './Card.css'
import styled from 'styled-components'

const Card = props => (
    <div className="Card">
   
        <a href={props.link} target="_blank">
            <img src = {props.image}/>
            <h3>{props.title}</h3>
            <p>{props.text}</p>
        </a>
    
     
  
        
    </div>

)

export default Card