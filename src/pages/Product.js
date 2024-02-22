import React from "react";
import Navbar from "./../components/navbar";
import Footer from "./../components/Footer";
import { useParams, Link } from "react-router-dom";
import useFirestoreData from "./../hooks/useFirestoreDoc";

const Product = () => {
  const { name } = useParams();
  const { data } = useFirestoreData("product");
  return (
    <>
      <Navbar />
      {data.map((item) => {
        if (item.id === name) {
        return  <div key={item.id}>
            <section class="py-5">
              <div class="container px-4 px-lg-5 my-5">
                <div class="row gx-4 gx-lg-5 align-items-center">
                  <div class="col-md-6">
                    <img
                      class="card-img-top mb-5 mb-md-0"
                      src={item.imageUrl}
                      alt="..."
                    />
                  </div>
                  <div class="col-md-6">
                    <h1 class="display-5 fw-bolder">{item.title}</h1>
                    <div class="fs-5 mb-4 mt-4">
                        <span className="prime-color font-bolt font-lg">Price : </span>
                      <span className="prime-color font-bolt font-lg">
                        {item.price}$
                      </span>
                    </div>
                    <p class="lead">{item.description}</p>
                    <div class="d-flex">
                        <Link to={"/placeOrder/"+item.id} className="text-decoration-none">
                        <button class="subscribe-btn mt-3" type="button">
                        <i class="bi-cart-fill me-1"></i>
                        Buy Now
                      </button>
                        </Link>
                      
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>;
        } else {
          return null;
        }
      })}

      <Footer />
    </>
  );
};

export default Product;
