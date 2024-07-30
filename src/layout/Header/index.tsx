'use client'
import Logo from "@/components/Logo";
import NavBar from "@/components/NavBar";
import React, { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import useMediaQuery from "@/hooks/useMediaQuery";

const Header: React.FC = () => {
  const [active, setActive] = useState(false)
  const [isLandscape, setIsLandscape] = useState(false)
  const pathname = usePathname()
  const isDesktop = useMediaQuery("(min-width: 64em)");

  useEffect(() => {
    if (typeof window !== 'undefined'){
      setIsLandscape(window.matchMedia("(orientation: landscape)").matches);

      const handleOrientationChange = () => {
        setIsLandscape(window.matchMedia("(orientation: landscape)").matches);
      };

      window.addEventListener('resize', handleOrientationChange);

      return () => {
        window.removeEventListener('resize', handleOrientationChange);
      };
    }
  }, [])

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
  
    const handleOrientationChange = () => {
      setIsLandscape(window.matchMedia("(orientation: landscape)").matches);
    };


    if (!isDesktop && isLandscape) {
      targetElement = document.querySelector("section:nth-of-type(2)") as HTMLElement | null;
    } else {
      targetElement = document.querySelector("section:first-of-type > :first-child") as HTMLElement | null;
    }
  
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleOrientationChange);
    window.addEventListener('resize', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleOrientationChange);
      window.removeEventListener('resize', handleScroll);
    };
  }, [pathname, isDesktop, isLandscape]);

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