import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CrmContext } from "../CrmContext";

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const { setIsLoggedIn } = useContext(CrmContext);
  const validateSession = async () => {
    try {
      if (!isLoggedIn) {
        navigate("/", { replace: true });
      }
    } catch (error) {
      console.error("Error during session validation:", error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    if (!isLoggedIn) {
      setIsLoading(true);
      validateSession();
    }
  }, []);

  const handleLogout = () => {
    try {
      localStorage.removeItem("isLoggedIn");
      setIsLoggedIn(false);
      navigate("/", { replace: true });
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Welcome to Real Estate CRM Dashboard</h1>
      <div style={styles.cardContainer}>
        <div style={styles.card} onClick={() => navigate("/leads")}>
          <h2 style={styles.cardTitle}>Manage Leads</h2>
          <p style={styles.cardDescription}>
            View, edit, and create leads to manage client information.
          </p>
        </div>
        <div style={styles.card} onClick={() => navigate("/properties")}>
          <h2 style={styles.cardTitle}>Manage Properties</h2>
          <p style={styles.cardDescription}>
            Add, edit, and view property details categorized as Residential,
            Commercial, and Land.
          </p>
        </div>
      </div>
      <button style={styles.logoutButton} onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    backgroundColor: "#f9f9f9",
    padding: "20px",
  },
  title: {
    fontSize: "36px",
    color: "#333",
    marginBottom: "30px",
    fontWeight: "bold",
    textAlign: "center",
  },
  cardContainer: {
    display: "flex",
    gap: "20px",
    marginBottom: "30px",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  card: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    width: "300px",
    textAlign: "center",
    cursor: "pointer",
    transition: "transform 0.2s ease",
  },
  logoutButton: {
    padding: "10px 20px",
    backgroundColor: "#dc3545",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    fontSize: "16px",
    cursor: "pointer",
  },
};

export default Dashboard;
