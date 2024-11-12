import { Link } from "react-router-dom";
import React from 'react';
import './beranda.css'; 

const Beranda = () => {

  return (
    <div className="beranda" id="beranda">
      <div className="sewaContainer">
        <p className="sewaText">Sewa Kendaraan Listrik</p>
        <p className="sewaText">Cukup dari Rumah Bersama</p>
        <p className="sewaText">VELOZ BICYCLE</p>
=      </div>
        <b className="tag">#JalanTanpaPolusi</b>
      <div className="sewaWrapper">
        <Link to="/daftarsepeda">
          <button className="sewa">Sewa Sekarang</button>
        </Link>
      </div>
    </div>
  ); 
};

export default Beranda;