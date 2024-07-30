'use client'
import {useState, useRef, useEffect} from 'react'
import Link from "next/link"
import classNames from "classnames"
import Button from "../Button"
import Logo from "../Logo"
import useMediaQuery from '@/hooks/useMediaQuery'
import s from "./styles.module.scss"

type NavBarProps = {
  active: boolean,
}

const NavBar: React.FC<NavBarProps> = ({active}) => {
  const [open, setOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 64em");

  const toggle = () => {
    setOpen((prevState) => !prevState)
  }

  const closeMenu = () => {
    setOpen(false)
  }

  useEffect(() => {
    const bodyLock = s.lock

    if(open) {
      document.body.classList.add(bodyLock)
    } else {
      document.body.classList.remove(bodyLock)
    }

    return () => {
      document.body.classList.remove(bodyLock)
    }
  }, [open])

  useEffect(() => {
    if (isDesktop) {
      setOpen(false);
    }
  }, [isDesktop]);

  return(
    <nav>
      <MenuToggler toggle={toggle} isOpen={open} />
      <MenuOverlay open={open} className={`${s.container}`}>
        <MenuList className={`${s.menuList} ${active ? s.menuListActive : ''}`} closeMenu={closeMenu}>
        {active && isDesktop ? <Logo active={active} /> : ''}
          <MenuItem>
            <MenuLink href="/" closeMenu={closeMenu}>Home</MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink href="/about" closeMenu={closeMenu}>About</MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink href="/menus" closeMenu={closeMenu}>Menus</MenuLink>
          </MenuItem>
          {isDesktop && !active ? <Logo active={active} /> : ''}
          <MenuItem isHidden={(!isDesktop || (isDesktop && active))}>
            <MenuLink href="/bookings" closeMenu={closeMenu}>Bookings</MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink href="/events" closeMenu={closeMenu}>Events</MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink href="/locations" closeMenu={closeMenu}>Locations</MenuLink>
          </MenuItem>
          {(!isDesktop || (isDesktop && active)) && (
            <MenuItem closeMenu={closeMenu}>
            <Button variant='primary' title='Book A Table' href="/bookings" className={s.buttonActiveNav} />
          </MenuItem>
          )}
        </MenuList>
      </MenuOverlay>
    </nav>
  )
}

export default NavBar

type MenuTogglerProps = {
  toggle: () => void,
  isOpen: boolean,
}

const MenuToggler: React.FC<MenuTogglerProps> = ({ toggle, isOpen }) => {
  return (
    <label className={s.menuButton}>
      <input
        type="checkbox"
        onClick={toggle}
        aria-expanded={isOpen}
        aria-label="Toggle navigation"
        checked={isOpen}
        readOnly 
      />
      <div>
        <span></span>
        <span></span>
      </div>
    </label>
  );
};

type MenuOverlayProps = {
  children: React.ReactNode,
  open: boolean,
  className?: string
}

const MenuOverlay: React.FC<MenuOverlayProps> = ({children, open, className}) => {
  const ref = useRef<HTMLDivElement>(null)

  return(
    <div className={classNames(s.menuOverlay, {[s.menuOverlayOpened]: open}, className)} ref={ref}>{children}</div>
  )
}

type MenuListProps = {
  children: React.ReactNode,
  className?: string,
  closeMenu: () => void
}

const MenuList: React.FC<MenuListProps> = ({children, className, closeMenu}) => {
  return (<ul className={className}>{children}</ul>)
}

type MenuItemProps = {
  children: React.ReactNode,
  className?: string,
  isHidden?: boolean,
  closeMenu?: () => void;
}

const MenuItem: React.FC<MenuItemProps> = ({children, className, isHidden, closeMenu}) => {
  return (<li className={isHidden ? s.hidden : className} role="menuitem" onClick={closeMenu}>{children}</li>)
}

type MenuLinkProps = {
  children: React.ReactNode,
  href: string,
  closeMenu: () => void;
}

const MenuLink: React.FC<MenuLinkProps> = ({ children, href, closeMenu}) => {
  return (
    <Link href={href} passHref className={s.menuLink} onClick={closeMenu}>
      {children}
    </Link>
  );
};