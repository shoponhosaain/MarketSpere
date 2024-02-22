import React from 'react';
import Slider from './Slider';
import SideCategory from './SideCategory';

const Banner = () => {
    return (
       <>
       <div class="banner container mt-md-5 mt-0 pt-5">
        <div class="row">
        <SideCategory/>
        <Slider/>
        </div>
      </div>
       </>
    );
};

export default Banner;