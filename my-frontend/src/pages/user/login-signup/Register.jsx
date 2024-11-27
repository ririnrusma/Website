import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser , faLock } from '@fortawesome/free-solid-svg-icons';

const Register = () => {
    const [email, setEmail] = useState('');
    const [fullName, setFullName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleRegister = (e) => {
        e.preventDefault();
        
        // Validasi form
        if (!email || !fullName || !username || !password) {
            setError('Semua field harus diisi!');
            return;
        }

        // Simulasi pendaftaran
        console.log('Registering:', { email, fullName, username, password });

        // Reset error jika semua field valid
        setError('');
        // Redirect ke halaman beranda atau lakukan pendaftaran di sini
    };

    return (
        <div className="login" id='register'>
            <div className="parent-log">
                <img className="child-log" alt="" src="assets/img/logsign.png" />
                {error && <div className="error-message" style={{ color: 'red' }}>{error}</div>}
                <form onSubmit={handleRegister}>
                    <div className="input-log">
                        <div className="uname-log">
                            <FontAwesomeIcon icon={faUser } /> Email
                        </div>
                        <div className="wrapper-log">
                            <input 
                                type="email" 
                                placeholder="Masukkan email" 
                                className="input-field" 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)} 
                            />
                        </div>
                    </div>

                    <div className="input-log">
                        <div className="uname-log">
                            <FontAwesomeIcon icon={faUser } /> Nama lengkap
                        </div>
                        <div className="wrapper-log">
                            <input 
                                type="text" 
                                placeholder="Masukkan nama lengkap" 
                                className="input-field" 
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)} 
                            />
                        </div>
                    </div>

                    <div className="input-log">
                        <div className="uname-log">
                            <FontAwesomeIcon icon={faUser } /> Nama pengguna
                        </div>
                        <div className="wrapper-log">
                            <input 
                                type="text" 
                                placeholder="Masukkan nama pengguna" 
                                className="input-field" 
                                value={username}
                                onChange={(e) => setUsername(e.target.value)} 
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
                                placeholder="Masukkan kata sandi" 
                                className="input-field" 
                                value={password}
                                onChange={(e) => setPassword(e.target.value)} 
                            />
                        </div>
                    </div>

                    <div className="button-log">
                        <button type="submit" className="button">
                            Daftar
                        </button>
                    </div>
                </form>

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