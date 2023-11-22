"use client";
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import Pagination from "../pagination/Pagination";
import { useStore } from "@/store/store";

const Products = () => {
  const [productData, setProductsData] = useState(null);
  const [price,setPrice] = useState('')
  const [category,setCategory] = useState('')
  const [search,setSearch] = useState('')
  



  let categories = []
  productData?.map((product)=>{
    if(!categories.includes(product.category)){
      categories.push(product.category);
    }
 })
 
  return (
    <>
    <div className="w-[40%] mx-auto flex gap-3 flex-wrap mt-5">
      <select onChange={(e)=>setCategory(e.target.value)} className="select select-primary ">
        <option disabled selected>
          Categories
        </option>
       {categories?.map((category,i)=>(
          <option value={category} key={i}>{category}</option>
       ))}
       
       
      </select>
      <select onChange={(e)=>setPrice(e.target.value)} className="select select-bordered ">
        <option disabled selected>
          Price
        </option>
        <option value="lower"> Lower </option>
        <option value="higher">Higher</option>
        
      </select>
      <input onChange={(e)=>setSearch(e.target.value)} type="text" placeholder="Search product" className="input input-bordered " />
      </div>
      <div className="w-[80%] flex flex-wrap gap-6 mt-6 mx-auto">
        <ProductCard  productData={productData} category={category} price={price} search={search} />
      </div>
      <Pagination numberOfProduct = {productData}/>
    </>
  );
};

export default Products;
