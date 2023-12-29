"use client"
import { signOut, useSession } from 'next-auth/react'

import React from 'react'

const page = () => {

  const {data:session} = useSession()


  return (
    <>
    <h1>{session?.user?.name}</h1>
    <h1>{session?.user?.email}</h1>
    <button onClick={()=> signOut()} className='bg-red-500 dont-bold px-6 py-2 mt-3'>
      Log Out
    </button>
    </>
  )
}

export default page