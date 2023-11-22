"use client";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import Nav from "../navbar/Nav";
import { useStore } from "@/store/store";
const images = [
  "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?cs=srgb&dl=pexels-math-90946.jpg&fm=jpg",
  "https://images.pexels.com/photos/7048385/pexels-photo-7048385.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQpTKhNreBMJHpcIcWKdpuKeBxFfeJvXpyIhSNeBEn3WwG0DRL0Z5-vi8hnoD-mVR05eY&usqp=CAU",
];
const page = () => {
  const {productById,product,addToCart} = useStore((state)=>state)
  const [imageId, setImageId] = useState(0);
  const [qty,setQty] = useState(0)
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const cartHandler = async(product)=>{
    if(qty < 1){
      alert('Product count should be at least 1')
    }else{
      console.log(qty,product);
      addToCart({product:product._id,productCount:qty})
    }
 

    
  }
  useEffect(()=>{
    productById(id)
  },[])
console.log(product?.imageUrl?.[0]);
  return (
    <div>
      <Nav />
      <div className="w-full h-full md:flex md:flex-row block">
        <div className="md:w-[50%] p-2 mx-auto sm:w-[100%]">
          <img className="w-[100%]" src={product?.imageUrl?.[imageId]} alt="" />
          <div className="flex gap-2 p-2">
            {product?.imageUrl?.map((image, i) => (
              <img
                onClick={() => setImageId(i)}
                className="w-[20%] h-[150px]"
                key={i}
                src={image}
                alt=""
              />
            ))}
          </div>
        </div>
        <div className=" shadow-lg rounded-md p-4">
          <h1>
            <span className="font-bold">Product Name:</span>
            <br /> {product?.name}
          </h1>
          <p>
            <span className="font-bold">Product description:</span>
            <br /> {product?.description}
          </p>
          <h3>
            <span className="font-bold">Category:</span>
            <br /> {product?.category?.name}{" "}
          </h3>
          <p>
            <span className="font-bold">Price:</span>
            <br /> ৳{product?.price}{" "}
          </p>
          <select onChange={(e)=>setQty(e.target.value)} className="select select-warning w-full max-w-xs mt-4">
            <option disabled selected>
              How much?
            </option>
          
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
          <br />
          <div className="flex gap-2">
            <button onClick={()=>cartHandler(product)} className="btn btn-success mt-2 hover:scale-[1.1] ">
              Add to cart
            </button>
            <button className="btn btn-primary mt-2 hover:scale-[1.1] ">
              Buy now
            </button>
          </div>
          {/* Open the modal using document.getElementById('ID').showModal() method */}
          <button
            className="btn mt-2"
            onClick={() => document.getElementById("my_modal_5").showModal()}
          >
            Share
          </button>
          <dialog
            id="my_modal_5"
            className="modal modal-bottom sm:modal-middle"
          >
            <div className="modal-box">
              <h3 className="font-bold text-lg">Share to!</h3>
              <p className="py-4">
                <button className="btn btn-primary">facebook</button>
              </p>
              <div className="modal-action">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn">Close</button>
                </form>
              </div>
            </div>
          </dialog>

          <div className="w-[40%] h-[40%]  bg-center bg-cover bg-[url('https://img.freepik.com/free-photo/fun-3d-cartoon-teenage-boy-shopping_183364-81186.jpg?w=900&t=st=1694845553~exp=1694846153~hmac=be3a6c0405b508aa58c559679760a79c0886448d6d54dacd61fb8236dd38108d')]"></div>
        </div>
      </div>
    </div>
  );
};

export default page;
