import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./component/navbar/navbar";
import Footer from "./component/footer/footer";
import Lokasi from "./pages/Lokasi/Lokasi";
import DaftarSepeda from "./pages/Daftar Sepeda/DaftarSepeda";
import Rental from "./pages/Rental/Rental";
import RentalAcc from "./pages/Rental/RentalAcc";
import Beranda from "./pages/Beranda/Beranda";
import KontakKami from "./pages/Kontak kami/KontakKami";
import Profil from "./pages/Profil/profil";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        
        <Routes>
          <Route path="/lokasi" element={<Lokasi />} />
          <Route path="/daftarsepeda" element={<DaftarSepeda />} />
          <Route path="/rental" element={<Rental />} />
          <Route path="/rentalacc" element={<RentalAcc />} />
        </Routes>
    
        <Footer />
      </div>
    </Router>
  );
}

export default App;