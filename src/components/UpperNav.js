import React from "react";
import Logo from "./logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faHeart } from "@fortawesome/free-solid-svg-icons"
import NavSearch from './navSearch';


const UpperNav = () => {
  return (
    <>
    
      <div className="container brand d-flex justify-content-between align-items-center pt-3 default-padding">
        <Logo/>
        <div className="search d-flex">
       <NavSearch />
          <div className="icons d-flex ms-5">
            <FontAwesomeIcon className="prime-color cursor-pointer d-block d-md-none" icon={faBars} size="2x"/>
            <FontAwesomeIcon className="prime-color cursor-pointer d-none d-md-block" icon={faHeart} size="2x"/>
          </div>
        </div>
      </div>
      <hr />
  
   
    </>
  );
};

export default UpperNav;
