// import logo from './logo.svg';
import './App.css';
import logo from "./images/connect-logo-original.png"
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js"
import { Link, Routes, Route } from "react-router-dom";
import LockIcon from '@mui/icons-material/Lock';
import { Button, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Divider from '@mui/material/Divider';
// import Button from '@mui/material';
import { useState } from 'react';
import Contact from './Contact';
import Home from "./Home";
import Menu from './Menu';
import "./App.css"

function App() {

  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="App">
      
      <div className="main1">

        <img className="logo" src={logo} alt="" />
        <div>
          <div className="contact">
            <p> <i> 24/7 SUPPORT : </i> <b><span className="call"> <CallIcon /></span><a className="tel" href="tel:+9221-111-000-638">+9221-111-000-638</a> </b> &nbsp; | &nbsp; <span className="email"> <EmailIcon /></span>&nbsp;&nbsp;<a className="mailto" href="mailto:abc@mail.com">Email at support</a></p>
          </div>
          <div className="contact2">
            <span className="cLogos">
              <a href="https://facebook.com"> <FacebookIcon /> </a>
            </span>
            <span className="cLogos">
              <a href="https://linkedin.com"> <LinkedInIcon /> </a>
            </span>
          </div>
        </div>
      </div>
      {/* <div className='menu'>
        <ul className="nav">
          <li>
            <Link to={'/'} > Home </Link>
          </li>
          <li>
            <Link to={'/company'} > Company </Link>
          </li>
          <li>
            <Link to={'/services'} > Services </Link>
          </li>
          <li>
            <Link to={'/support'} > Support </Link>
          </li>
          <li>
            <Link to={'/contact'} > Contact Us </Link>
          </li>
        </ul>
        <div className='log'>
          <LockIcon /><span>Login</span>
        </div>


      </div> */}
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/company" element={<Home />} />
        <Route path="/services" element={<Home />} />
        <Route path="/support" element={<Home />} />
        <Route path="/contact" element={< Contact />} />
      </Routes>
      {/* <Home/> */}

    </div>
  );
}

export default App;
