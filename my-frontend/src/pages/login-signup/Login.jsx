import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser , faLock } from '@fortawesome/free-solid-svg-icons';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import './style.css'; 

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        console.log('Logging in with:', username, password);
    };

    return (
        <div className="login" id="login">
            <img className="logo-log" alt="" src="assets/img/bg front end.jpg" />
            <div className="parent-log">
                <img className="child-log" alt="" src="assets/img/logsign.png" />                
                <div className="input-log">
                    <div className="uname-log">
                        <FontAwesomeIcon icon={faUser } /> Nama pengguna atau email
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

                <Link to="/beranda" className="button-log" onClick={handleLogin}>
                    <div className="button">Masuk</div>
                </Link>

                <div className="account-check-log">
                    <div className="separator-log" />
                    <div className="or-log">atau</div>
                    <div className="separator-log" />
                </div>

                <div className="social-button-log">
                    <div className="flatColorIconsgoogleParent">
                        <FontAwesomeIcon icon={faGoogle} className="flatColorIconsgoogle" />
                        <div className="masukDenganGoogle">Masuk dengan Google</div>
                    </div>
                </div>

                <div className="account-check-log">
                    <div className="tidakPunyaAkun">Tidak punya akun?</div>
                    <Link to="/register" className="link-log">Buat akun</Link>
                </div>
            </div>
        </div>
    );
};

export default Login;