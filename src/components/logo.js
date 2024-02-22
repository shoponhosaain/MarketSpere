import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
    return (
       <>
       <Link className='text-decoration-none text-color' to="/">
       <div className="logo">
          <h2 className="font-bolt font-lg font-s-sm mt-md-0 mt-2 me-3">
            Market<span className="prime-color font-light">Spere</span>
          </h2>
        </div>
       </Link>
      
       </>
    );
};

export default Logo;