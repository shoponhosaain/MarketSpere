import React from 'react';
import { Link } from 'react-router-dom';
import Links from './Links';
import useFirestoreData from "../hooks/useFirestoreDoc";

const CategoryPageList = () => {
    const { data } = useFirestoreData("category");
    return (
       <>
        <div className="sidebar col-3 d-none d-md-block">
      <div className="range prime-color">
        <h5 className="font-sm prime-color font-bolt mb-3">Categories</h5>
        <hr />
        {/* categories small */}
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

export default CategoryPageList;