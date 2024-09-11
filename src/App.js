import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import OurProducts from "./Pages/OurProducts";
// import SignIn from "./Pages/SignIn";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
// import SignUp from "./Pages/SignUp";

import BSignIn from "./Pages/BSignIn";
import BSignUp from "./Pages/BSignUp";
import BContactUs from "./Pages/BContactUs";

const App = () =>  {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/products" element={<OurProducts />} />
        {/* <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} /> */}

        <Route path="/BSignIn" element={<BSignIn />} />
        <Route path="/BSignUp" element={<BSignUp />} />
        <Route path="/BContactUs" element={<BContactUs />} />

      </Routes>
    </Router>
  );
};

export default App;
