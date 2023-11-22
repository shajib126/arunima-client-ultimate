'use client'
import Nav from '@/app/navbar/Nav'
import { useStore } from '@/store/store'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

const IsAuth = ({children}) => {
  const {getUser,me}= useStore((state)=>state)
  const router = useRouter()
    useEffect(()=>{
     getUser()
      
    },[])
    if(me.success){
      return(
        <div>
         
          {children}
        </div>
      )
    }else{
      return (
        <div>
          <button onClick={()=>router.push('/signin')} className="btn btn-active btn-secondary">Sign In</button>

        </div>
      )
    }
 
}

export default IsAuth