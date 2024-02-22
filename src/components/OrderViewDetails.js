import React from 'react';
import { useParams, Link } from 'react-router-dom';
import useFirestoreData from '../hooks/useFirestoreDoc';
import UpperNav from './UpperNav';
import Footer from './Footer';

const OrderViewDetails = () => {
   const {name} = useParams()
  const {data} =  useFirestoreData("Order")
    return (
       <>
       <UpperNav/>
       <div className='container'>
       {data.map((item)=>{
        if(name===item.id){
            return (<div>
                <h1 className='font-lg prime-color my-3 mt-5'> <span className='font-lg font-bolt'>Email</span>  : {item.email}</h1>
                <h1 className='font-lg prime-color my-3'><span className='font-lg font-bolt'>User ID : </span> {item.userId}</h1>
                <h1 className='font-lg prime-color my-3'><span className='font-lg font-bolt'>Product ID : </span> {item.productId}</h1>
                <h1 className='font-lg prime-color my-3'><span className='font-lg font-bolt'>Address ID : </span> {item.address}</h1>
                <h1 className='font-lg prime-color my-3'><span className='font-lg font-bolt'>Mobile Number : </span> {item.mobileNumber}</h1>
                <Link to={"/Product/"+item.productId}>
                <button className='login-btn font-bolt mt-3'>View Product</button>
                </Link>
                
            </div> 
            )
        }
       })}
       </div>
       <Footer/>
       </>
    );
};

export default OrderViewDetails;