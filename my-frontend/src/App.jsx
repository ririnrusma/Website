import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./component/navbar/navbar";
import Footer from "./component/footer/footer";
import Lokasi from "./pages/Lokasi/Lokasi";
import DaftarSepeda from "./pages/Daftar Sepeda/DaftarSepeda";
import Rental from "./pages/Rental/Rental";
import Sewa from "./pages/Rental/Sewa";
import RentalAcc from "./pages/Rental/RentalAcc";
import Beranda from "./pages/Beranda/Beranda";
import KontakKami from "./pages/Kontak kami/KontakKami";
import Transaksi from "./pages/Rental/Transaksi";
import { useState } from "react";

function App() {

  return (
    <Router>
      <div>
        <Navbar />
        
        <Routes>
          <Route path="/lokasi" element={<Lokasi />} />
          <Route path="/daftarsepeda" element={<DaftarSepeda />} />
          <Route path="/rental" element={<Rental />} />
          <Route path="/sewa" element={<Sewa />} />
          <Route path="/rentalacc" element={<RentalAcc />} />
          <Route path="/transaksi" element={<Transaksi />} />
        </Routes>
    
        <Footer />
      </div>
    </Router>
  );
}

export default App;