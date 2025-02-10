import "./App.css";
import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useNavigate,
} from "react-router-dom";
import { CrmContext } from "./CrmContext";
import Properties from "./components/Properties";
import Leads from "./components/Leads";
import Lead from "./components/Lead";
import Property from "./components/Property";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Header from "./components/commonComponents/Header";
import Footer from "./components/commonComponents/Footer";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn")
  );

  const handleLogin = () => {
    localStorage.setItem("isLoggedIn", true);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  return (
    <CrmContext.Provider
      value={{ isLoggedIn, handleLogin, handleLogout, setIsLoggedIn }}
    >
      <Router>
        <Header />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" />} />
            <Route
              index
              element={isLoggedIn ? <Navigate to="/dashboard" /> : <Login />}
            />
            <Route
              path="/dashboard"
              element={isLoggedIn ? <Dashboard /> : <Navigate to="/" />}
            />
            <Route
              path="/leads"
              element={isLoggedIn ? <Leads /> : <Navigate to="/" />}
            />
            <Route
              path="/properties"
              element={isLoggedIn ? <Properties /> : <Navigate to="/" />}
            />
            <Route
              path="/leads/:id"
              element={isLoggedIn ? <Lead /> : <Navigate to="/" />}
            />
            <Route
              path="/properties/:id"
              element={isLoggedIn ? <Property /> : <Navigate to="/" />}
            />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </CrmContext.Provider>
  );
}

export default App;
