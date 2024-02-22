import React from "react";
import Product from "./Product";
import useFirestoreData from "../hooks/useFirestoreDoc";
import { useAuth } from "../context/AuthContext";

const YourProduct = () => {
  const { currentUser } = useAuth();
  const { data } = useFirestoreData("product");
  return (
    <>
      <h5 className="mb-0 font-md">Your Product</h5>
      <hr/>
      <div className="row">
          {data.map((item) => {
            if (item.userId === currentUser.uid) {
              return <Product key={item.id} img={item.imageUrl} {...item} />;
            } else {
              // You can return something else here if needed
              return null; // Or an empty fragment <> </>
            }
          })}
        
      </div>
    </>
  );
};

export default YourProduct;
