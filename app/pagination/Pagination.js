import React from "react";

const Pagination = ({numberOfProduct}) => {
   
  return (
    <div className="w-[20%] mx-auto mt-6 ">
        
      <button className="join-item btn">1</button>
      <button className="join-item btn btn-active">2</button>
      <button className="join-item btn">3</button>
      <button className="join-item btn">4</button>
    </div>
  );
};

export default Pagination;
