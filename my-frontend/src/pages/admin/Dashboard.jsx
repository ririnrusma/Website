import React from "react";

const Dashboard = () => {
  return (
    <div style={styles.container} id="admin">
      <h2>Selamat datang Admin</h2>
    </div>
  );
};

const styles = {
  container: {
    display: "flex", 
    justifyContent: "center", 
    alignItems: "center", 
    height: "100vh", 
    marginLeft: "200px",
    backgroundColor: "#f8f8f8",
  },
};

export default Dashboard;
