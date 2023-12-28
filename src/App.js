import {Routes,Route} from 'react-router-dom'
import './App.css';
import NavBar from './components/NavBar';
import Home from './Pages/Home';
import Portafolio from './Pages/Portafolio';
import About from './Pages/About';
import Contact from './Pages/Contact';

function App() {
  return (
    <>
    <NavBar/>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/portafolio" element={<Portafolio/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
     </Routes>
   
    </>
  );
}

export default App;
