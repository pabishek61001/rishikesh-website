import React, { useState, useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import theme from './theme/Theme'
import { ThemeProvider } from '@mui/material/styles';
import ScrollToTop from 'react-scroll-to-top'
import { ArrowUpward } from '@mui/icons-material'
import { Fab, Zoom } from '@mui/material';
import PageNotfound from './pages/PageNotfound'
import Scroller from './components/Scroller'

import "../src/css/App.css"
import PortfolioShowcase from './pages/PortfolioShowcase'



const App = () => {

  useEffect(() => {
    AOS.init({ duration: 1000 })
  }, [])

  const [visible, setVisible] = useState(false);

  const handleScroll = () => {
    setVisible(window.scrollY > 300);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };




  return (
    <>



      <Zoom in={visible}>
        <Fab
          color="inherit"
          size="small"
          onClick={scrollToTop}
          sx={{
            position: 'fixed',
            bottom: 20,
            right: 20,
            zIndex: 1000,
          }}
        >
          <ArrowUpward />
        </Fab>
      </Zoom>


      <BrowserRouter>
        <Scroller />

        <Routes>
          <Route path='' element={<LandingPage />}></Route>
          <Route path='portfolio/:title' element={<PortfolioShowcase />}></Route>


          {/* <Route path='about' element={<AboutPage />}></Route>
          <Route path='services' element={<Services />}></Route>
          <Route path='why-us' element={<WhyusPage />}></Route>
          <Route path='contact-us' element={<ContactUs />}></Route> */}

          <Route path='*' element={<PageNotfound />}></Route>

        </Routes>
      </BrowserRouter>
    </>

  )
}

export default App