import './Navbar.css'
import logo from '../../assets/logo.png'
import menu_icon from '../../assets/menu-icon.png'
import { useEffect, useState } from 'react'
import {Link, animateScroll as scroll} from 'react-scroll'

const Navbar = () => {

  const [sticky, setSticky] = useState(false)

  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY > 350 ? setSticky(true) :setSticky(false)
    })
  },[])


  const [mobileMenu, setMobileMenu] = useState(false)
  const toggleMenu = ()=>{
      mobileMenu ? setMobileMenu(false) : setMobileMenu(true) 
  }


  return (
    <nav id='container' className={`${sticky ? 'dark-nav' : ''}`}>
        <img src={logo} alt="logo" id='logo' />
        <ul className={mobileMenu?'' : 'hide-mobile-menu'}>
            <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
            <li><Link to='program' smooth={true} offset={-260} duration={500}>Program</Link></li>
            <li><Link to='about' smooth={true} offset={-150} duration={500}>About Us</Link></li>
            <li><Link to='campus' smooth={true} offset={-260} duration={500}>Campus</Link></li>
            <li><Link to='testimoials' smooth={true} offset={-260} duration={500}>Testimonials</Link></li>
            <li><Link to='contact' smooth={true} offset={-260} duration={500} className='btn'> Contact Us  </Link></li>
        </ul>
        <img onClick={toggleMenu} src={menu_icon} className='menu-icon' />
    </nav>
  )
}

export default Navbar