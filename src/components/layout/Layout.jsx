import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

const Layout = ({children}) => {
  return (
    <div >
        <Navbar />
        <div className='wrap'>
            <Sidebar />
            <div className='principal'>
                {children}
            </div>
        </div>
    </div>
  )
}

export default Layout