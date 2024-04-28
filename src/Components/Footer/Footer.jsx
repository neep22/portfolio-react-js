import React, { Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
const Footer = () => {
  return (
    <Fragment>
        <Container fluid={true} className="Footer">
            <Row>
                <Col lg={12} md={12} sm={12}>
                 <div class="footer-area">
                   <a className="brand" href="https://www.facebook.com/naderneep252000/" target="_blank"><FontAwesomeIcon  className="FacebookIcon"  icon={faFacebookF}  style={{color: "#4267B2",}} /></a>
                   <a className="brand" href="https://twitter.com/NaderNeep" target="_blank"><FontAwesomeIcon  className="TwitterIcon"  icon={faTwitter} style={{color: "#1DA1F2",}} /></a>
                   <a className="brand" href="https://www.linkedin.com/in/nader-nihal-neep-ba9403248/" target="_blank"><FontAwesomeIcon  className="LinkdinIcon"  icon={faLinkedin}  style={{color: "#0a66c2"}} /></a>
                   <a className="brand" href="https://www.youtube.com" target="_blank"><FontAwesomeIcon  className="YoutubeIcon"  icon={faYoutube} style={{color: "#FF0000",}} /></a>
                   <p>&copy; All Rights Reserved</p>    
       
                 </div>
                </Col>
            </Row>
        </Container>
     </Fragment>
  )
}

export default Footer