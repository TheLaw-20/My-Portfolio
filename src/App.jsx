import React from 'react'
import Head from './components/Header/head'
import AboutMe from './components/About/AboutMe'
import SkillsStack from './components/Skills_Stack/SkillsStack'
import ProjectsSection from './components/Projects/ProjectsSection'
import ExperienceSection from './components/Experience/Experience'
import ContactMeSection from './components/ContactMe/ContactMe'
import Foot from './components/Footer/Foot'

export default function App() {
  return (
    <>
      <Head />
      <AboutMe />
      <SkillsStack />
      <ProjectsSection/>
      <ExperienceSection/>
      <ContactMeSection/>
      <Foot/>
        </>
  )
}