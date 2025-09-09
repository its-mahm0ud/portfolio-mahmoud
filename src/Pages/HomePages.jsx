import React from 'react'
import NavbarComponent from '../Components/NavbarComponent'
import Hero from '../Components/Hero'
import Projects from '../Components/Projects'
import Skills from '../Components/Skills'
import ContactMe from '../Components/ContactMe'
import FooterComponent from './../Components/FooterComponent';

export default function HomePages() {
  return (
    <div className="bg-gradient-to-r from-fBackGround to-sBackGround overflow-x-hidden">
      <NavbarComponent />
      <Hero />
      <Projects />
      <Skills/>
      <ContactMe/>
      <FooterComponent/>

    </div>
  )
}
