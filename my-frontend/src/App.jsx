import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/login-signup/login';
import Lokasi from "./pages/Lokasi/Lokasi";
import AkunProfil from './pages/Profil/akunProfil';
import DaftarSepeda from "./pages/Daftar Sepeda/DaftarSepeda";
import Rental from "./pages/Rental/Rental";
import Sewa from "./pages/Rental/Sewa";
import RentalAcc from "./pages/Rental/RentalAcc";
import Beranda from "./pages/Beranda/Beranda";
import Kontak from "./pages/Kontak kami/Kontak";
import Transaksi from "./pages/Rental/Transaksi";
import Register from './pages/login-signup/Register';
import Konfirmasi from './pages/Kontak kami/konfirmasi';
import { useState } from "react";
import Navbar from './component/navbar/navbar'; 
import Footer from './component/footer/footer'; 

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <AppContent isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
    </Router>
  );
}

function AppContent({ isLoggedIn, setIsLoggedIn }) {
  return (
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
        <Route path="/transaksi" element={<Transaksi />} />
        <Route path="/kontakkami" element={<Kontak />} />
        <Route path="/konfirmasi" element={<Konfirmasi />} />
        <Route path="/profil" element={<AkunProfil />} />
      </Routes>
      <Footer /> 
    </div>
  );
}

export default App;