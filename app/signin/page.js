'use client'
import React, { useState,useEffect } from 'react'
import Nav from '../navbar/Nav'
import Link from 'next/link'
import { useStore } from '@/store/store'
import { useRouter } from 'next/navigation'

const page = () => {
  const {signInUser,user} = useStore((state)=>state)
  const [email,setEmal] = useState("")
  const [password,setPassword] = useState("")
  const navigate = useRouter()
  const handleSignIn = (e)=>{
    e.preventDefault()
    signInUser(email,password)
    const token = localStorage.getItem('token')
    
   if(token){
    navigate.push('/')
   }else{
    navigate.push('/signin')
   }
    
  }
  useEffect(()=>{
    if(localStorage.getItem('token')){
      navigate.push('/')
    }
  },[])
  return (
   <div>
    <Nav/>
    <form onSubmit={handleSignIn} className='bg-slate-300 w-[40%] flex flex-col mx-auto gap-3 p-10 rounded-md shadow-md mt-6'>
        <h1>Sign in</h1>
        <label>Email</label>
        <input onChange={(e)=>setEmal(e.target.value)} className='bg-white p-3 rounded-md' type="text" placeholder='email' />
        <label>Password</label>
        <input onChange={(e)=>setPassword(e.target.value)} className='bg-white p-3 rounded-md' type="password" placeholder='*****' />

        <button type='submit' className='btn btn-success w-[50%] mx-auto'>Sign In</button>
        <p className='text-sm '>Don't have an account? <Link href='/signup'>
            <button className='btn btn-link'>Sing up</button>
            </Link> </p>
    </form>
    
   </div>
  )
}

export default page