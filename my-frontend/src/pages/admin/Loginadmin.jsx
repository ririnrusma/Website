import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import './App.css'; 

const Loginadmin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="login">
      <div className="parent-log">
        <h1 className="title">Admin</h1>
        <form>
          <div className="input-log">
            <div className="uname-log">
              <FontAwesomeIcon icon={faUser} /> Nama pengguna atau email
            </div>
            <div className="wrapper-log">
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Masukkan nama pengguna atau email"
                className="input-field"
              />
            </div>
          </div>
          <div className="input-log">
            <div className="uname-log">
              <FontAwesomeIcon icon={faLock} /> Kata sandi
            </div>
            <div className="wrapper-log">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Masukkan kata sandi"
                className="input-field"
              />
            </div>
          </div>
          <Link to="/dashboard" className="button-log">
            Masuk
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Loginadmin;
