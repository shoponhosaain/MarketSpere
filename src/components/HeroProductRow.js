import React from 'react';
import img_1 from "../assets/images/model_picture.png"
import img_2 from "../assets/images/model_picture_2.png"
import img_3 from "../assets/images/model_picture_3.png"
import img_4 from "../assets/images/model_picture_4.png"
import img_5 from "../assets/images/model_picture_5.png"

const HeroProductRow = () => {
    return (
        <>
        <div className="hero-product-row container model-padding mt-5 d-none d-lg-block">
  <div className="row">
    <div className="col-2  text-center">
      <div className="image">
        <img src={img_1} alt="" />
      </div>
      <div className="content">
        <h4 className="font-md font-bolt ms-2 prime-color mt-3">Fasion</h4>
        <p className="font-vsm">
          Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit.
        </p>
      </div>
    </div>
    <div className="col-2 text-center">
      <div className="image">
        <img src={img_2} alt="" />
      </div>
      <div className="content">
        <h4 className="font-md font-bolt ms-2 prime-color mt-3">Electronics</h4>
        <p className="font-vsm">
          Lorem ipsum dolor sit amet,
          <br /> consectetur adipiscing elit.
        </p>
      </div>
    </div>
    <div className="col-2 text-center">
      <div className="image">
        <img src={img_3} alt="" />
      </div>
      <div className="content">
        <h4 className="font-md font-bolt ms-2 prime-color mt-3">
          Beauty Products
        </h4>
        <p className="font-vsm">
          Lorem ipsum dolor sit amet,
          <br /> consectetur adipiscing elit.
        </p>
      </div>
    </div>
    <div className="col-2 text-center">
      <div className="image">
        <img src={img_4} alt="" />
      </div>
      <div className="content">
        <h4 className="font-md font-bolt ms-2 prime-color mt-3">Groceries</h4>
        <p className="font-vsm">
          Lorem ipsum dolor sit amet,
          <br /> consectetur adipiscing elit.
        </p>
      </div>
    </div>
    <div className="col-2 text-center">
      <div className="image">
        <img src={img_5} alt="" />
      </div>
      <div className="content">
        <h4 className="font-md font-bolt ms-2 prime-color mt-3">Accesories</h4>
        <p className="font-vsm">
          Lorem ipsum dolor sit amet,
          <br /> consectetur adipiscing elit.
        </p>
      </div>
    </div>
  </div>
</div>

        </>
    );
};

export default HeroProductRow;