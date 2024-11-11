import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './dase.css'; 

const DaftarSepeda = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className="daftar-sepeda" id="daftarsepeda">
      <div className="search-container">
        <div className="search-title">Sepeda Listrik</div>
        <div className="search-box">
          <input
            type="text"
            placeholder="Cari"
            className="search-input"
            onChange={handleSearchChange}
          />
          <div className="search-icon">
            <FontAwesomeIcon icon={faSearch} />
          </div>
        </div>
      </div>
      <div className="bike-list">
        <div className="bike-card">
          <img alt="United Bike" src="/assets/img/United Bike - UNITED Salvador 2.0.png"/>
          <div className="bike-details">
            <b className="bike-brand">United Bike</b>
            <b className="bike-model">UNITED Salvador 2.0</b>
            <div className="bike-spec">Beban Maksimum | 120 kg</div>
            <div className="bike-spec">Motor Power | 600 watt</div>
            <div className="bike-spec">Jarak Tempuh | Up to 60 km</div>
            <div className="bike-spec">Kecepatan Maksimum | 25 km/h</div>
          </div>
          <Link to="/rental">
            <button className="rent-button">Sewa Sekarang</button>
          </Link>
        </div>

        <div className="bike-card">
          <img alt="Pacific Bike" src="/assets/img/Pasific Bike - EXOTIC Sepeda Listrik X-630.jpeg" width={150} height={150} />
          <div className="bike-details">
            <b className="bike-brand">Pacific Bike</b>
            <b className="bike-model">EXOTIC Sepeda Listrik | X 630</b>
            <div className="bike-spec">Beban Maksimum | 150 kg</div>
            <div className="bike-spec">Motor Power | 500 watt </div>
            <div className="bike-spec">Jarak Tempuh | Up to 40 km</div>
            <div className="bike-spec">Kecepatan Maksimum | 40 km/h</div>
          </div>
          <Link to="/rental">
            <button className="rent-button">Sewa Sekarang</button>
          </Link>
        </div>

        <div className="bike-card">
          <img alt="Uwinfly" src="/assets/img/Uwinfly - Uwinfly D60.png" width={100} height={100}/>
          <div className="bike-details">
            <b className="bike-brand">Uwinfly</b>
            <b className="bike-model">Uwinfly D60</b>
            <div className="bike-spec">Beban Maksimum | 150 kg</div>
            <div className="bike-spec">Motor Power | 450 watt</div>
            <div className="bike-spec">Jarak Tempuh | Up to 45 km</div>
            <div className="bike-spec">Kecepatan Maksimum | 33 km/h</div>
          </div>
          <Link to="/rental">
            <button className="rent-button">Sewa Sekarang</button>
          </Link>
        </div>

        <div className="bike-card">
          <img alt="Pacific Bike" src="/assets/img/Pasific Bike - Pasific VENTURA R5.jpeg" width={200} height={200} />
          <div className="bike-details">
            <b className="bike-brand">Pacific Bike</b>
            <b className="bike-model">Pacific VENTURA R5</b>
            <div className="bike-spec">Beban Maksimum | 150 kg</div>
            <div className="bike-spec">Motor Power | 550 watt</div>
            <div className="bike-spec">Jarak Tempuh | Up to 60 km</div>
            <div className="bike-spec">Kecepatan Maksimum | 40 km/h</div>
          </div>
          <Link to="/rental">
            <button className="rent-button">Sewa Sekarang</button>
          </Link>
        </div>

        <div className="bike-card">
          <img alt="Uwinfly D7D" src="/assets/img/Uwinfly - Uwinfly D7D.png" width={185} height={185}/>
          <div className="bike-details">
            <b className="bike-brand">Uwinfly</b>
            <b className="bike-model">Uwinfly D7D</b>
            <div className="bike-spec">Beban Maksimum | 150 kg</div>
            <div className="bike-spec">Motor Power | 450 watt</div>
            <div className="bike-spec">Jarak Tempuh | Up to 40 km</div>
            <div className="bike-spec">Kecepatan Maksimum | 33 km/h</div>
          </div>
          <Link to="/rental">
            <button className="rent-button">Sewa Sekarang</button>
          </Link>
        </div>

        <div className="bike-card">
          <img alt="GODA" src="/assets/img/GODA - GODA ANGEL GD 111.png" width={150} height={150}/>
          <div className="bike-details">
            <b className="bike-brand">GODA</b>
            <b className="bike-model">GODA ANGEL | GD 111</b>
            <div className="bike-spec">Beban Maksimum | 130 kg</div>
            <div className="bike-spec">Motor Power | 550 watt</div>
            <div className="bike-spec">Jarak Tempuh | Up to 40 km</div>
            <div className="bike-spec">Kecepatan Maksimum | 40 km/h</div>
          </div>
          <Link to="/rental">
            <button className="rent-button">Sewa Sekarang</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DaftarSepeda;
