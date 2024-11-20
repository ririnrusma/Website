import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import JenisSepeda from "./pages/JenisSepeda";
import Transaksi from "./pages/Transaksi";
import Pengguna from "./pages/pengguna";
import Loginadmin from "./pages/Loginadmin";

const AppContent = () => {
  const location = useLocation();
  const noLayoutPages = ["/"];
  const isNoLayoutPage = noLayoutPages.includes(location.pathname);

  return (
    <div style={{ display: "flex" }}>
      {/* Tampilkan Sidebar jika halaman bukan no-layout */}
      {!isNoLayoutPage && <Sidebar />}
      <div style={{ flexGrow: 1, marginTop: isNoLayoutPage ? "0" : "70px" }}>
        {/* Tampilkan Header jika halaman bukan no-layout */}
        {!isNoLayoutPage && <Header />}
        <Routes>
          <Route path="/" element={<Loginadmin />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/jenis-sepeda" element={<JenisSepeda />} />
          <Route path="/transaksi" element={<Transaksi />} />
          <Route path="/pengguna" element={<Pengguna />} />
        </Routes>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
