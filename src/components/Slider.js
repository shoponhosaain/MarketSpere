import React from 'react';
import img_1 from '../assets/images/slider1.jpg'
import img_2 from '../assets/images/slider2.jpg'
import img_3 from '../assets/images/slider3.png'

const Slider = () => {
    return (
      <>
      <div className="main-slider col-md-9">
  <div className="slider">
    <div
      id="carouselExampleControls"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner" style={{ height: "100%" }}>
        <div className="carousel-item active">
          <img
            src={img_1}
            className="d-block w-100 slider-height"
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
            src={img_2}
            className="d-block w-100 slider-height"
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
            src={img_3}
            className="d-block w-100 slider-height"
            alt="..."
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</div>

      </>
    );
};

export default Slider;