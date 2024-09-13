import React from 'react'
import { createTheme, ThemeProvider, styled } from '@mui/material';
import Paper from '@mui/material/Paper';
export default function HomePage() {
  const DemoPaper = styled(Paper)(({ theme }) => ({
    width: 'fit',
    height: 'fit',
    padding: theme.spacing(1),
    fontSize: "1.95rem",
    fontFamily: "Barlow Condensed, sans-serif",
    color: '#00d8b9',
    fontWeight: 500,
    marginTop:'1rem',
    textAlign: 'center',
    alignTracks:'center'
  }));
  const darkTheme = createTheme({
    palette: {
      mode: 'dark' } });
  return (
    <section id="home">
      <div className='home-content'>
        <h3>Boosting Website</h3>
        <h3>Rankings & Traffic</h3>
        <ThemeProvider theme={darkTheme}>
          <DemoPaper square={false}>SEO SPECIALIST</DemoPaper>
        </ThemeProvider>

        <p>Hello world, my name is Alfonso Cebrera</p>
      </div>
     </section>
  )
}
