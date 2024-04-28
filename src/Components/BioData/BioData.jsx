import React, { Fragment } from 'react'

const BioData = () => {
    const onButtonClick = () => {
        const pdfUrl = "http://localhost:5173/src/assets/Resume.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "cv.pdf";
        link.click();

    };
  return (
    <Fragment>
          <button onClick={onButtonClick}> 
         <a href="">Cv</a>
      </button>
    </Fragment>
  )
}

export default BioData