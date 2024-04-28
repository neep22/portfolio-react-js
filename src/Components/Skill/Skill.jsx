import React, { Fragment } from 'react'
import { Container,Row,Col,Card } from 'react-bootstrap'
import { BarChart, Bar,XAxis,Tooltip, ResponsiveContainer } from "recharts";
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

const data = [
    {
      name: "HTML",
      skill: 95,
      fill:"#ff9a00"
    },
    {
      name: "CSS",
      skill: 95,
      fill:"#FFF"
    },
    {
      name: "JavaScript",
      skill: 50,
      fill:"#ff9a00",
    },
    {
      name: "MySQL",
      skill: 70,
      fill:"#FFF"
    },
    {
      name: "PHP",
      skill: 70,
      fill:"#ff9a00"
    
    },
    {
      name: "Bootstrap",
      skill: 60,
      fill:"#FFF"
    },
    {
      name: "React Js",
      skill: 50,
      fill:"#ff9a00"
    },
    {
        name: "Laravel",
        skill: 10,
        fill:"#FFF"
      }
  ];

const Skill = () => {
  return (
    <Fragment>

           <Container fluid={true} className="skillsArea pt-80 pb-80" id='skills'>
                   <h4 className="projectAreaTitle pb-5">
                  
                    
                    My Skill </h4>
                  <Container className="mt-5">
                    <Row>
                        <Col style={{width:'50%',height:'350px'}} lg={4} md={6} sm={12} className="skillWidth">
                        <ResponsiveContainer>
                        <BarChart width={100} height={350} data={data}>
                            <XAxis dataKey="name"></XAxis>
                            <Tooltip/>
                          <Bar dataKey="skill" />
                                </BarChart>
                        </ResponsiveContainer>
                        </Col>
                        <Col lg={4} md={6} sm={12}>
                            
                        <Card style={{ width: '16rem' }} className="BoxShadow Counterbox1 mb-5 skillCard">
                        
                      
                            <p className="CounterFont">
                            <CountUp start={0} end={14}>
                                {({ countUpRef, start }) => (
                                      <VisibilitySensor onChange={start} delayCall>
                                        <span ref={countUpRef} />
                                
                                    </VisibilitySensor>
                                )}
                            </CountUp>
                            
                          +</p>
                    <Card.Title className="CounterTitle">Frontend Project</Card.Title>
                        <Card.Text className="SubjectDescription">
                      
                        </Card.Text>
                      
                
                  </Card>    
                            <Card style={{ width: '16rem' }} className="BoxShadow Counterbox2 mb-4 mt-5 skillCard ">
                        
                       
                            <p className="CounterFont">
                            <CountUp start={0} end={6}>
                                {({ countUpRef, start }) => (
                                      <VisibilitySensor onChange={start} delayCall>
                                        <span ref={countUpRef} />
                                
                                    </VisibilitySensor>
                                )}
                            </CountUp>
                            
                          +</p>
                    <Card.Title className="CounterTitle">Full Stack Project</Card.Title>
                        <Card.Text className="SubjectDescription">
                      
                        </Card.Text>
                      
              
                  </Card>                      
                </Col>
            
                    </Row>
                </Container>
            
      </Container>
    </Fragment>
  )
}

export default Skill