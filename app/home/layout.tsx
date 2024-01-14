import React, { ReactNode } from 'react'
import Navbar from './_components/Navbar'

const layout = ({children,} : {
    children: React.ReactNode}
    ) => {
      //render the navbar only when isnotcollapsed and render open bar otherwise
  return (
    <div className='flex '>
      <div className='relative'>
        
        <Navbar/>
        <div className='w-5 h-5 bg-orange-500 absolute bottom-0'>
          asdfdsf
        </div>
      </div>
      <div className='w-full '>
        {children}  
      </div>
    </div>
  )
}

export default layout