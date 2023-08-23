import React from 'react';
import './App.css';
import Home from './Pages/Home/home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Components/NavBar/navbar';
import Career from './Pages/Career/career';
import Fun from './Pages/Fun/fun';
import Footer from './Components/Footer/footer';

function App() {
  return (
    <div>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/career" element={<Career />} />
        <Route path="/fun" element={<Fun />} />
      </Routes>
      <Footer />
    </Router>

    </div>
  );
}

export default App;
