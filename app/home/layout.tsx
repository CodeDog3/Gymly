import React, { ReactNode } from 'react'
import Navbar from './_components/Navbar'

const layout = ({children,} : {
    children: React.ReactNode}
    ) => {
  return (
    <div className='flex '>
    <Navbar />
      <div className='w-full '>
        {children}  
      </div>
    </div>
  )
}

export default layout