import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import "./profile.css";

const AkunProfil = () => {
  const [profile, setProfile] = useState({ fullName: "", username: "", email: "" });
  const [modal, setModal] = useState(null);

  useEffect(() => {
    // Fetch profil user dari backend
    fetch("http://localhost:5000/api/profile", {
      method: "GET",
      credentials: "include", // jika menggunakan cookie untuk autentikasi
    })
      .then((res) => res.json())
      .then((data) => setProfile(data))
      .catch((err) => console.error(err));
  }, []);

  const closeModal = () => setModal(null);

  return (
    <div className="prof-container" id="profil">
      <div className="profile-container">
        <div className="profile-photo-border">
          <img
            className="profile-photo"
            src={profile.photo || "assets/img/default-avatar.jpg"} // Foto default jika tidak ada
            alt="Profile"
          />
        </div>
        <div className="profile-name-section">
          <h1 className="profile-name">{profile.fullName}</h1>
          <p className="profile-subtitle">{profile.username}</p>
        </div>
        <Link to="/beranda" className="logout-button">Logout</Link>
      </div>

      <div className="options-container">
        <div className="option-item" onClick={() => setModal("uploadPhoto")}>
          <span>Ubah Foto Profil</span>
        </div>
        <div className="option-item" onClick={() => setModal("editProfile")}>
          <span>Edit Profil</span>
        </div>
        <div className="option-item" onClick={() => setModal("changePassword")}>
          <span>Ubah Kata Sandi</span>
        </div>
        <Link to="/transaksi" className="option-item">
          <span>Daftar Transaksi</span>
        </Link>
      </div>

      {modal === "uploadPhoto" && <UploadPhotoModal closeModal={closeModal} />}
      {modal === "editProfile" && (
        <EditProfileModal closeModal={closeModal} profile={profile} setProfile={setProfile} />
      )}
      {modal === "changePassword" && <ChangePasswordModal closeModal={closeModal} />}
    </div>
  );
};

export default AkunProfil;
