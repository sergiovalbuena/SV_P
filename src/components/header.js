import React from 'react'
import Link from 'gatsby-link'
import './Header.css'
import logo from '../images/sv_logo.png'


class Header extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      hasScrolled: false
    }
  }

  componentDidMount(){
    window.addEventListener('scroll',
    this.handleScroll)
  }

  handleScroll = (event) => {
    const scrollTop= window.pageYOffset

    if(scrollTop > 50){
      this.setState({hasScrolled: true})
    }else{
    this.setState({hasScrolled: false})
    } 
  }

  render(){
    return(
      <div className={this.state.hasScrolled ? 'Header HeaderScrolled' : 'Header'}>
        <div className="HeaderGroup">
          <Link to="/"><img src={logo}/></Link>
          <Link to="/courses">Courses</Link>
          <Link to="/work">Work</Link>
          <Link to="/aboutMe">About Me</Link>
          <Link to="/aboutMe"><button>Contact Me</button></Link>
    
        </div>
      
    </div>
    )
  }
}

//<img src={require('#')}
export default Header
