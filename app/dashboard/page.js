'use client'
import React from "react";
import Nav from "../navbar/Nav";
import DashNav from "./DashNav";
import Layout from "./Layout";
import Link from "next/link";


const page = () => {
  return (
    <Layout>
      <div className=" bg-slate-50  border-dashed border-2 border-gray-400 rounded-3xl p-10 w-[80%] mx-auto ">
        <h1 className="text-3xl mb-10 font-bold">Dashboard</h1>
        


        <div className="flex flex-wrap gap-6">
        <div className="bg-blue-600 h-[200px] p-6 rounded-xl ">
          <h1 className="text-3xl font-bold text-white">Products</h1>
          <br />
          <br />
          <p className="text-white">InStock: 50 </p>
          <button className="bg-blue-900 p-2 rounded-md mt-4 mx-auto w-[150px] text-white">
            All products
          </button>
        </div>

        <div className="bg-blue-600 h-[200px] p-6 rounded-xl ">
          <h1 className="text-3xl font-bold text-white">Delevered</h1>
          <br />
          <br />
          <p className="text-white">Delevered 50</p>
          <button className="bg-blue-900 p-2 rounded-md mt-4 mx-auto w-[150px] text-white">
           DELEVERED 
          </button>
        </div>

        <div className="bg-blue-600 h-[200px] p-6 rounded-xl ">
          <h1 className="text-3xl font-bold text-white">Sold</h1>
          <br />
          <br />
          <p className="text-white">Sold 50</p>
          <button className="bg-blue-900 p-2 rounded-md mt-4 mx-auto w-[150px] text-white">
            SOLD RECORD
          </button>
        </div>
        <div className="bg-blue-600 h-[200px] p-6 rounded-xl ">
          <h1 className="text-3xl font-bold text-white">Pending</h1>
          <br />
          <br />
          <p className="text-white">Pending 50</p>
          <button className="bg-blue-900 p-2 rounded-md mt-4 mx-auto w-[150px] text-white">
            PENDINGS
          </button>
        </div>
        </div>

        
      </div>
    </Layout>
  );
};

export default page;
