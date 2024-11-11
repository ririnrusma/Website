import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser  } from '@fortawesome/free-solid-svg-icons';
import { Link, useLocation } from "react-router-dom";
import React from 'react';
import './nav.css';

const Navbar = () => {
  const logo = 'assets/img/navlogo.png';
  const location = useLocation();

  return (
    <div className='navbar'>
      <div className='container'>
        <div className='navbar-box'>
          <img src={logo} alt="Veloz Logo" className='logo' />
          <ul className='navbar-menu'>
            <li>
              <Link to="/beranda" className={`navbar-item ${location.pathname === '/beranda' ? 'active' : ''}`}>
                Beranda
              </Link>
            </li>
            <li>
              <Link to="/daftarsepeda" className={`navbar-item ${location.pathname === '/daftarsepeda' ? 'active' : ''}`}>
                Daftar Sepeda
              </Link>
            </li>
            <li>
              <Link to="/rental" className={`navbar-item ${location.pathname === '/rental' ? 'active' : ''}`}>
                Rental
              </Link>
            </li>
            <li>
              <Link to="/lokasi" className={`navbar-item ${location.pathname === '/lokasi' ? 'active' : ''}`}>
                Lokasi
              </Link>
            </li>
            <li>
              <Link to="/kontakkami" className={`navbar-item ${location.pathname === '/kontakkami' ? 'active' : ''}`}>
                Kontak Kami
              </Link>
            </li>
          </ul>
          <div className='akun'>
            <a href='#' className='akun-button'>
              <FontAwesomeIcon icon={faUser } />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;