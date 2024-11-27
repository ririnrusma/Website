import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/user/login-signup/Login";
import Lokasi from "./pages/user/Lokasi/Lokasi";
import AkunProfil from "./pages/user/Profil/AkunProfil";
import DaftarSepeda from "./pages/user/Daftar Sepeda/DaftarSepeda";
import Rental from "./pages/user/Rental/Rental";
import Sewa from "./pages/user/Rental/Sewa";
import RentalAcc from "./pages/user/Rental/RentalAcc";
import Beranda from "./pages/user/Beranda/Beranda";
import Kontak from "./pages/user/Kontak kami/Kontak";
import Register from "./pages/user/login-signup/Register";
import Konfirmasi from "./pages/user/Kontak kami/Konfirmasi";
import Navbar from "./component/user/navbar/Navbar";
import Footer from "./component/user/footer/Footer";
import Pembayaran from "./pages/user/Rental/pembayaran";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <div>
        <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        <Routes>
          <Route path="/" element={<Beranda />} />
          <Route path="/beranda" element={<Beranda />} />
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/lokasi" element={<Lokasi />} />
          <Route path="/daftarsepeda" element={<DaftarSepeda />} />
          <Route path="/rental" element={<Rental />} />
          <Route path="/sewa" element={<Sewa />} />
          <Route path="/rentalacc" element={<RentalAcc />} />
          <Route path="/kontakkami" element={<Kontak />} />
          <Route path="/konfirmasi" element={<Konfirmasi />} />         
          <Route path="/pembayaran" element={<Pembayaran />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
