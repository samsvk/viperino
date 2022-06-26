import React from "react";

const Heading = (props) => {
  return (
    <div className="max-w-[970px] py-5 px-0 w-100 mx-auto text-[12px] rounded border-b border-gray-100 items-center mt-10 flex">
      <div className="min-h-[65px] max-h-[65px] min-w-[65px] max-w-[65px] bg-gray-100 rounded-full block"></div>
      <div>
        <h1 className="block">{props.title}</h1>
      </div>
    </div>
  );
};

export default Heading;
