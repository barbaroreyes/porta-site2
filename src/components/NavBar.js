import {useRef}from 'react';
import {FaBars, FaTimes,FaHome,FaUser,FaFolderOpen ,FaEnvelopeOpen } from 'react-icons/fa'
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
      <Link to='/'><FaHome /></Link>
      <Link to='/portafolio'><FaFolderOpen /></Link>
      <Link to='/about'><FaUser /></Link>
      <Link to='/contact'><FaEnvelopeOpen/></Link>
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
