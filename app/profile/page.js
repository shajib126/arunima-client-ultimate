"use client";
import IsAuth from "@/middleware/IsAuth";
import { useStore } from "@/store/store";
import React, { useEffect, useState } from "react";
import Nav from "../navbar/Nav";
import { useRouter } from "next/navigation";

const page = () => {
  const navigate = useRouter();
  const { getUser, me, allCart, carts, removeCart, createOrder, sslUrl } =
    useStore((state) => state);

    const [shippingIfo,setShippingInfo] = useState({
      address:'',
      city:'',
      state:'',
      phone:0
    })
  const removeHandler = (cart) => {
    removeCart(cart._id);
    allCart();
  };
  // useEffect(() => {
  //   getUser();
  // }, []);

  useEffect(() => {
    allCart();
  }, []);

  let total = carts?.reduce(
    (acc, curr) => {
      return acc + curr.productCount * curr.product.price;
    },

    0
  );

  const orderHandle = (e) => {
    e.preventDefault()
    createOrder({ total, carts },shippingIfo);
    navigate.push(sslUrl);
   
  };

  return (
    <IsAuth>
      <Nav />
      {me?.success ? (
        <div>
          <div className="w-[80%] mx-auto md:flex gap-2 border-2 border-dashed md:p-2">
            <img className="w-[200px] h-[200px]" src={me?.user?.avatar} />
            <div className="md:border-r-2 border-dashed px-4">
              <h1>Name: {me?.user?.name}</h1>
              <h1>Email: {me?.user?.email}</h1>
            </div>
            <div className="md:w-[80%] md:p-2 mt-4">
              <h1>Cart Items: {carts?.length}</h1>
              {carts.map((cart, i) => (
                <div className="w-full border-2 px-2" key={i}>
                  <div className="flex justify-between">
                    <h1 className="text-xl font-bold">Image</h1>
                    <h1 className="text-xl font-bold">Name</h1>
                    <h1 className="text-xl font-bold">Description</h1>
                    <h1 className="text-xl font-bold">Price</h1>
                    <h1 className="font-bold">Remove</h1>
                  </div>
                  <div className="flex justify-between mt-4">
                    <img
                      className="w-[100px] h-[100px]"
                      src={cart?.product?.imageUrl[0]}
                      alt=""
                    />
                    <h1>
                      {cart?.product?.name} <span>{cart?.productCount} </span>
                    </h1>
                    <p> {cart?.product?.description}</p>
                    <p>
                      {cart?.product?.price} x {cart?.productCount} ={" "}
                      {cart?.product?.price * cart?.productCount}
                    </p>

                    <svg
                      onClick={() => removeHandler(cart)}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 9.75L14.25 12m0 0l2.25 2.25M14.25 12l2.25-2.25M14.25 12L12 14.25m-2.58 4.92l-6.375-6.375a1.125 1.125 0 010-1.59L9.42 4.83c.211-.211.498-.33.796-.33H19.5a2.25 2.25 0 012.25 2.25v10.5a2.25 2.25 0 01-2.25 2.25h-9.284c-.298 0-.585-.119-.796-.33z"
                      />
                    </svg>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-10 md:mt-[10%] w-[20%] mx-auto">
              <span className="font-bold">Total:</span>{" "}
              <h1 className="text-red-500"> ৳{total}</h1>
            </div>
          </div>
          <div className="w-[20%] mx-auto mt-10">
            <button
              className="btn"
              onClick={() => document.getElementById("my_modal_1").showModal()}
            >
              Checkout
            </button>
            <dialog id="my_modal_1" className="modal">
              <div className="modal-box">
                <form onSubmit={orderHandle} className="flex flex-col gap-2">
                  <label>Address</label>
                  <input onChange={(e)=>setShippingInfo({...shippingIfo,address:e.target.value})} type="text" placeholder="Address" className="input input-bordered input-info w-full max-w-xs" />
                  <label>City</label>
                  <input onChange={(e)=>setShippingInfo({...shippingIfo,city:e.target.value})} type="text" placeholder="City" className="input input-bordered input-info w-full max-w-xs" />
                  <label>State</label>
                  <input onChange={(e)=>setShippingInfo({...shippingIfo,state:e.target.value})} type="text" placeholder="State" className="input input-bordered input-info w-full max-w-xs" />
                  <label>Phone</label>
                  <input onChange={(e)=>setShippingInfo({...shippingIfo,phone:e.target.value})} type="number" placeholder="Phone" className="input input-bordered input-info w-full max-w-xs" />
                  
                  <button type="submit" className="btn btn-warning">Place Order</button>
                </form>
                <div className="modal-action">
                  <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn">Close</button>
                  </form>
                </div>
              </div>
            </dialog>
          </div>
        </div>
      ) : (
        <span className="loading loading-bars loading-lg"></span>
      )}
    </IsAuth>
  );
};

export default page;
