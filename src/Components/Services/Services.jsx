import React, { Fragment } from 'react'
import { Container,Row,Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faFileCode, faBullhorn } from '@fortawesome/free-solid-svg-icons'
import { useAnimation, motion } from "framer-motion";



const Services = () => {
  return (
    <Fragment>
        <Container fluid={true} className="ServiceContainer text center pt-80 pb-80" id='services'>
        <h4 className="projectAreaTitle">
       
          My Services</h4>
        <Container className="mb-5">
            <Row >
              <Col lg={4} md={12} sm={6} className="pt-3 mt-5">
               <motion.div
                      viewport={{once:false}}
                      initial={{opacity:0,y:-100}}
                      whileInView={{opacity:1,y:0}}
                      transition={{type:'easeIn',
                        duration:.5,
                        delay:.3
                  }} 
               >
               <Card style={{ width: '22.5rem' }} className="BoxShadow cardWidth">
                    <Card.Body>
                      <p><FontAwesomeIcon icon={faCode} style={{color:"black", fontSize:"40px", paddingBottom:"5px"}} /></p>
                       <Card.Title className="ServiceTitle">Web Development</Card.Title>
                           <Card.Text className="ServiceDescription">
                           Every business is unique, and so should be your web solution. My custom development ensures your website aligns perfectly with your brand, goals, and user expectations.
                           </Card.Text>
                           <a className="ServiceLink">More Details</a>
                      </Card.Body>
                     </Card>
               </motion.div>
                </Col>
                <Col lg={4} md={12} sm={6} className="pt-3 mt-5">
                
               <motion.div
                      viewport={{once:false}}
                      initial={{opacity:0,y:-100}}
                      whileInView={{opacity:1,y:0}}
                      transition={{type:'easeIn',
                        duration:.5,
                        delay:.3
                  }} 
               >
              <Card style={{ width: '22.5rem' }} className="BoxShadow cardWidth">
                    <Card.Body>
                      <p><FontAwesomeIcon icon={faFileCode} style={{color:"black", fontSize:"40px", paddingBottom:"5px"}} /></p>
                       <Card.Title className="ServiceTitle">Web Design</Card.Title>
                           <Card.Text className="ServiceDescription">
                           I promise to transform your bussiness through modern technologies. Using my years of experience in web design. I will build  a website that would work incredibly for you as well as our customers.
                           </Card.Text>
                           <a className="ServiceLink">More Details</a>
                      </Card.Body>
                     </Card>
                    </motion.div>
                </Col>
                <Col lg={4} md={12} sm={6} className="pt-3 mt-5">
                 <motion.div
                        viewport={{once:false}}
                        initial={{opacity:0,y:-100}}
                        whileInView={{opacity:1,y:0}}
                        transition={{type:'easeIn',
                          duration:.5,
                          delay:.3
                    }} 
                 >
                  <Card style={{ width: '22.5rem' }} className="BoxShadow cardWidth">
                    <Card.Body>
                      <p><FontAwesomeIcon icon={faBullhorn} style={{color:"black", fontSize:"40px", paddingBottom:"5px"}} /></p>
                       <Card.Title className="ServiceTitle" >Software Development</Card.Title>
                           <Card.Text className="ServiceDescription">
                           Developing strong software is essential if you’re looking to attract interest and attention from your target audience.  it plays an integral role in successfully promoting you and your business.
                           </Card.Text>
                           <a className="ServiceLink">More Details</a>
                      </Card.Body>
                  </Card>
                </motion.div>
                </Col>
            </Row>
        </Container>
        </Container>
    </Fragment>
  )
}

export default Services