import React, { Fragment } from 'react'
import { Container } from 'react-bootstrap';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Review1 from "../../assets/img/review1.jpeg"
import Review2 from "../../assets/img/review2.jpg"
import Review3 from "../../assets/img/review3.jpg"



function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "#18A1C1" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "#18A1C1" }}
        onClick={onClick}
      />
    );
  }

const settings = {
    autoplay: true,
    autoplaySpeed: 500,
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    speed: 2000,
    vertical: true,
    verticalSwiping: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

const Reviews = () => {
  return (
    <Fragment>
        <Container fluid={true} className="reviewArea text-center pt-80 pb-80" id='reviews'>
           <h4 className="projectAreaTitle text-center pb-5"> 
           
           Reviews</h4>
          
           <Slider {...settings}>
             <div className="ReviewBoxShadow m-3 SliderMain">
              <img className="CircleImg" src={Review1} />
              <h1 className="StudentName">Faisal Mohammed</h1>
              <h4 className="StudentTitle">Software Developer</h4>
              <p className="StudentDescription">"Working with Neep was a game-changer for our project. His technical expertise, attention to detail, and problem-solving skills were exceptional. He delivered high-quality code within tight deadlines and went above and beyond to ensure the success of our project."</p>
             </div>
             <div className="ReviewBoxShadow m-3 SliderMain">
             <img className="CircleImg" src={Review2} />
              <h1 className="StudentName">Abdullah Nahian</h1>
              <h4 className="StudentTitle">Frontend Developer</h4>
              <p className="StudentDescription">
              Having Neep on our development team has significantly enhanced our ability to deliver robust solutions. His technical proficiency, combined with a strong work ethic, has consistently resulted in successful project outcomes. He is adaptable, a quick learner, and a true asset to our team. We appreciate their dedication and look forward to their continued contributions.
              </p>
                </div>
                <div className="ReviewBoxShadow m-3 SliderMain">
                <img className="CircleImg" src={Review3} />
              <h1 className="StudentName">Sanjida Sabiha</h1>
              <h4 className="StudentTitle"> React Developer</h4>
              <p className="StudentDescription">I had the pleasure of partnering with Nader Nihal Neep on a critical project, and his expertise was instrumental in its success. He is not only a skilled coder but also a collaborative team player. His commitment to delivering top-notch solutions and  ability to troubleshoot challenges is amazing. I look forward to continuing to work together on future projects."</p>

                </div>
               
                
            
           </Slider>
        </Container>
    </Fragment>
  )
}

export default Reviews