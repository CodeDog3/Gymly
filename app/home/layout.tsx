import React, { ReactNode } from 'react'
import Navbar from './_components/Navbar'

const layout = ({children,} : {
    children: React.ReactNode}
    ) => {
  return (
    <div className='flex'>
    <Navbar />
    {children}
    </div>
  )
}

export default layout