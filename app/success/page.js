'use client'
import React,{useEffect} from "react";
import Nav from "../navbar/Nav";
import IsAuth from "@/middleware/IsAuth";
import { useRouter } from "next/navigation";


const page = () => {
    const router = useRouter()
    useEffect(()=>{
        setInterval(()=>{
            router.push('/')
        },2000)
    },[])
  return (
    <div>
      <Nav />
      <IsAuth>
        <div className="w-[50%] mx-auto my-[200px] text-center">
          
          <iframe className="w-[50%] mx-auto" src="https://lottie.host/?file=0bae7911-2b99-4fe0-b5ca-e4d80a2cdaca/Fov6NuFr7U.json"></iframe>
          <h1 className="text-2xl font-bold">Successfully Paid</h1>
        </div>
      </IsAuth>
    </div>
  );
};

export default page;
