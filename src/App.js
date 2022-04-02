import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import Login from "./views/Login";
import Dashboard from "./views/Dashboard";
import Footer from "./components/Footer";
import AccountModal from "./components/AccountModal";

import "./App.scss";

const App = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <Navbar onClick={() => setShowModal(true)} />

      <Routes>
        <Route
          path="/"
          element={<Home handleClick={() => setShowModal(true)}></Home>}
        />
        <Route path="/login" element={<Login></Login>} />
        <Route path="/dashboard" element={<Dashboard></Dashboard>} />
      </Routes>

      <Footer />
      <AccountModal show={showModal} handleClose={() => setShowModal(false)} />
    </>
  );
};

export default App;
