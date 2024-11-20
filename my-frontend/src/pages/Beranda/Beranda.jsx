import { Link, useNavigate } from "react-router-dom";
import React, { useState } from 'react';
import Navbar from "../../component/navbar/navbar";
import Footer from "../../component/footer/footer";
import './beranda.css'; 

const Beranda = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  const [showModal, setShowModal] = useState(false); 
  const navigate = useNavigate();

  const handleSewaClick = () => {
    if (!isLoggedIn) {
      setShowModal(true); 
    } else {
      navigate("/daftarsepeda"); 
    }
  };

  const handleCloseModal = () => {
    setShowModal(false); 
  };

  const handleLoginRedirect = () => {
    setShowModal(false); 
    navigate("/login"); 
  };

  return (
    <div>
      <Navbar />
      <div className="beranda" id="beranda">
        <div className="sewaContainer">
          <p className="sewaText">Sewa Kendaraan Listrik</p>
          <p className="sewaText">Cukup dari Rumah Bersama</p>
          <p className="sewaText">VELOZ BICYCLE</p>
        </div>
        <b className="tag">#JalanTanpaPolusi</b>
        <div className="sewaWrapper">
          <button className="sewa" onClick={handleSewaClick}>Sewa Sekarang</button>
        </div>
      </div>
      <Footer />

      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <p>Anda harus login terlebih dahulu untuk menyewa sepeda listrik</p>
            <button className="modal-button" onClick={handleCloseModal}>Tutup</button>
            <button className="modal-button" onClick={handleLoginRedirect}>Login</button>
          </div>
        </div>
      )}
    </div>
  ); 
};

export default Beranda;