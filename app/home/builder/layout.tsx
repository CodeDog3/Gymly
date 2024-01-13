import React from 'react'
import UserPanel from './_components/UserPanel'

const layout = ({children,} : {
    children: React.ReactNode}
    ) => {
  return (
    <div className='flex w-full'>
        <UserPanel />
        {children}
    </div>
  )
}

export default layout