'use client'
import React, { useState } from "react";
import Nav from "../navbar/Nav";
import Link from "next/link";
 import { useStore } from "@/store/store";


const page = () => {
  const {user,signUpUser}  = useStore((state)=>state)
  
  const [avatar,setAvatar] = useState(null)
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')

 

  const handleSignUp = async(e)=>{
    e.preventDefault()

    await signUpUser(name,email,password,avatar)  
    if(user.success){
      alert('Sign up successfully');
    }else{
      alert('Failed to sign up');
    }
   
   
  }
  console.log(user);
  const signUpDataChange = (e)=>{
    const file = e.target.files[0]
    
    TransformFile(file)
  }
  const TransformFile = (file)=>{
    const reader = new FileReader()
    if(file){
      reader.readAsDataURL(file)
      reader.onloadend=()=>{
        setAvatar(reader.result)
      }
    }else{
      setAvatar("")
    }
  }


  return (
    <div>
      <Nav />
      <div className="w-[90%]  md:w-[50%] mx-auto shadow-md bg-slate-200 p-2 mt-3 rounded-md">

            <form onSubmit={handleSignUp} className="w-[90%] mx-auto flex flex-col gap-3 p-4">
                <h1 className="mb-6 text-xl font-bold">Sign up</h1>
                <label>Name</label>
                <input onChange={(e)=>setName(e.target.value)} className="w-full p-2 rounded-md" type="text" placeholder="name" />
                <label>email</label>
                <input onChange={(e)=>setEmail(e.target.value)} className="w-full p-2 rounded-md" type="text" placeholder="exmple@gmail.com" />
                <label>Password</label>
                <input onChange={(e)=>setPassword(e.target.value)} className="w-full p-2 rounded-md" type="password" placeholder="******" />
                <input name="avatar" accept="image/*" onChange={signUpDataChange} type="file" className="file-input w-full max-w-xs" />
                <button className="btn btn-success w-[50%] mx-auto">Sign Up</button>
                
            </form>
            <p className="text text-sm ml-[7%]">Already Have account? <Link href='/signin'>
                <button type="submit" className="btn btn-link">Sign in</button>
            </Link></p>
       </div>
    </div>
  );
};

export default page;
