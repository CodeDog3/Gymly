import React, { ReactNode } from 'react'
import NavbarWrapper from './_components/NavbarWrapper'

const layout = ({children,} : {
    children: React.ReactNode}
    ) => {
      //render the navbar only when isnotcollapsed and render open bar otherwise
  return (
    <div className='flex '>
      <div className='relative'>
        <NavbarWrapper />
      </div>
      <div className='w-full'>
        {children}  
      </div>
    </div>
  )
}

export default layout