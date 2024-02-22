import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NavSearch = () => {
  const [searchValue,setSearchValue] = useState("");
    return (
        <>
           <form action="">
            <div className="input-group mb-2">
              <input
              onChange={(e)=>{setSearchValue(e.target.value)}}
                type="text"
                className="form-control"
                placeholder="Search here"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <Link className='text-decoration-none' to={"/search/"+searchValue}>
              <div className="input-group-append">
                <span
                  className="input-group-text prime-bg white border-prime-color cursor-pointer"
                  id="basic-addon2"
                >
                  Search
                </span>
              </div>
              </Link>
             
            </div>
          </form>
        </>
    );
};

export default NavSearch;