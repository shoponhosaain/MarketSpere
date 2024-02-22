import React from "react";
import Links from "./Links";
import { Link } from "react-router-dom";
import useFirestoreData from "../hooks/useFirestoreDoc";

const SideCategory = () => {
  const { data } = useFirestoreData("category");
  return (
    <>
      <div className="side-category col-3 d-none d-md-block">
        <div className="categories">
          <h5 className="font-md font-bolt prime-color third-bg text-center p-2 border-radius mb-4">
            Categories
          </h5>

          {data.map((item) => (
            <Link key={item.id} to={"/categories/"+item.category} className="text-decoration-none">
              <div className="links ">
                <Links title={item.category} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default SideCategory;
