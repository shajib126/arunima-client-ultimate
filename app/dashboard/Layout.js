import React from 'react'
import Nav from '../navbar/Nav'
import DashNav from './DashNav'

const Layout = ({children}) => {
    console.log(children);
  return (
    <div>
        <Nav/>
        <div className='flex '>
            <DashNav/>
            {children}
        </div>
    </div>
  )
}

export default Layout