import React, { useState } from 'react';
import './App.css';
import AboutPage from './Pages/AboutPage';
import ContactPage from './Pages/ContactPage';
import ServicesPage from './Pages/ServicesPage';
import LogoIcon from './components/LogoIcon';
import HomePage from './Pages/HomePage';
import ResponsiveNav from './components/ResponsiveNav';
import { createTheme, ThemeProvider } from '@mui/material';
function App() {
  const [menuOpen, setMenuOpen] = useState(false);


  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const mainTheme = createTheme({
    typography: {
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'Lato',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
    }
  });



  return (
    <ThemeProvider theme={mainTheme}>
    <div className="App">
      <header className="App-header">

        <LogoIcon type='logo'/>
        <button className="menu-toggle" onClick={toggleMenu}>
          <LogoIcon type='nav-bar' />
        </button>
        <div className='web-nav'>
          <ResponsiveNav setMenuOpen={setMenuOpen} />
        </div>
        <div className={`menu ${menuOpen ? 'open' : ''}`}>
          <ResponsiveNav setMenuOpen={setMenuOpen} />
        </div>
      </header>
      <HomePage />
      <AboutPage />
      <ServicesPage />
      <ContactPage />
      </div>
    </ThemeProvider>
  );
}

export default App;
