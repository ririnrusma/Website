import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";

// Import Admin 
import Header from "./component/admin/Header";
import Sidebar from "./component/admin/Sidebar";
import Dashboard from "./pages/admin/Dashboard";
import JenisSepeda from "./pages/admin/JenisSepeda";
import TransaksiAdmin from "./pages/admin/Transaksi";
import Pengguna from "./pages/admin/Pengguna";
import Loginadmin from "./pages/admin/Loginadmin";

// Import User 
import Login from "./pages/user/login-signup/Login";
import Lokasi from "./pages/user/Lokasi/Lokasi";
import AkunProfil from "./pages/user/Profil/AkunProfil";
import DaftarSepeda from "./pages/user/Daftar Sepeda/DaftarSepeda";
import Rental from "./pages/user/Rental/Rental";
import Sewa from "./pages/user/Rental/Sewa";
import RentalAcc from "./pages/user/Rental/RentalAcc";
import Beranda from "./pages/user/Beranda/Beranda";
import Kontak from "./pages/user/Kontak kami/Kontak";
import TransaksiUser  from "./pages/user/Rental/Transaksi";
import Register from "./pages/user/login-signup/Register";
import Konfirmasi from "./pages/user/Kontak kami/Konfirmasi";
import Navbar from "./component/user/navbar/Navbar";
import Footer from "./component/user/footer/Footer";
import Pembayaran from "./pages/user/Rental/Pembayaran";

const AppContent = ({ isAdmin, setIsAdmin, isLoggedIn, setIsLoggedIn }) => {
  const location = useLocation();
  const noLayoutPages = ["/"];
  const isNoLayoutPage = noLayoutPages.includes(location.pathname);

  // Admin Routes
  if (isAdmin) {
    return (
      <div style={{ display: "flex" }}>
        {!isNoLayoutPage && <Sidebar />}
        <div style={{ flexGrow: 1, marginTop: isNoLayoutPage ? "0" : "70px" }}>
          {!isNoLayoutPage && <Header />}
          <Routes>
            <Route path="/" element={<Loginadmin />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/jenis-sepeda" element={<JenisSepeda />} />
            <Route path="/transaksi" element={<TransaksiAdmin />} />
            <Route path="/pengguna" element={<Pengguna />} />
            <Route path="*" element={<Navigate to="/dashboard" />} /> {/* Redirect jika rute tidak ditemukan */}
          </Routes>
        </div>
      </div>
    );
  }

  // User Routes
  return (
    <div>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Routes>
        <Route path="/" element={<Beranda />} />
        <Route path="/beranda" element={<Beranda />} />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} setIsAdmin={setIsAdmin} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/lokasi" element={<Lokasi />} />
        <Route path="/daftarsepeda" element={<DaftarSepeda />} />
        <Route path="/rental" element={<Rental />} />
        <Route path="/sewa" element={<Sewa />} />
        <Route path="/rentalacc" element={<RentalAcc />} />
        <Route path="/transaksi" element={<TransaksiUser  />} />
        <Route path="/kontakkami" element={<Kontak />} />
        <Route path="/konfirmasi" element={<Konfirmasi />} />
        <Route path="/profil" element={<AkunProfil />} />
        <Route path="/pembayaran" element={<Pembayaran />} />
        <Route path="*" element={<Navigate to="/" />} /> 
      </Routes>
      <Footer />
    </div>
  );
};

const App = () => {
  const [isAdmin, setIsAdmin] = useState(false); 
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <AppContent 
        isAdmin={isAdmin} 
        isLoggedIn={isLoggedIn} 
        setIsLoggedIn={setIsLoggedIn} 
        setIsAdmin={setIsAdmin}
      />
    </Router>
  );
};

export default App;