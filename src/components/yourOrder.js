import React from "react";
import useFirestoreData from "./../hooks/useFirestoreDoc";
import { useAuth } from "./../context/AuthContext";
import OrderList from "./OrderList";

const YourOrder = (props) => {
  const { data } = useFirestoreData("Order");
  const { currentUser } = useAuth();
  return (
    <>
      <h5 className="my-2 font-md">Your Order</h5>
      <hr />
      {data.map((item) => {
            if (item.userId === currentUser.uid) {
              return <OrderList key={Math.random()} productId={item.productId} />;
            } else {
              return <p className="my-2 font-md prime-color">You have not order yet</p>
        }
          })}
    </>
  );
};

export default YourOrder;
