import React from 'react';
import UpperNav from './../components/UpperNav';
import Footer from './../components/Footer';
import AdminOrders from './../components/AdminOrders';

const AdminPage = () => {
    return (
        <>
        <UpperNav/>
        <div className='container'>
            <h4 className='text-center prime-color font-lg'>Orders</h4>
           <AdminOrders/>
        </div>
        <Footer/>
        </>
    );
};

export default AdminPage;