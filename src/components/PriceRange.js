import React from "react";

const PriceRange = () => {
  return (
    <>
      <div className="range prime-color">
        <h5 className="font-sm prime-color font-bolt mb-3">Price</h5>
        <div className="min-max d-flex">
          <input
            type="range"
            className="form-range"
            style={{ width: "40%" }}
            min={0}
            max={50000}
            step="0.5"
            id="customRange3"
          />
        </div>
        <h6 className="my-2 prime-color font-bolt">0</h6>
        <button className="range-btn my-2">Apply</button>
        <hr />
      </div>
    </>
  );
};

export default PriceRange;
