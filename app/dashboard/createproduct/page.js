'use client'
import React, { useEffect, useState } from "react";
import Layout from "../Layout";
import axios from "axios";
import { useStore } from "@/store/store";

const page = () => {
  const {categories, allCategories} = useStore((state)=>state)
  const [name,setName] = useState('')
  const [description,setDescription] = useState('')
  const [price,setPrice] = useState(0)
  const [category,setCategory] = useState('')
  const [inStock,setInStock] = useState(0)

const [previewImages, setPreviewImages] = useState([]);
  const [images,setImages] = useState([])

  
  const handleSubmit = async(e)=>{
    
    e.preventDefault()

    const product = await axios.post(`https://arunima-server-ultimate.onrender.com/product/create`,{name,price,description,category,inStock,images:previewImages})
    if(product){
      alert('Product Created')
    }else{
      alert('something wrong')
    }
  }
  const handleImage = e =>{
    const selectedImages = Array.from(e.target.files)
    const imagePreviews = selectedImages.map((image)=>{
      const reader = new FileReader()
      reader.readAsDataURL(image)
      
      reader.onload = () =>{
        
        setPreviewImages((prevImages)=>[...prevImages,reader.result])
      }
      return image
    })
    setImages([...images,...imagePreviews])
    
  }
  useEffect(()=>{
    allCategories()
    
  },[])
  
  return (
    <Layout>
      <div className="border-dashed border-2 rounded-xl p-4 w-[80%]">
        <h1 className="text-3xl text-center font-bold mb-4">Create Product</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-[60%] mx-auto">
          <label>Product Name</label>
          <input
            onChange={(e)=>setName(e.target.value)}
            type="text"
            placeholder="product name"
            className="input input-bordered w-full "
          />
          <label>Product price</label>
          <input
          onChange={(e)=>setPrice(e.target.value)}
            type="number"
            placeholder="product price"
            className="input input-bordered w-full "
          />
          <label>Description</label>
          <textarea
            onChange={(e)=>setDescription(e.target.value)}
            placeholder="product description "
            className="textarea textarea-bordered textarea-lg w-full "
          ></textarea>
          <label>Category</label>
         
          <select onChange={(e)=>setCategory(e.target.value)} className="select select-bordered w-full max-w-xs">
            <option disabled selected>
              Choose Category
            </option>
            {categories?.map((category,i)=>(
               <option key={i} value={category._id}>{category.name}</option>
            ))}
           
            
          </select>
         <label>Product inStock?</label>
         <input onChange={(e)=>setInStock(e.target.value)} type="number" placeholder="How much available this product" className="input input-bordered w-full max-w-xs" />
          <label>Images</label>
          <input
            type="file"
            multiple
            onChange={handleImage}
            className="file-input file-input-bordered w-full max-w-xs"
          />

          <button type="submit" className="btn btn-success">Create</button>

        </form>
      </div>
    </Layout>
  );
};

export default page;
