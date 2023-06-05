import React from 'react'
import { NavBar } from '../components/NavBar/NavBar'
import { LandingBody } from '../components/LandingBody/LandingBody'
import { Footer } from '../components/Footer/Footer'

export const Home = () => {
  return (
    <div>
        <NavBar />
        <LandingBody />
        <Footer />
    </div>
  )
}
