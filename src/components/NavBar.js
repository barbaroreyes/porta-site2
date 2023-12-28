import {useRef}from 'react';
import {FaBars, FaTimes} from 'react-icons/fa'
import Profile from './Profile';


const NavBar = () => {

    const navRef = useRef();
    const showNavBar =()=> {
        navRef.current.classList.toggle('responsive_var')
    }

  return (
    <header>
    <Profile/>
    
    <nav ref ={navRef}>
      <a href='/'>Home</a>
      <a href='/portafolio'>Portafolio</a>
      <a href='/about'>About</a>
      <a href='/contact'>Contact</a>
      <button onClick={showNavBar} className=' nav-btn nav-close-btn '>
        <FaTimes/>
      </button>
      
    </nav>
    <button onClick={showNavBar} className='nav-btn'> 
        <FaBars/>
      </button>
    </header>
  );
}

export default NavBar;
