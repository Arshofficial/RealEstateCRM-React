import React from "react";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p style={styles.text}>
        © 2025 Real Estate CRM. All rights reserved. Developed by Utkarsh
      </p>
      <p style={styles.text}>
        <a href="/privacy" style={styles.link}>
          Privacy Policy
        </a>{" "}
        |{" "}
        <a href="/terms" style={styles.link}>
          Terms of Service
        </a>
      </p>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: "#333",
    color: "#fff",
    padding: "20px",
    textAlign: "center",
  },
  text: {
    margin: 0,
    fontSize: "14px",
  },
  link: {
    color: "#007bff",
    textDecoration: "none",
  },
  "@media (max-width: 768px)": {
    footer: {
      textAlign: "center",
    },
    text: {
      fontSize: "12px",
    },
  },
};

export default Footer;
