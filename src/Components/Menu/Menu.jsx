import React, {useState} from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import Home from '../Home/Home';
import About from '../About/About.jsx';
import Projects from '../Projects/Projects';
import '../Menu/Menu.css'

const Menu = () => {

const [classOn, setClassOn] = useState(false);
      
  return (
    <Router>
    <header>
    <div className="container">
      <div className = { classOn ? 'menu-section on' : 'menu-section'} onClick={() => setClassOn(!classOn)}>
           <div className="menu-toggle">
              <div className="one"></div>
              <div className="two"></div>
              <div className="three"></div>
           </div>

           <nav>
            <ul>
            <li><Link to='/'><>Inicio</></Link></li>
            <li><Link to='/Sobre'> <>Sobre</></Link></li>
            <li><Link to='/Projetos'> <>Projetos</></Link></li>
          
            </ul>
          </nav>

          </div>
        </div>

      </header>

      <Routes> 
        <Route path='/' element={<Home/>}/>
        <Route path='/Sobre' element={<About/>}/>
        <Route path='/Projetos' element={<Projects/>}/>
      </Routes>
      
      </Router>

      )
    }
    
export default Menu;