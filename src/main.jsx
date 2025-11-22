import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GlobalStyles } from './styles/GlobalStyles'
import { HeroSection } from './pages/Hero/HeroSection'


import './fonts/Sports-World-Regular.otf'
import './fonts/Sports-World-Regular.ttf'
import About from './pages/About'
import Fusion from './pages/Fusion'
import Method from './pages/Method'
import Pillars from './pages/Pillars'
import Circles from './pages/Circles'
import OurServices from './pages/OurServices'
import Team from './pages/Team'
import Footer from './pages/Footer'
import Rights from './components/Rights'
import Certification from './pages/Certification'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyles />
    <HeroSection />
    <About />
    <Fusion />
    <Method />
    <Pillars />
    <Circles />
    <OurServices />
    <Certification />
    <Team />
    <Footer />
    <Rights />
  </StrictMode>
)
