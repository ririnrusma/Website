import React from "react";

const Header = () => {
  return (
    <header style={styles.header}>
      <div style={styles.logoContainer}>
        <img src="/assets/img/navlogo.png" alt="Veloz Bicycle Logo" style={styles.logo} />
      </div>
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: "#ff3b30",
    display: "flex",
    alignItems: "center",
    padding: "10px 20px",
    color: "white",
    width: "100%",
    position: "fixed", 
    top: 0,
    left: 0,
    zIndex: 1000,
  },
  logoContainer: {
    display: "flex",
    alignItems: "center",
  },
  logo: {
    height: "40px",
  },
  title: {
    marginLeft: "10px",
    fontSize: "20px",
    fontWeight: "bold",
  },
};

export default Header;
