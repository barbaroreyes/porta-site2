import {useRef}from 'react';
import {FaBars, FaTimes} from 'react-icons/fa'
import {Link} from 'react-router-dom'
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
      <Link to='/'>Home</Link>
      <Link to='/portafolio'>Portafolio</Link>
      <Link to='/about'>About</Link>
      <Link to='/contact'>Contact</Link>
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
