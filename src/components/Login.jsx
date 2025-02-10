import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CrmContext } from "../CrmContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const { setIsLoggedIn } = useContext(CrmContext);
  const checkLoginStatus = () => {
    try {
      if (isLoggedIn) {
        navigate("/dashboard", { replace: true });
      }
    } catch (error) {
      console.error("Error while checking login status:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (!isLoading && !isLoggedIn) {
      setIsLoading(true);
      checkLoginStatus();
    }
  }, [navigate]);

  const handleLogin = (e) => {
    e.preventDefault();
    try {
      if (email === "test@gmail.com" && password === "test123") {
        localStorage.setItem("isLoggedIn", true);
        setIsLoggedIn(true);
        navigate("/dashboard");
      } else {
        alert("Invalid credentials! Use test@gmail.com / test123");
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  const handleSignUp = () => {
    alert("Sign Up functionality to be implemented.");
  };

  const handleForgotPassword = () => {
    alert("Forgot Password functionality to be implemented.");
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Real Estate CRM</h1>
      <div style={styles.card}>
        <h2 style={styles.subtitle}>Login</h2>
        <form onSubmit={handleLogin}>
          <div style={styles.formGroup}>
            <label htmlFor="email" style={styles.label}>
              Email
            </label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={styles.input}
            />
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="password" style={styles.label}>
              Password
            </label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={styles.input}
            />
          </div>
          <button type="submit" style={styles.loginButton}>
            Login
          </button>
        </form>
        <button style={styles.secondaryButton} onClick={handleSignUp}>
          Sign Up
        </button>
        <button style={styles.linkButton} onClick={handleForgotPassword}>
          Forgot Password
        </button>
      </div>
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
    backgroundColor: "#f4f4f4",
    padding: "20px",
  },
  title: {
    fontSize: "36px",
    fontWeight: "bold",
    marginBottom: "20px",
    color: "#333",
  },
  card: {
    backgroundColor: "#fff",
    padding: "30px",
    borderRadius: "12px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    maxWidth: "400px",
    width: "100%",
  },
  subtitle: {
    fontSize: "24px",
    fontWeight: "600",
    marginBottom: "20px",
    color: "#007bff",
  },
  formGroup: {
    marginBottom: "20px",
    textAlign: "left",
  },
  label: {
    display: "block",
    marginBottom: "8px",
    fontSize: "16px",
    color: "#555",
  },
  input: {
    width: "100%",
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #ddd",
    fontSize: "14px",
    boxSizing: "border-box",
  },
  loginButton: {
    width: "100%",
    padding: "12px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    fontSize: "16px",
    cursor: "pointer",
    marginTop: "10px",
  },
  secondaryButton: {
    width: "100%",
    padding: "12px",
    backgroundColor: "#6c757d",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    fontSize: "16px",
    cursor: "pointer",
    marginTop: "10px",
  },
  linkButton: {
    width: "100%",
    padding: "10px",
    backgroundColor: "transparent",
    color: "#007bff",
    border: "none",
    fontSize: "14px",
    cursor: "pointer",
    marginTop: "10px",
    textDecoration: "underline",
  },
};

export default Login;
