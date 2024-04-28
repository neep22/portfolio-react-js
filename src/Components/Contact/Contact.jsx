import React from 'react'
import { Fragment } from 'react'
import Iframe from 'react-iframe'
import { Col, Container, Row } from 'react-bootstrap'




const Contact = () => {
  return (
    <Fragment>
      <Container fluid={true} className="contactArea text center pt-80" id='contact'>
        <h4 className="projectAreaTitle">
       
                Contact Me
          
      
          </h4>
        <Container>
          <Row>
            <Col lg={6} md={6} sm={12}>
            <div className="contact-form">
              <h2 className="f-left ContactsTitle ">Get In Touch</h2>
                    <form action="#" method="post">
                        <input type="text" placeholder="name" />
                        <input type="text" placeholder="email" />
                        <input type="text" placeholder="subject" />
                        <textarea className="contact-area textarea"  placeholder="message"></textarea>
                        <input type="submit" value="send message" />
                     </form>
                 </div>
            </Col>
            <Col lg={6} md={6} sm={12}>
                
                <div className="contact-info">
                  <Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.1792042876064!2d91.87052897510559!3d24.891868244000513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3751ab2b25be8105%3A0x4e97a32cf9300bf4!2sInfinity%20Flame%20Soft!5e0!3m2!1sen!2sbd!4v1697009126213!5m2!1sen!2sbd" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></Iframe>  
                </div>
            </Col>
          </Row>
          
        </Container>
        </Container>
    </Fragment>
  )
}

export default Contact