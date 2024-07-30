'use client'
import Logo from "@/components/Logo";
import NavBar from "@/components/NavBar";
import React, { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import useMediaQuery from "@/hooks/useMediaQuery";

const Header: React.FC = () => {
  const [active, setActive] = useState(false)
  const pathname = usePathname()
  const isDesktop = useMediaQuery("(min-width: 64em)");

  useEffect(() => {
    const headerElement = document.querySelector('.site-header') as HTMLElement | null;
    let targetElement: HTMLElement | null = null;
  
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const targetPosition = targetElement?.offsetTop || 0;
      
      if (headerElement && targetElement) {
        scrollPosition > targetPosition - headerElement.clientHeight
          ? setActive(true)
          : setActive(false);
      }
    };
  
    targetElement = document.querySelector("section:first-of-type > :first-child") as HTMLElement | null;
  
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [pathname]);

  const handleResetActive = () => {
    setActive(false)
  }

  return(
    <header className={`site-header${active ? ' active' : ''}`}>
      <div className="site-header__layout">
      {isDesktop ? '' : 
          <Logo active={active} action={handleResetActive} />
        }
        <NavBar active={active}/>
      </div>
    </header>
  )
}

export default Header;