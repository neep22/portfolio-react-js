import React, { Fragment } from 'react'
import"../../assets/css/bootstrap.min.css"
import {Container,Button, Row, Col} from 'react-bootstrap';
import"../../assets/css/custom.css";
function TopBanner() {
  return (
    <Fragment>
        <Container fluid={true} className="TopBanner">
            <div className="BannerOverlay">
            </div>
            <Container className='TopContent'>
                <Row>
                    <Col className="text-center">

                     <span className="TopTitleSpan">
                      
                     </span>
                     <h1 className="TopTitle">Nader Nihal Neep</h1>
                     <h4 className="TopSubTitle">
                      I'm Web Application Developer
                      </h4>
                     <a href="" className="BannerBtn">Read More</a>                      
                    </Col>
                </Row>
               </Container>
        </Container>
    </Fragment>
  )
}

export default TopBanner