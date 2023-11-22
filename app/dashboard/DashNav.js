import Link from 'next/link'
import React from 'react'

const DashNav = () => {
  return (
    <div className='w-[300px] h-[100vh]  p-10 bg-slate-50'>
        <nav className='flex flex-col  gap-10 '>
            <Link className='font-bold hover:text-blue-600 border-b-2 p-1' href='/dashboard'>Dashboard</Link>
            <Link  className='font-bold hover:text-blue-600 border-b-2 p-1' href='/dashboard/createproduct'>Create Product</Link>
            <Link  className='font-bold hover:text-blue-600 border-b-2 p-1' href='/dashboard/category'>Create Category</Link>
            <Link  className='font-bold hover:text-blue-600 border-b-2 p-1' href='/dashboard/story'>Create Story</Link>
            <Link  className='font-bold hover:text-blue-600 border-b-2 p-1' href='/dashboard/order'>Orders</Link>
            <Link  className='font-bold hover:text-blue-600 border-b-2 p-1' href='/dashboard/allproduct'>All Products</Link>
            <Link  className='font-bold hover:text-blue-600 border-b-2 p-1' href='/dashboard/users'>Users</Link>
        </nav>
        <br/>
        <br/>
        <br/>
        <br/>
        <Link href='/'>Settings</Link>
    </div>
  )
}

export default DashNav