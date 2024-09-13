import React, { useState, useEffect } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import useMediaQuery from '@mui/material/useMediaQuery';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const sectionMap = ['home', 'about', 'services', 'contact'];
export default function ResponsiveTabs({ setMenuOpen }) {
    const [value, setValue] = useState(0);
    const isMobile = useMediaQuery('(max-width:600px)');


    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        section.scrollIntoView({ behavior: 'smooth' });
    };

    const handleChange = (event, newValue) => {
        setValue(newValue);
        scrollToSection(sectionMap[newValue]);
        if (isMobile) { setMenuOpen(false) };

    };


    useEffect(() => {

        const sections = document.querySelectorAll('section');
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const sectionId = entry.target.id;
                        const tabIndex = sectionMap.indexOf(sectionId);
                        if (value !== tabIndex) { setValue(tabIndex); }


                    }
                });
            },
            { threshold: 0.5 }
        );

        sections.forEach((section) => observer.observe(section));

        return () => {
            sections.forEach((section) => observer.unobserve(section));
        };
    }
        , [value]);

    return (
        <ThemeProvider theme={createTheme({
            palette: {
                primary: {
                    main: '#00d8b9',
                },

            },
        })}>

            <Tabs
                orientation={isMobile ? 'vertical' : 'horizontal'}
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="responsive tabs"
                sx={
                    isMobile
                        ? { width: '100%', borderBottom: 1, borderTop: 1, borderColor: 'divider' }
                        : {}
                }
            >
                <Tab sx={{ maxWidth: "100%" }} label="Home" />
                <Tab sx={{ maxWidth: "100%" }} label="About" />
                <Tab sx={{ maxWidth: "100%" }} label="Services" />
                <Tab sx={{ maxWidth: "100%" }} label="Contact" />
            </Tabs>

        </ThemeProvider>
    );
}
