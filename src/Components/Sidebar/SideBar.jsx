import React, { Fragment,useState,useEffect } from 'react'
import { Container,Nav } from 'react-bootstrap';
import { slide as Menu } from 'react-burger-menu';


const SideBar = () => {
    const [scrollPosition,setScrollPosition]=useState(
        {
            bars:'bars'
        }
    );
    const onScroll=()=>{
        if(window.scrollY>100){
            setScrollPosition({ bars:'barsScroll'});
        }else if(window.scrollY<100){
            setScrollPosition({ bars:'bars'});

        }
    }
    useEffect(()=>{
        window.addEventListener('scroll',onScroll);

    },[]);
  return (
    <Fragment>
     <Container fluid={true} className="p-0">  
        
    <Menu className={scrollPosition.bars}>
    <Nav  >    
    <Nav.Item>
        <Nav.Link className="bm-item"  href="#/home">
         Home
        </Nav.Link>
    </Nav.Item>
    <Nav.Item>
        <Nav.Link  className="bm-item"  href="#/home">
         About
        </Nav.Link>
    </Nav.Item>
    <Nav.Item>
        <Nav.Link  className="bm-item" href="#">
         Service
        </Nav.Link>
    </Nav.Item>
    <Nav.Item>
        <Nav.Link  className="bm-item"  href="#">
         Skill
        </Nav.Link>
    </Nav.Item>
    <Nav.Item>
        <Nav.Link  className="bm-item"  href="#">
         Project
        </Nav.Link>
    </Nav.Item>
    <Nav.Item>
        <Nav.Link  className="bm-item"  href="#">
         Contact
        </Nav.Link>
    </Nav.Item>
    </Nav>
    </Menu>
    </Container>
  
    </Fragment>
  )
}

export default SideBar