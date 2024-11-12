import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser , faLock } from '@fortawesome/free-solid-svg-icons';

const Register = () => {

    return (
        <div className="login" id='register'>
            <img className="logo-log" alt="" src="assets/img/bg front end.jpg" />
            <div className="parent-log">
                <img className="child-log" alt="" src="assets/img/logsign.png" />
                <div className="input-log">
                    <div className="uname-log">
                        <FontAwesomeIcon icon={faUser } /> Email
                    </div>
                    <div className="wrapper-log">
                        <input type="email" placeholder="Masukkan email" className="input-field" />
                    </div>
                </div>

                <div className="input-log">
                    <div className="uname-log">
                        <FontAwesomeIcon icon={faUser } /> Nama lengkap
                    </div>
                    <div className="wrapper-log">
                        <input type="text" placeholder="Masukkan nama lengkap" className="input-field" />
                    </div>
                </div>

                <div className="input-log">
                    <div className="uname-log">
                        <FontAwesomeIcon icon={faUser } /> Nama pengguna
                    </div>
                    <div className="wrapper-log">
                        <input type="text" placeholder="Masukkan nama pengguna" className="input-field" />
                    </div>
                </div>

                <div className="input-log">
                    <div className="uname-log">
                        <FontAwesomeIcon icon={faLock} /> Kata sandi
                    </div>
                    <div className="wrapper-log">
                        <input type="password" placeholder="Masukkan kata sandi" className="input-field" />
                    </div>
                </div>

                <div className="button-log">
                    <Link to="/beranda" className="button">
                        Daftar
                    </Link>
                </div>

                <div className="account-check-log">
                    <div className="tidakPunyaAkun">Punya akun?</div>
                    <Link to="/login" className="link-log">
                        Masuk
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Register;