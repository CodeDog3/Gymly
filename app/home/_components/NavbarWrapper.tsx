"use client"

import React, { useState } from 'react'
import Navbar from './Navbar'
import NavExpand from './NavExpand';

const NavbarWrapper = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    
   !isCollapsed ? <Navbar dispatch={setIsCollapsed}/> : <NavExpand dispatch={setIsCollapsed}/>

  )
}

export default NavbarWrapper