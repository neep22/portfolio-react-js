import React, { Fragment, useEffect, useState } from 'react';
import "../../assets/css/custom.css";
import "../../assets/css/bootstrap.min.css";
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-scroll';

const TopNavbar = () => {
    const [scrollPosition, setScrollPosition] = useState({
        navBarTitle: 'navTitle',
        navBarBackground: 'navBackground',
        navBarItem: 'navItem'
    });

    const onScroll = () => {
        if (window.scrollY > 100) {
            setScrollPosition({
                navBarBackground: 'navBackgroundScroll',
                navBarTitle: 'navTitleScroll',
                navBarItem: 'navBarItemScroll'
            });
        } else if (window.scrollY < 100) {
            setScrollPosition({
                navBarBackground: 'navBackground',
                navBarTitle: 'navTitle',
                navBarItem: 'navItem'
            });
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <Fragment>
            <Navbar className={scrollPosition.navBarBackground} fixed="top" expand="lg">
                <Container>
                    <Navbar.Brand className={scrollPosition.navBarTitle} href="#">NEEP</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" className="custom-toggler" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="navBarMain">
                            <Link className={scrollPosition.navBarItem} to="/" smooth={true} duration={500}>Home</Link>
                            <Link className={scrollPosition.navBarItem} to="about" smooth={true} duration={500}>About</Link>
                            <Link className={scrollPosition.navBarItem} to="services" smooth={true} duration={500}>Services</Link>
                            <Link className={scrollPosition.navBarItem} to="skills" smooth={true} duration={500}>Skills</Link>
                            <Link className={scrollPosition.navBarItem} to="projects" smooth={true} duration={500}>Projects</Link>
                            <Link className={scrollPosition.navBarItem} to="reviews" smooth={true} duration={500}>Reviews</Link>
                            <Link className={scrollPosition.navBarItem} to="contact" smooth={true} duration={500}>Contact</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Fragment>
    );
}

export default TopNavbar;
