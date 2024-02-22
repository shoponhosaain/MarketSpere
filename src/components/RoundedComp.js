import React from "react";

const RoundedComp = (props) => {
  return (
    <>
      <div className="col-2 rounded-pill" style={{ height: "10rem" }}>
        <img
          className="w-100 rounded-pill"
          src={props.src}
          alt=""
        />
        <h5 className="text-center font-v-sm prime-color mt-4">
          {props.title}
        </h5>
      </div>
    </>
  );
};

export default RoundedComp;
