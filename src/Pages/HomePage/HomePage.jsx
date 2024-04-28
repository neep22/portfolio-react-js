import React, { Fragment } from 'react'
import TopBanner from '../../Components/TopBanner/TopBanner'
import About from '../../Components/About/About';
import Services from '../../Components/Services/Services';
import Skill from '../../Components/Skill/Skill';
import Projects from '../../Components/Projects/Projects';
import Reviews from '../../Components/Reviews/Reviews';
import Contact from '../../Components/Contact/Contact';
import Footer from '../../Components/Footer/Footer';
import TopNavbar from './../../Components/TopNavBar/TopNavbar';
import Sidebar from './../../Components/Sidebar/SideBar';

const HomePage = () => {
  return (
    <Fragment>
    <TopNavbar/> 
    <TopBanner/>
    <About/>
    <Services/>
    <Skill/>
    <Projects/>
    <Reviews/>
    <Contact/>
    <Footer/>
    </Fragment>
  )
}

export default HomePage