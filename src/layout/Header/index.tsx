'use client'
import Logo from "@/components/Logo";
import NavBar from "@/components/NavBar";
import React, { useEffect, useState } from 'react'

const Header: React.FC = () => {
  const [active, setActive] = useState(false)
  return(
    <header className="site-header">
      <div className="site-header__layout">
        <Logo />
        <NavBar active={active}/>
      </div>
    </header>
  )
}

export default Header;