import React from 'react';
import useFirestoreData from './../hooks/useFirestoreDoc';
import AdminOrderList from './AdminOrderList';

const AdminOrders = () => {
    const {data} = useFirestoreData("Order")
    return (
       <>
        {data.map((item) => {
            return <AdminOrderList email={item.email} id={item.id}/>
          })}
      
       </>
    );
};

export default AdminOrders;