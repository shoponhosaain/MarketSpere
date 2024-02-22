import React from "react";
import Product from "./Product";
import useFirestoreData from "../hooks/useFirestoreDoc";

const ProductSection = () => {
  const { data } = useFirestoreData("product");

  return (
    <>
      <div class="list container mt-5 pt-5">
        <div class="card-section col-md-9 col container">
          <h6 class=" font-s-sm font-bolt prime-color px-3">Featured</h6>
          <hr />
          <div class="row">
            {/* Render your data here */}
            {data.map((item) => (

              <Product
                key={item.id}
                id={item.id}
                img={item.imageUrl}
                title={item.title}
                description={item.description}
                price={item.price}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductSection;
