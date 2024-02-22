import React from 'react';
import Navbar from './../components/navbar';
import Footer from './../components/Footer';
import OrderUpload from './../components/orderUpload';

const PlaceOrder = () => {
    return (
        <>
        <Navbar/>
        <OrderUpload/>
        <Footer/>
        </>
    );
};

export default PlaceOrder;