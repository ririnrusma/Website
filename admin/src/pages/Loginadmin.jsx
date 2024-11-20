// src/pages/LoginAdmin.jsx
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Loginadmin = () => {
  return (
    <div style={styles.body}>
      <div style={styles.loginContainer}>
        <div style={styles.loginBox}>
          <img alt="Veloz Bicycle Logo" src="/assets/images/logohitam.png" style={styles.logo} />
          <h1 style={styles.title}>Login</h1>
          <form>
            <div className="mb-3">
              <h6 className="label">Nama pengguna atau email</h6>
              <input className="form-control" id="username" placeholder="Nama pengguna atau email" type="text" defaultValue="keyalderen@gmail.com" />
            </div>
            <div className="mb-3">
              <h6 className="label">Kata sandi</h6>
              <input className="form-control" id="password" placeholder="Kata sandi" type="password" defaultValue="********" />
            </div>
            <a href="/dashboard" className="btn btn-login" style={styles.button}>
              Masuk
            </a>
          </form>
        </div>
      </div>
    </div>
  );
};

const styles = {
  body: {
    height: "100vh",
    margin: 0,
    fontFamily: "Arial, sans-serif",
    backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/assets/images/bg.jpg')",
    backgroundSize: "cover",
  },
  loginContainer: {
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  loginBox: {
    backgroundColor: "rgba(170, 170, 130, 0.7 )",
    padding: "30px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    width: "30%",
  },

  loginBoximg: {
    marginLeft: "50px",
  },

  logo: {
    width: "200px",
    marginBottom: "20px",
    marginLeft: "70px",
  },
  title: {
    fontSize: "24px",
    marginBottom: "20px",
    marginLeft: "150px",
    color: "white",
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#ff3b3f",
    color: "white",
    borderRadius: "10px",
    padding: "10px 20px",
    border: "none",
    width: "100%",
    textDecoration: "none",
    display: "block",
    textAlign: "center",
  },
  label: {
    textAlign: "left", // Aligns the labels to the left
    marginBottom: "5px", // Adds spacing between label and input field
  },
};

export default Loginadmin;
