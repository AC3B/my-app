import React from 'react';
import './App.css';
import AboutPage from './Pages/Aboutpage';
import ContactPage from './Pages/Contactpage';
import ServicesPage from './Pages/ServicesPage';


function App() { 

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My Website</h1>
        <nav>
          <ul>
            <li>
              <button onClick={() => scrollToSection('about')}>About</button>
            </li>
            <li>
              <button onClick={() => scrollToSection('services')}>Services</button>
            </li>
            <li>
              <button onClick={() => scrollToSection('contact')}>Contact</button>
            </li>
          </ul>
        </nav>
      </header>

      <AboutPage />
      <ServicesPage />
      <ContactPage />

      <footer>
        <p>&copy; 2024 My Website. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;

