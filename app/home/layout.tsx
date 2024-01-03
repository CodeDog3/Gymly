import React, { ReactNode } from 'react'
import Navbar from './_components/Navbar'

const layout = ({children,} : {
    children: React.ReactNode}
    ) => {
  return (
    <>
    <Navbar />
    {children}
    </>
  )
}

export default layout