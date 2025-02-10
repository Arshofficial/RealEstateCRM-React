import React, { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header style={styles.header}>
      <h1 style={styles.logo}>Real Estate CRM</h1>
      <nav>
        <button style={styles.hamburger} onClick={toggleMenu}>
          ☰
        </button>
        <ul
          style={{
            ...styles.navList,
            ...(menuOpen ? styles.navListOpen : styles.navListClosed),
          }}
        >
          <li style={styles.navItem}>
            <a href="/dashboard" style={styles.navLink}>
              Dashboard
            </a>
          </li>
          <li style={styles.navItem}>
            <a href="/leads" style={styles.navLink}>
              Leads
            </a>
          </li>
          <li style={styles.navItem}>
            <a href="/properties" style={styles.navLink}>
              Properties
            </a>
          </li>
          <li style={styles.navItem}>
            <a href="/logout" style={styles.navLink}>
              Logout
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    backgroundColor: "#007bff",
    color: "#fff",
  },
  logo: {
    fontSize: "24px",
    fontWeight: "bold",
  },
  navList: {
    listStyle: "none",
    display: "flex",
    gap: "15px",
    margin: 0,
    padding: 0,
  },
  navListClosed: {
    display: "none",
  },
  navListOpen: {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    top: "50px",
    right: "10px",
    backgroundColor: "#007bff",
    padding: "10px",
    borderRadius: "8px",
  },
  navItem: {
    margin: 0,
  },
  navLink: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "18px",
  },
  hamburger: {
    display: "none",
    background: "none",
    border: "none",
    fontSize: "24px",
    color: "#fff",
    cursor: "pointer",
  },
  "@media (max-width: 768px)": {
    navList: {
      display: "none",
    },
    hamburger: {
      display: "block",
    },
  },
};

export default Header;
