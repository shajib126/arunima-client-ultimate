"use client";
import React, { useEffect, useState } from "react";
import Layout from "../Layout";
import axios from "axios";
import { useStore } from "@/store/store";

const page = () => {
  const {createCategory,allCategories,categories} = useStore((state)=>state)
  const [name, setName] = useState("");

  const categoryHandler = async (e) => {
    e.preventDefault();
    createCategory(name)
    
    
  };

  useEffect(() => {
    
    allCategories()

    
  }, []);
  
  return (
    <Layout>
      <div className="border-dashed border-2 rounded-xl p-4 w-[80%]">
        <h1 className="text-3xl font-bold mb-6">Create Category</h1>
        <form onSubmit={categoryHandler} className="w-[60%] flex flex-col gap-4">
          <label>Category</label>
          <input 
            onChange={(e)=>setName(e.target.value)}
            type="text"
            placeholder="Category name"
            className="input input-bordered w-full "
          />
          <button type="submit" className="btn btn-success w-[200px]">
            Create
          </button>
        </form>

        <h1 className="text-xl font-bold mb-4 mt-4">All Categories</h1>
        <div className="overflow-x-auto">
          <table className="table w-[60%]">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {categories ? (
                categories?.map((category, i) => (
                  <tr key={i} className="bg-base-200">
                    <th>{i + 1}</th>
                    <td>{category.name}</td>
                    <td>
                      <button>edit</button>
                    </td>
                    <td>delete</td>
                  </tr>
                ))
              ) : (
                <span className="loading loading-ring loading-lg"></span>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
};

export default page;
