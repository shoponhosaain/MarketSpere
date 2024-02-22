import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAuth } from './../context/AuthContext';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import app from '../database/firebase';
import { useNavigate } from 'react-router-dom';


const OrderUpload = () => {
  const navigate = useNavigate();
  const {currentUser} = useAuth();
   const {name} =  useParams();
   const [email,setEmail] = useState("");
   const [address,setAddress] = useState("");
   const [mobile,setMobile] = useState();

  const onSubmit = (e) => {
    e.preventDefault()
    
    //acces firestore
    const db = getFirestore(app);

    //collection ref
    const collectionRef = collection(db,"Order");
  // Construct data object

  const productData = {
    email : email,
    address :address,
    mobileNumber : mobile,
    productId:name,
    userId: currentUser.uid, 
  };

    //upload data

    addDoc(collectionRef,productData).then((docRef) => {
      navigate('/profile');
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });


  }

    return (
  
        <>
        <div className="container" style={{ marginTop: "5rem" }}>
    <form className="newsletter-bg p-5" onSubmit={onSubmit}>
     
      <h3 className='text-center font-lg font-bolt prime-color'>Place Order</h3>
      <div className="mb-4">
        <label
          htmlFor="exampleInputEmail1 "
          className="form-label font-bolt prime-color"
        >
          Email address
        </label>
        <input
        required
          onChange={(e)=>setEmail(e.target.value)}
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
        <div id="emailHelp" className="form-text prime-color font-vsm">
          We'll never share your email with anyone else.
        </div>
      </div>
      <div className="mb-3">
        <label
          htmlFor="exampleInputPassword1"
          className="form-label font-bolt prime-color"
        >
          Address
        </label>
        <input
          onChange={(e)=>setAddress(e.target.value)}
          type="text"
          required
           className="form-control"
            id="exampleInputPassword1" />
      </div>
      <div className="mb-3">
        <label
          htmlFor="exampleInputPassword1"
          className="form-label font-bolt prime-color"
        >
          Mobile Number
        </label>
        <input
        required
        onChange={(e)=>setMobile(e.target.value)}
          type="number"
          className="form-control"
          id="exampleInputPassword1"
        />
      </div>
      <p>Payment Method : <span>Cash On delevery</span></p>
      <button type="submit" className="mt-4 login-btn">
        Place Order
      </button>
  

    </form>
  </div>
  
        </>
      );
};

export default OrderUpload;