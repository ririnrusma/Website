import React from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './rent.css';
import Navbar from '../../component/navbar/navbar';
import Footer from '../../component/footer/footer';

const RentalAcc = () => {
  const location = useLocation();
  const { namaLengkap, selectedBike, durasi, area} = location.state || {};

  return (
    <div>
      <Navbar />
      <div className="rent-acc-card" id="rentalacc">
        <img className="acc-img" alt="Pengajuan Berhasil" src="/assets/img/acc.png" />
        <div className="acc-message">
          <b className="acc-title">Yeay! Pengajuan Kamu Berhasil</b>
          <div className="acc-description">Terima kasih sudah melakukan pengajuan ini, selamat menikmati.</div>
        </div>
        <Link to={{ pathname: "/transaksi", state: { namaLengkap, selectedBike, durasi, area} }}>
          <button className="buttonklik">Lihat Transaksi</button>
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default RentalAcc;