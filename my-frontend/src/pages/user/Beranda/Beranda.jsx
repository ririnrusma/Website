import { useNavigate } from "react-router-dom";
import React from 'react';
import './beranda.css'; 

const Beranda = ({ isLoggedIn }) => { 
  const navigate = useNavigate();

  const handleSewaClick = () => {
    if (isLoggedIn) {
      navigate("/daftarsepeda"); 
    } else {
      console.log("Pengguna tidak terautentikasi.");
    }
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
    </div>
  ); 
};

export default Beranda;