import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from "./component/navbar/navbar";
import Footer from "./component/footer/footer";
import Login from './pages/login-signup/login';
import Lokasi from "./pages/Lokasi/Lokasi";
import DaftarSepeda from "./pages/Daftar Sepeda/DaftarSepeda";
import Rental from "./pages/Rental/Rental";
import Sewa from "./pages/Rental/Sewa";
import RentalAcc from "./pages/Rental/RentalAcc";
import Beranda from "./pages/Beranda/Beranda";
import KontakKami from "./pages/Kontak kami/KontakKami";
import Transaksi from "./pages/Rental/Transaksi";
import Register from './pages/login-signup/Register';
import { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <AppContent isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
    </Router>
  );
}

function AppContent({ isLoggedIn, setIsLoggedIn }) {
  const location = useLocation();
  const isAuthPage = location.pathname === '/login' || location.pathname === '/register';

  return (
    <div>
      {!isAuthPage && <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />}
      
      <Routes>
        <Route path="/beranda" element={<Beranda />} />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/lokasi" element={<Lokasi />} />
        <Route path="/daftarsepeda" element={<DaftarSepeda />} />
        <Route path="/rental" element={<Rental />} />
        <Route path="/sewa" element={<Sewa />} />
        <Route path="/rentalacc" element={<RentalAcc />} />
        <Route path="/transaksi" element={<Transaksi />} />
      </Routes>

      {!isAuthPage && <Footer />}
    </div>
  );
}

export default App;