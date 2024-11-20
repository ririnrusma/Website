import React from "react";

const JenisSepeda = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Jenis Sepeda</h2>
      <button style={styles.addButton}>Tambah</button>
      <div style={styles.tableWrapper}>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>No</th>
              <th style={styles.th}>Nama Sepeda Listrik</th>
              <th style={styles.th}>Merek</th>
              <th style={styles.th}>Jumlah</th>
              <th style={styles.th}>Aksi</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.td}>1</td>
              <td style={styles.td}>Sepeda</td>
              <td style={styles.td}>mmm</td>
              <td style={styles.td}>3</td>
              <td style={styles.td}>
                <button style={styles.editButton}>Edit</button>
                <button style={styles.deleteButton}>Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

const styles = {
  container: {
    marginLeft: "200px", // Offset untuk sidebar
    padding: "20px",
    backgroundColor: "#fcefe3", // Warna latar belakang lembut
    minHeight: "100vh",
  },
  heading: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  addButton: {
    backgroundColor: "#ff6b6b",
    color: "white",
    border: "none",
    padding: "10px 20px",
    borderRadius: "20px",
    cursor: "pointer",
    marginBottom: "20px",
    fontWeight: "bold",
  },
  tableWrapper: {
    borderTop: "5px solid #a855f7", // Garis ungu di atas tabel
    borderRadius: "10px",
    overflow: "hidden", // Agar border terlihat rapi
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", // Bayangan tabel
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    backgroundColor: "#fff", // Warna dasar tabel
  },
  th: {
    backgroundColor: "#f9f9f9", // Warna header tabel
    fontWeight: "bold",
    textAlign: "left",
    padding: "10px",
    borderBottom: "1px solid #ddd",
  },
  td: {
    padding: "10px",
    textAlign: "left",
    borderBottom: "1px solid #ddd",
  },
  editButton: {
    backgroundColor: "#4caf50",
    color: "white",
    border: "none",
    padding: "5px 10px",
    borderRadius: "5px",
    cursor: "pointer",
    marginRight: "5px",
  },
  deleteButton: {
    backgroundColor: "#f44336",
    color: "white",
    border: "none",
    padding: "5px 10px",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default JenisSepeda;
