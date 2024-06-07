import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import "./simple.css"
import {Container} from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSlideshare} from "@fortawesome/free-brands-svg-icons"
import {Routes,Route, Link} from "react-router-dom"
import { Display } from './Display'
function App() {
  

  return (
    <>
    <Container>
      <div id="up">
        <Link to="/" style={{textDecoration:"none"}} className='left'>Home</Link>
        <input type='checkbox'id="check"/>
        <div id="down">
         <Link to="/" style={{textDecoration:"none"}} className='same left'>Gallary</Link>
          <Link to="/" style={{textDecoration:"none"}} className='same left'>Contact</Link>
          <Link to="/" style={{textDecoration:"none"}} className='same left'>About</Link>
        </div>
        
      </div>
      <label for="check" style={{position:"absolute",zIndex:"2px",right:"150px",top:"15px"}}><FontAwesomeIcon icon={faSlideshare} style={{color: "#FFD43B",height:"25px"}} /></label>
        <Routes>
          <Route path='/' element={<Display/>}/>
        </Routes>
    </Container>
    </>
  )
}

export default App
