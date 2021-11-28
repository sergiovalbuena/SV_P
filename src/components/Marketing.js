import React from 'react'
import styled from 'styled-components'
import Wave from './Wave'

const MarketingSection = props => (
    <MarketingGroup image={props.image}>
    <WaveBottom>  <Wave/></WaveBottom>
    
        <MarketingTitleGroup>
            <MarketingTitle>{props.title}</MarketingTitle>
            <div>
            <MarketingText>{props.text}</MarketingText>
            <MarketingLogos>
            
            <img src={require('../images/logos/ads.png')} width="80"/>
            <img src={require('../images/logos/analytics.png')} width="80"/>
            <img src={require('../images/logos/gtm.png')} width="80"/>
            <img src={require('../images/logos/funnelytics.png')} width="80"/>
        </MarketingLogos>
        </div>
        </MarketingTitleGroup>

        <WaveTop>  <Wave/></WaveTop>
    </MarketingGroup>
)


const MarketingGroup = styled.div`
    background: salmon;
    height: 620px;
    background-size: cover;
    display: grid;
    position: relative;
    grid-gap: 0px 0 px;
    align-items: center;
    justify-content: center;
    @media(max-width: 640px){
        height: 820px;
    }
`
const MarketingLogos =styled.div`

    display: grid;
    grid-template-columns: repeat(4,4fr);
    width: 80%;
    padding: 20px 30px;
    
`

const MarketingTitleGroup =styled.div`
    display: grid;
    grid-template-columns: 300px auto;
    margin: 100px 40px 0px;
    grid-gap: 40px;
    grid-template-rows: auto 100%;
    padding: 0 100px 30px 100px;
    

    @media (max-width: 720px){
        grid-template-columns: 1fr;
        padding: 30px;
        
    }
`
const MarketingTitle =styled.h3`
    color: white;
    font-size: 60px;
    margin: 0;
    line-height: 1.2;

    @media(max-width: 720px){
        grid-template-columns: 1fr;
    } 
`
const MarketingText =styled.p`
    color: white;
`
const WaveTop = styled.div`
    position: absolute;
    width: 100%;
    height: 70px;
    top: 30px;
    transform: rotate(180deg);
`
const WaveBottom = styled.div`
    position: absolute;
    width: 100%;
    height: 70px;;
    bottom: 80px;
`


export default MarketingSection