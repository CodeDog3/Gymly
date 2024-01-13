import React from 'react'
import UserPanel from './_components/UserPanel'

const layout = ({children,} : {
    children: React.ReactNode}
    ) => {
  return (
    <div className='flex'>
        <UserPanel />
        <div className='w-full'>
          {children}
        </div>
    </div>
  )
}

export default layout