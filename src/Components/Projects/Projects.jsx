import React, { Fragment, useState } from 'react'
import { Container, Row,Col, Modal, Button } from 'react-bootstrap'
import Project1 from "../../assets/img/project1.png"
import Project2 from "../../assets/img/project2.png"
import Project3 from "../../assets/img/project3.png"
import Project4 from "../../assets/img/project4.png"
import Project5 from "../../assets/img/project5.png"
import Project6 from "../../assets/img/project6.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import {motion} from "framer-motion";


const Projects = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleShow1 = () => setShow(true);

  return (
   <Fragment>
     <Container fluid={true} className="projectArea pt-80 pb-80">
        <h4 className="projectAreaTitle pb-5">
       
            
            My Projects</h4>

        <Container className="mt-5 mb-5 project">
            <Row>
                <Col lg={6} md={6} sm={12}>
                    <div className="projectInfo text-start">
                        <h1 className="projectInfoTitle">Project 1</h1>
                        <span className="projectInfoSub">travel & toursim website</span>
                        <p className="projectSubTitle">
                        A warm and inviting introduction to your website, emphasizing the joy of travel and exploration.High-quality images of popular destinations to capture the attention of visitors.
                        Allow users to input their desired destination or activity to quickly find relevant information. Clearly define the purpose and goals of your travel and tourism website.
                        </p>
                       
                    </div>
                </Col>
                <Col lg={6} md={6} sm={12}>
                    <motion.div className="projectImg"
                               viewport={{once:false}}
                               initial={{opacity:0,x:100}}
                               whileInView={{opacity:1,x:0}}
                               transition={{type:'easeIn',
                                 duration:.5,
                                 delay:.3
                           }} 
                    >

              
                       <a href="https://magical-nougat-f1591e.netlify.app/"> <img onClick={handleShow1} src={Project1} alt=""/></a>
                    </motion.div>
                </Col>
            </Row>
        </Container>
        <Container className="mt-5 mb-5 project">
            <Row>
                <Col lg={6} md={6} sm={12}>
                    <motion.div className="projectImg"
                               viewport={{once:false}}
                               initial={{opacity:0,x:-100}}
                               whileInView={{opacity:1,x:0}}
                               transition={{type:'easeIn',
                                 duration:.5,
                                 delay:.3
                           }} 
                    >
                     
                <a href="https://651b15a4952c5272ff3e13b2--beautiful-griffin-2413ae.netlify.app/"><img onClick={handleShow} src={Project2} alt="Project"/></a> 
        
                    </motion.div>
                </Col>
                <Col lg={6} md={6} sm={12}>
                    <div className="projectInfo text-start">
                        <h1 className="projectInfoTitle">Project 2</h1>
                        <span className="projectInfoSub">Restaurant Website</span>
                        <p className="projectSubTitle">
                        Greet visitors with a warm welcome and a brief overview of what makes your restaurant special.Feature stunning visuals of your restaurant's interior, exterior, and signature dishes to entice visitors.
                        Include a prominent button for easy online reservations.Showcase a selection of your most popular or unique dishes with appealing images. Organize the menu into sections like appetizers, mains, desserts, and beverages for easy navigation.
                       
                        </p>
                    </div>
                </Col>
            </Row>
        </Container>
        <Container className="mt-5 mb-5 project">
            <Row>
                <Col lg={6} md={6} sm={12}>
                    <div className="projectInfo text-start">
                        <h1 className="projectInfoTitle">Project 3</h1>
                        <span className="projectInfoSub">Personal Portfolio</span>
                        <p className="projectSubTitle">Begin with a friendly greeting and a brief statement about who you are and what you do. Include a concise and catchy tagline that encapsulates professional identity or mission.
                        Share a brief personal story or background that led you to your current professional journey.Showcase core skills and areas of expertise.
                        Display a curated selection of best and most relevant projects.
                        </p>
                       
                    </div>
                </Col>
                <Col lg={6} md={6} sm={12}>
                    <motion.div className="projectImg"
                               viewport={{once:false}}
                               initial={{opacity:0,x:100}}
                               whileInView={{opacity:1,x:0}}
                               transition={{type:'easeIn',
                                 duration:.5,
                                 delay:.3
                           }} >
                   
                      <a href="https://sunny-muffin-d022c2.netlify.app"><img onClick={handleShow} src={Project3} alt="Project"/></a> 
                    </motion.div>
                </Col>
            </Row>
        </Container>
        <Container className="mt-5 mb-5 project">
            <Row>
                <Col lg={6} md={6} sm={12}>
                    <motion.div className="projectImg"
                               viewport={{once:false}}
                               initial={{opacity:0,x:-100}}
                               whileInView={{opacity:1,x:0}}
                               transition={{type:'easeIn',
                                 duration:.5,
                                 delay:.3
                           }} 
                    >

                        <a href="https://faisal0804.github.io/courses/"><img onClick={handleShow} src={Project6} alt="Project"/></a>
                    </motion.div>
                </Col>
                <Col lg={6} md={6} sm={12}>
                    <div className="projectInfo text-start">
                        <h1 className="projectInfoTitle">Project 4</h1>
                        <span className="projectInfoSub">e-learning website</span>
                        <p className="projectSubTitle">Provide information about the founding of the platform, its history, and the team behind it. Showcase a selection of your most popular or high-quality courses.
                        llustrate the ease of navigation and user-friendly features of your e-learning platform.
                        Include positive feedback from instructors about the teaching and learning experience on your platform.</p>
                    </div>
                </Col>
            </Row>
        </Container>
        <Container className="mt-5">
            <Row>
                <Col lg={6} md={6} sm={12}>
                    <div className="projectInfo text-start">
                        <h1 className="projectInfoTitle">Project 5</h1>
                        <span className="projectInfoSub">IT Soluton website</span>
                        <p className="projectSubTitle"> Provide a brief history of the company, its mission, and the core values that guide its operations.
                        Showcase the expertise of team, emphasizing their qualifications and experience in the IT industry. Highlight the range of IT solutions your company offers, including software development, cybersecurity, cloud services, etc.</p>

                    </div>
                </Col>
                <Col lg={6} md={6} sm={12}>
                    <motion.div className="projectImg"
                               viewport={{once:false}}
                               initial={{opacity:0,x:100}}
                               whileInView={{opacity:1,x:0}}
                               transition={{type:'easeIn',
                                 duration:.5,
                                 delay:.3
                           }} 
                    >
                   
                            <a href="https://keen-stardust-d62c7f.netlify.app/"> <img onClick={handleShow} src={Project5} alt="Project"/></a>   
                    </motion.div>
                </Col>
            </Row>
        </Container>
    </Container>
   </Fragment>
  )
}

export default Projects