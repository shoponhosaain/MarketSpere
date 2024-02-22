import img from '../assets/images/delevery_boy.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons';

const HeroSection = () => {
    return (
        <>
        <div className="hero container d-none d-lg-block">
  <div className="row">
    <div className="col-6">
      <div className="hero-content">
        <h1 className="heading text-color mt-0 pt-0 pt-xl-4 mt-xl-4">
          Let your <span className="prime-color">product</span> come to you
        </h1>
        <p className="text-color font-sm mt-4 mb-5">
          Get fresh groceries online without stepping out to make delicious food{" "}
          <br /> with the freshest ingredients
        </p>
        <div className="points">
          <div>
            <span className="font-sm mx-3">
            <FontAwesomeIcon className="me-2 fa-solid fa-square-check font-lg prime-color" icon={faCheckSquare} />
              Easy purchase
            </span>
            <span className="font-sm">
            <FontAwesomeIcon className="me-2 fa-solid fa-square-check font-lg prime-color" icon={faCheckSquare} />
              100% Guarantee
            </span>
          </div>
          <div className="mt-2">
            <span className="font-sm mx-3">
            <FontAwesomeIcon className="me-2 fa-solid fa-square-check font-lg prime-color" icon={faCheckSquare} />
              Cash on Delivery
            </span>
            <span className="font-sm ">
            <FontAwesomeIcon className="me-2 fa-solid fa-square-check font-lg prime-color" icon={faCheckSquare} />
              Fast Delivery
            </span>
          </div>
        </div>
      </div>
    </div>
    <div className="col-6">
      <div className="hero-image">
        <img className="w-100" src={img} alt="" />
      </div>
    </div>
  </div>
</div>

        </>
    );
};

export default HeroSection;