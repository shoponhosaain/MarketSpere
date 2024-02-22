import React from 'react';
import { Link } from 'react-router-dom';
import { getFirestore,deleteDoc,doc } from 'firebase/firestore';
import app from '../database/firebase';


const AdminOrderList = (props) => {
    const deleteDocument = async (docId) => {
        try {
            const firestore = getFirestore(app);
          await deleteDoc(doc(firestore, "Order", docId));
        } catch (error) {
          console.error('Error deleting document: ', error);
        }
      };
    return (
        <>
        <div key={Math.random()} className="container my-4 border p-2">
            <div className="row">
              <div className="col d-flex justify-content-between">
                <div className="content d-flex align-items-center">
                  <h4 className="mx-3 font-bolt font-vsm mt-2 prime-color">{props.email}</h4>
                </div>
                <div className="buttons">
                    <Link to={"/orderdetails/"+props.id}>
                    <button className="login-btn font-bolt">View Details</button>
                    </Link>
                    <button onClick={()=> deleteDocument(props.id)} className="login-btn font-bolt ms-4">Confirm Order</button>
                </div>
              </div>
            </div>
          </div>
        </>
    );
};

export default AdminOrderList;