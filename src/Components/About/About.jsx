import React from 'react'
import { Fragment } from 'react'
import { Col, Container, Row, Button } from 'react-bootstrap';
import AboutMe from "../../assets/img/me.jpg"
import { useAnimation, motion } from "framer-motion";
import Cv from "../../assets/Resume.pdf";

function About() {


  return (
    <Fragment>
     <Container fluid={true} className="AboutContent bgColor pt-80 pb-80">
        <Row>
            <Col lg={6} md={6} sm={12}>       
             <motion.div className="aboutImage "

                       viewport={{once:false}}
                                initial={{opacity:0,x:-150}}
                                whileInView={{opacity:1,x:0}}
                                transition={{type:'easeIn',
                                  duration:.3,
                                  delay:.3
                            }} 
             >
              <img src={AboutMe} alt="about" />  
              </motion.div>     
            </Col>
            <Col lg={6} md={6} sm={12}>

              <motion.div className="aboutInfo mt-5"
                   viewport={{once:false}}
                   initial={{opacity:0,x:150}}
                   whileInView={{opacity:1,x:0}}
                   transition={{type:'easeIn',
                     duration:.3,
                     delay:.3
               }} 
               >
                <p className="AboutName"> ABOUT ME</p>      
                <p className="AboutDescription mb-4">
                I am working as a Front-End developer at Limpid Technologies in Sylhet. Also working as a part of the learning management software system EduExpertX. I have more than 2 years of experience in the development sector.I have developed the 
                architecture of E-Learning management systems, e-commerce solutions. I know application deployment 
                and life cycle maintenance processes. I have a full grasp in all aspects of Object-Oriented Programming(OOP)/database design and implementation. </p>
                <div className="aboutbtn">
                 
                 
               
                
                            <a 
                            className="BannerBtn"
                              href={Cv}
                              download="my cv"
                              target="_blank"            
                            
                            >Download CV</a>
                           
                </div>
              </motion.div>
            </Col>
        </Row>
     </Container>
    </Fragment>
  )
}

export default About