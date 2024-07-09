import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { DarkModeProvider } from './DarkModeContext';
import Navbar from './components/menu/Navbar';
import Welcome from './components/Welcome';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/footer/Footer';

function App() {
  const { darkMode, setDarkMode } = DarkModeProvider;
  return (
    <DarkModeProvider>
      <Router>
        <div>
          <div style={{ marginTop: '64px' }}>
            <Navbar />
            <Routes>
              <Route path="/" element={<Welcome />} />
              <Route path="/about" element={<AboutMe />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </DarkModeProvider>
  );
}

export default App;
