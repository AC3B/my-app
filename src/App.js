import React, { useState, useEffect } from "react";
import "./App.css";
import AboutPage from "./Pages/Aboutpage";
import ContactPage from "./Pages/Contactpage";
import ServicesPage from "./Pages/ServicesPage";
import { Box, Tabs, Tab } from "@mui/material";
import Homepage from "./Pages/Homepage";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const sectionMap = ["home", "about", "services", "contact"];
//above is array of pages
function App() {
  const [value, setValue] = useState(0);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: "smooth" });
  };
  function handleChange(event, index) {
    setValue(index);
    scrollToSection(sectionMap[index]);
  }
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id;
            const tabIndex = sectionMap.indexOf(sectionId);
            if (value !== tabIndex) {
              setValue(tabIndex);
            }
          }
        });
      },
      { threshold: 0.5 }
    );
    sections.forEach((section) => observer.observe(section));
    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, [value]);
  return (
    <div className="App">
      <header className="App-header">
        <Box
          sx={{
            width: "100%",
            flexDirection: "row",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <h1>Welcome to My Website</h1>
          <ThemeProvider
            theme={createTheme({
              palette: {
                primary: {
                  main: "#00D8B9",
                },
              },
            })}
          >
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
              >
                <Tab label="Home" />
                <Tab label="About" />
                <Tab label="Services" />
                <Tab label="Contact" />
              </Tabs>
            </Box>
          </ThemeProvider>
        </Box>
      </header>
      <Homepage />
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
