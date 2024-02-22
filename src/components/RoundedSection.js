import React from 'react';
import RoundedComp from './RoundedComp';
import img_1 from '../assets/images/rounded_1.png'
import img_2 from '../assets/images/rounded_2.png'
import img_3 from '../assets/images/rounded_3.png'
import img_4 from '../assets/images/rounded_4.png'
import img_5 from '../assets/images/rounded_5.png'


const RoundedSection = () => {
    return (
       <>
        <div class="container mt-5 p-5">
        <div class="row gap-4 text-center justify-content-center">
        <RoundedComp src={img_1} title={"Fast Delevery"}/>
        <RoundedComp src={img_2} title={"Fast Delevery"}/>
        <RoundedComp src={img_3} title={"Fast Delevery"}/>
        <RoundedComp src={img_4} title={"Fast Delevery"}/>
        <RoundedComp src={img_5} title={"Fast Delevery"}/>
        </div>
      </div>
       </>
    );
};

export default RoundedSection;