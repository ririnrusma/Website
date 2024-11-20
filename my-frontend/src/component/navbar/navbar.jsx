import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser  } from '@fortawesome/free-solid-svg-icons';
import { Link, useLocation, useNavigate } from "react-router-dom";
import React, { useState, useRef, useEffect } from 'react';
import './nav.css';

const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
  const logo = 'assets/img/navlogo.png';
  const location = useLocation();
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);
  const popupRef = useRef(null); 
  
  const handleUserIconClick = () => {
    if (isLoggedIn) {
      navigate('/profil');
    } else {
      setShowPopup(true);
    }
  };

  const handleLogin = () => {
    navigate('/login'); 
    setShowPopup(false);
  };

  const handleRegister = () => {
    setShowPopup(false);
    navigate('/register'); 
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setShowPopup(false); 
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [popupRef]);

  return (
    <div className="navbar"> 
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
            <button onClick={handleUserIconClick} className='akun-button'>
              <FontAwesomeIcon icon={faUser  } />
            </button>
            {showPopup && !isLoggedIn && (
              <div className="popup" ref={popupRef}> 
                <div className="popup-content">
                  <button onClick={handleLogin} className="login-btn">Masuk</button>
                  <button onClick={handleRegister} className="register-btn">Daftar</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;