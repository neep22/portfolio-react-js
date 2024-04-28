import React, { Fragment, useEffect, useState } from 'react'
import "../../assets/css/custom.css"
import "../../assets/css/bootstrap.min.css"
import {Container,Nav,Navbar,NavDropdown} from 'react-bootstrap';



const TopNavbar = () => {
    const [scrollPosition,setScrollPosition]=useState(
        {
            nabBarTitle:'navTitle',
            navBarBackground:'navBackground',
            navBarIetm:'navItem'
        }
    );
    const onScroll=()=>{
        if(window.scrollY>100){
            setScrollPosition({navBarBackground:'navBackgroundScroll',nabBarTitle:'navTitleScroll', navBarIetm:'navBarItemScroll'});
        }else if(window.scrollY<100){
            setScrollPosition({navBarBackground:'navBackground',nabBarTitle:'navTitle', navBarIetm:'navItem'});

        }
    }
    useEffect(()=>{
        window.addEventListener('scroll',onScroll);

    },[]);
  return (
    <Fragment>
         <Navbar className={scrollPosition.navBarBackground} fixed="top" expand="lg" >
      <Container>
        <Navbar.Brand className={scrollPosition.nabBarTitle} href="#">NEEP</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className=" navBarMain me-auto">
            <Nav.Link className={scrollPosition.navBarIetm}>Home</Nav.Link>
            <Nav.Link className={scrollPosition.navBarIetm}>About</Nav.Link>
            <Nav.Link className={scrollPosition.navBarIetm}>Services</Nav.Link>
            <Nav.Link className={scrollPosition.navBarIetm}>Skill</Nav.Link>
            <Nav.Link className={scrollPosition.navBarIetm}>Project</Nav.Link>
            <Nav.Link className={scrollPosition.navBarIetm}>Contact</Nav.Link>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </Fragment>
  )
}

export default TopNavbar