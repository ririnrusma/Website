import React from 'react';
import { useLocation } from 'react-router-dom';
import './rent.css';

const Transaksi = () => {
  const location = useLocation();
  const { namaLengkap, selectedBike, durasi, area, harga, paymentMethod } = location.state || {};

  return (
      <div className="transaksi-container" id="transaksi">
        <h2>Detail Transaksi</h2>
        {selectedBike ? (
          <table className="transaksi-table">
            <thead>
              <tr>
                <th>Nama Lengkap</th>
                <th>Jenis Sepeda</th>
                <th>Durasi</th>
                <th>Area</th>
                <th>Harga</th>
                <th>Status</th>
                <th>Pembayaran</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{namaLengkap}</td>
                <td>{selectedBike}</td>
                <td>{durasi}</td>
                <td>{area}</td>
                <td>Rp {harga.toLocaleString()}</td>
                <td>Berhasil</td>
                <td>{paymentMethod === 'Qris' ? (
                  <img src="/assets/img/barcode.png" alt="QRIS Barcode" />
                ) : paymentMethod === 'Transfer Bank' ? (
                  <p>Nomor VA Anda: {vaNumber}</p>
                ) : (
                  <p>Tunai</p>
                )}</td>
              </tr>
            </tbody>
          </table>
        ) : (
          <p>Tidak ada sepeda yang dipilih.</p>
        )}
      </div>
  );
};

export default Transaksi;