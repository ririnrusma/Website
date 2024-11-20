import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../component/navbar/navbar';
import Footer from '../../component/footer/footer';

const konfirmasi = () => {
  return (
    <div>
    <Navbar />
        <div className="rent-acc-card" id='konfirmasi'>
        <img className="acc-img" src="/assets/img/acc.png" alt="Success Icon" />
        <div className="acc-message">
            <b className="acc-title">Yeay! Pesan kamu sudah terkirim</b>
            <div className="acc-description">Terima kasih telah memakai jasa layanan kami.</div>
        </div>
        <Link to="/beranda" className="buttonklik">Kembali Ke Beranda</Link>
        </div>.
    <Footer />
    </div>
  );
};

export default konfirmasi;
