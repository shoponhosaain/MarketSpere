import React from "react";
import { Link } from 'react-router-dom';


const Product = (props) => {
  return (
    <>
   
       <div class="col-5 col-lg-3 mt-5  ms-0">
              <div class="card third-bg  px-3 border-radius py-3 border-0" style={{ width: "100%" }}>
                <img class="card-img-top" src={props.img}  alt="Card  cap"/>
                <div class="card-body">
                  <h3 class="font-md my-3 font-s-sm">{props.title}</h3>
                  <h4 class="mb-4 font-md prime-color font-bolt">{props.price} $</h4>
                  <div class="buutons d-flex">
                     <Link to={"/Product/"+props.id} class="font-sm-btn btn btn-primary prime-bg border-0 w-100 font-sm font-bolt">Order Now</Link>
                  </div>
                  
                </div>
              </div>
            </div>
          
    </>
  );
};

export default Product;
