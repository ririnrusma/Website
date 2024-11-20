import { useNavigate } from "react-router-dom";
import React, { useState } from 'react';
import './beranda.css'; 

const Beranda = ({ isLoggedIn, setIsLoggedIn }) => { 
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

  return (
    <div>
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

      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <p>Anda harus login terlebih dahulu untuk menyewa sepeda listrik</p>
            <button className="modal-button" onClick={handleCloseModal}>Tutup</button>
          </div>
        </div>
      )}
    </div>
  ); 
};

export default Beranda;