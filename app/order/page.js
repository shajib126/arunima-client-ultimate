import React from 'react'
import Nav from '../navbar/Nav'
import IsAuth from '@/middleware/IsAuth'

const page = () => {
  return (
    <div>
       <Nav/>
       <IsAuth>
        <div className='w-[80%] mx-auto mt-10'>
            <h1>Order Now </h1>
            </div>
       </IsAuth>
    </div>
  )
}

export default page