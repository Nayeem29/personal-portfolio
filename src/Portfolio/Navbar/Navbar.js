import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../Assests/Home/logo.jpg';

const Navbar = () => {
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header")
    header.classList.toggle("active", window.scrollY > 100)
  });
  // Toogle Menu
  const [Mobile, setMobile] = useState(false)
  return (
    <>
      <header className='header'>
        <div className='container'>
          <div className='logo'>
            <img src={logo} alt="profile logo" />
            <p>Nayeem</p>
          </div>
          <div className='navlink'>

            <ul className={Mobile ? "nav-links-mobile" : "link"} onClick={() => setMobile(false)}>
              <li> <a href="#portfolio">Portfolio</a></li>
              <li> <a href="#experience">Experience</a></li>
              <li> <a href="#projects">Projects</a></li>
              <li> <a href="#education">Education</a></li>
              <li> <a href="#contact">Contact</a></li>
            </ul>

            <button className='toggle' onClick={() => setMobile(!Mobile)}>
              {Mobile ? <i className='fa fa-times close'></i> : <i className='fa fa-bars open'></i>}
            </button>
          </div>
        </div>
      </header>
      <section className='demo'></section>
    </>
  );
};

export default Navbar;