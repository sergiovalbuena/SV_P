import React from 'react'
import Link from 'gatsby-link'
import Card from '../components/Card'
import Cell from '../components/Cell'
import styled from 'styled-components'
import MarketingSection from '../components/Marketing'
import Wave from '../components/Wave'

const SectionCaption = styled.p`
  margin: 50px 20px;
  font-size: 60px;
  text-align: center;
  font-weight: 700;
  background: linear-gradient(104deg , #050A27 0%, #4a5a8c 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const SectionCellGroup = styled.div`
  max-width: 800px;
  margin: 0 auto 100px;
  display: grid;
  grid-template-columns:  repeat(3,1fr);
  grid-column-gap: 30px;
  padding: 0 40px;

  @media(max-width:900px){
  grid-template-columns: repeat(2,1fr);
}

`



const IndexPage = () => (
  <div>
    <div className="Hero">
      <div className="HeroGroup">
        <h1>Hi 👋🏼, I'm Sergio 🧑🏻‍💻</h1>
        <p>designer, programmer, developer. </p>
        <p>Let's connect to create amazing projects.</p>
        <Link to="/page-2/">Contact Me</Link>

        <Wave/>

      </div>
    </div>
    <div className="Cards">
      <h2>Some projects</h2>
        <div className="CardGroup">
          
          <Card 
            title=""
            text=""
            link="https://colorhunt.co"
            image={require('../images/fooData.png')}
          />
          
          <Card 
            title=""
            text=""
            link="https://www.redbubble.com/shop/dev+sweatshirts"
            image={require('../images/batata.png')}
          />
          <Card 
            title=""
            text=""
            link="https://www.redbubble.com/shop/dev+sweatshirts"
            image={require('../images/SuperCss.png')}
          />
          <Card 
            title=""
            text=""
            link="https://www.redbubble.com/shop/dev+sweatshirts"
            image={require('../images/rabbits.png')}
          />
           <Card 
            title=""
            text=""
            link="https://www.redbubble.com/shop/dev+sweatshirts"
            image={require('../images/yogananda.png')}
          />
          <Card 
            title=""
            text=""
            link="https://www.redbubble.com/shop/dev+sweatshirts"
            image={require('../images/myBehance.png')}
          />          
        </div>
    </div>


    
    <SectionCaption>I've working with...</SectionCaption>
    <div className="myFavs">
      <img src={require('../images/logos/react.png')} width="60"/>
      <img src={require('../images/logos/CSharp.png')} width="60"/>
      <img src={require('../images/logos/unity.png')} width="60"/>
      <img src={require('../images/logos/js.png')} width="60"/>
      <img src={require('../images/logos/swift.png')} width="60"/>
      <img src={require('../images/logos/styledComponents.png')} width="60"/>
      <img src={require('../images/logos/npm.png')} width="60"/>
      <img src={require('../images/logos/nodejs.png')} width="60"/>
      <img src={require('../images/logos/mySQL.png')} width="60"/>
      <img src={require('../images/logos/procreate.png')} width="60"/>
      <img src={require('../images/logos/figma.png')} width="60"/>
      <img src={require('../images/logos/xd.png')} width="60"/>
      <img src={require('../images/logos/ai.png')} width="60"/>
      <img src={require('../images/logos/ps.png')} width="60"/>
      <img src={require('../images/logos/arduino.png')} width="60"/>
    </div>
  
    <MarketingSection 
      image={require('../images/mktbg.jpg')}
      title="Analytics to boost your project!"
      text="I will lead you to the path to reach customers, organic applying good SEO technics. I measure site to ensure the performance and understand the client behavior. I'am able to implement funnels on projects to enhance sales."
    />

    

    <SectionCaption>Courses🤓 </SectionCaption>

    <SectionCellGroup>
      <Cell 
        title = "HTML5"
        image={require("../images/logos/html.png")} 
      />
      <Cell 
        title = "CSS3"
        image={require("../images/logos/css.png")} 
      />
      <Cell 
        title = "git"
        image={require("../images/logos/git.png")} 
      />
      <Cell 
        title = "terminal"
        image={require("../images/logos/termial.svg")} 
      />  


    </SectionCellGroup>

  </div>
)

export default IndexPage
