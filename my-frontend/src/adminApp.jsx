import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from "./component/admin/Header";
import Sidebar from "./component/admin/Sidebar";
import Dashboard from "./pages/admin/Dashboard";
import JenisSepeda from "./pages/admin/JenisSepeda";
import Loginadmin from "./pages/admin/Loginadmin";
import Pengguna from "./pages/admin/Pengguna";
import Transaksi from "./pages/admin/Transaksi";

const AppContent = () => {
  const location = useLocation(); // Pastikan useLocation diimpor
  const noLayoutPages = ["/"]; // Halaman tanpa layout
  const isNoLayoutPage = noLayoutPages.includes(location.pathname);

  return (
    <div style={{ display: "flex" }}>
      {/* Sidebar ditampilkan jika bukan halaman tanpa layout */}
      {!isNoLayoutPage && <Sidebar />}
      <div style={{ flexGrow: 1, marginTop: isNoLayoutPage ? "0" : "70px" }}>
        {/* Header ditampilkan jika bukan halaman tanpa layout */}
        {!isNoLayoutPage && <Header />}
        <Routes>
          {/* Define Routes */}
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
