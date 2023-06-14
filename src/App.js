import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/nav/NavBar';
import Home from './pages/home/Home';
import Footer from './components/footer/Footer';
import Quote from './pages/quote/Quote';
import Contact from './pages/contact/Contact';
import About from './pages/about/About';

function App() {
  return (
    <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/quote" element={<Quote />} />
          <Route path="/aboutus" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
    </Router>
  );
}

export default App;
