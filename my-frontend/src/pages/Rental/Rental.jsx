import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './rent.css'; 

const Rental = () => {
  const [durasi, setDurasi] = useState('');
  const [harga, setHarga] = useState(0);

  const handleDurasiChange = (event) => {
    const selectedDurasi = event.target.value;
    setDurasi(selectedDurasi);

    const hargaPerDurasi = {
      '15 Menit': 5000,
      '30 Menit': 10000,
      '45 Menit': 15000,
      '1 Jam': 20000,
      '2 Jam': 35000,
      '3 Jam': 50000,
      '4 Jam': 70000,
      '5 Jam': 90000,
      '6 Jam': 110000,
      '12 Jam': 150000,
      '1 Hari': 200000,
      '2 Hari': 350000,
      '3 Hari': 500000,
      '4 Hari': 700000,
      '5 Hari': 900000,
      '1 Minggu': 1200000,
    };

    setHarga(hargaPerDurasi[selectedDurasi] || 0);
  };

  return (
    <div className="rent-container" id="rental">
      <h2 className="title">FORM PENGAJUAN SEWA</h2>
      
      {/* <div className="card">
        <b className="brand">Uwinfly</b>
        <img className="bikeImage" alt="Uwinfly D7D" src="/assets/img/Uwinfly - Uwinfly D7D.png" />
        <div className="bikeInfo">
          <b className="model">Uwinfly D7D</b>
          <div className="spec">Beban Maksimum | 150 kg</div>
          <div className="spec">Motor Power | 450 watt</div>
          <div className="spec">Jarak Tempuh | Up to 40 km</div>
          <div className="spec">Kecepatan Maksimum | 33 km/h</div>
        </div>
      </div> */}

        <div className="input">
          <label>Nama Lengkap</label>
          <input type="text" placeholder="Nama Lengkap" />
        </div>
        <div className="input">
          <label>No. Telepon</label>
          <input type="tel" placeholder="No. Telepon" />
        </div>
        <div className="input">
          <label>Email</label>
          <input type="email" placeholder="Email" />
        </div>
        <div className="input">
          <label>Pekerjaan</label>
          <select>
            <option>Pilih</option>
            <option>Mahasiswa</option>
            <option>Dosen</option>
            <option>Pelajar</option>
            <option>Pengunjung</option>
          </select>
        </div>

        <div className="input">
          <label>Area/Kota</label>
          <select>
            <option>Pilih</option>
            <option>Jakarta</option>
            <option>Bandung</option>
            <option>Surabaya</option>
            <option>Bali</option>
          </select>
        </div>
        <div className="input">
          <label>Daftar Sepeda</label>
          <select>
            <option>Pilih</option>
            <option>Uwinfly D7D</option>
            <option>Pasific</option>
          </select>
        </div>
        <div className="input">
          <label>Durasi</label>
          <select value={durasi} onChange={handleDurasiChange}>
            <option>Pilih</option>
            <option>15 Menit</option>
            <option>30 Menit</option>
            <option>45 Menit</option>
            <option>1 Jam</option>
            <option>2 Jam</option>
            <option>3 Jam</option>
            <option>4 Jam</option>
            <option>5 Jam</option>
            <option>6 Jam</option>
            <option>12 Jam</option>
            <option>1 Hari </option>
            <option>2 Hari </option>
            <option>3 Hari </option>
            <option>4 Hari </option>
            <option>5 Hari </option>
            <option>1 Minggu </option>
          </select>
        </div>
        {durasi && (
        <div className="harga">
          <label>Harga Sewa</label>
          <div className="harga">{`Rp ${harga.toLocaleString()}`}</div>
        </div>
        )}

        <div className="input">
          <label>Pembayaran</label>
          <select>
            <option>Pilih</option>
            <option>Transfer Bank</option>
            <option>Tunai</option>
            <option>Qris</option>
          </select>
        </div>

      <div className="notesSection">
        <h3>Notes</h3>
        <textarea placeholder="Catatan" rows="4"></textarea>
      </div>
      <Link to="/rentalacc">
        <button className="submit">Kirim Pengajuan</button>
      </Link>
    </div>
  );
};

export default Rental;