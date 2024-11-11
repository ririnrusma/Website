import React from 'react';
import { Link } from 'react-router-dom';
import './rent.css';

const RentalAcc = () => {
  return (
    <div className="rent-acc-card" id="rentalacc">
      <img className="acc-img" alt="Pengajuan Berhasil" src="image 5.png" />
      <div className="acc-message">
        <b className="acc-title">Yeay! Pengajuan Kamu Berhasil</b>
        <div className="acc-description">Terima kasih sudah melakukan pengajuan ini, selamat menikmati.</div>
      </div>
      <Link to="/transaksi">
        <button className="buttonklik">Lihat Transaksi</button>
      </Link>
    </div>
  );
};

export default RentalAcc;