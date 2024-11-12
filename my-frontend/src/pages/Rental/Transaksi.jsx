import React from 'react';
import { useLocation } from 'react-router-dom';
import './rent.css';

const Transaksi = () => {
  const location = useLocation();
  const { namaLengkap, selectedBike, durasi, area} = location.state || {};

  return (
    <div className="transaksi-container" id="transaksi">
      <h2>Detail Transaksi</h2>
      {selectedBike ? (
        <table className="transaksi-table">
          <thead>
            <tr>
              <th>Nama Lengkap</th>
              <th>Durasi</th>
              <th>Tanggal Transaksi</th>
              <th>Status</th>
              <th>Area</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{namaLengkap}</td>
              <td>{selectedBike.model}</td>
              <td>{durasi}</td>
              <td>{new Date().toLocaleDateString()}</td>
              <td>Berhasil</td>
              <td>{area}</td>
            </tr>
          </tbody>
        </table>
      ) : 
      ( <p>Tidak ada sepeda yang dipilih.</p> )}
    </div>
  );
};

export default Transaksi;