'use client'
import {useState, useRef, useEffect} from 'react'
import Link from "next/link"
import classNames from "classnames"
import Button from "../Button"
import Logo from "../Logo"
import useMediaQuery from '@/hooks/useMediaQuery'
import s from "./styles.module.scss"
import navItems from './navItems'
import { first } from 'lodash'

type NavBarProps = {
  active: boolean,
}

const NavBar = ({active}: NavBarProps) => {
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

  const firstThreeItems = (items: {href: string; label: string}[]) => items.slice(0, 3)
  const lastThreeItems = (items: {href: string; label: string}[]) => items.slice(-3)

  return(
    <>
      <MenuToggler toggle={toggle} isOpen={open} />
      {active && isDesktop ? <Logo active={active} /> : ''}
      <Menu open={open} active={active}>
        {!isDesktop || isDesktop && active ? (
          <>
            {navItems.map(item => (
              <MenuItem key={item.href} href={item.href} closeMenu={closeMenu}>
              {item.label}
            </MenuItem>
            ))}
          </>
        ) : (
          <>
            <div className={s.menuLeft}>
              {firstThreeItems(navItems).map(item => (
                <MenuItem key={item.href} href={item.href} closeMenu={closeMenu}>
                  {item.label}
                </MenuItem>
              ))}
            </div>
            {!active ? <Logo active={active} /> : null}
            <div className={s.menuRight}>
              {lastThreeItems(navItems).map(item => (
                <MenuItem key={item.href} href={item.href} closeMenu={closeMenu}>
                  {item.label}
                </MenuItem>
              ))}
            </div>
          </>
        )}

        {(!isDesktop || (isDesktop && active)) && (
          <MenuItem closeMenu={closeMenu}>
            <Button variant='primary' title='Book A Table' href="/bookings" className={s.buttonActiveNav} />
          </MenuItem>
        )}
      </Menu>
    </>
  )
}

export default NavBar

/**
 * Props for the MenuToggler component
 */
type MenuTogglerProps = {
  toggle: () => void,
  isOpen: boolean,
}

/**
 * Component for toggling the menu
 * @param toggle - Function to toggle the menu
 * @param isOpen - Boolean indicating if the menu is open
 * @returns JSX element for the menu toggler
 */
const MenuToggler = ({toggle, isOpen}: MenuTogglerProps) => {
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
}

/**
 * Properties for the Menu component.
 */
type MenuProps = {
  children: React.ReactNode,
  open: boolean,
  className?: string
  active: boolean,
}

/**
 * Menu component that displays a menu overlay at mobile sizes and a normal menu at desktop sizes.
 * 
 * @param children - The content to be displayed inside the menu.
 * @param open - Boolean indicating whether the overlay is open.
 * @param className - Optional additional class names to apply to the menu.
 * @param active - Boolean indicating whether the menu is active.
 * @returns A nav element containing the children with appropriate classes applied.
 */
const Menu = ({children, open, className, active}: MenuProps) => {
  const isDesktop = useMediaQuery("(min-width: 64em");
  const menuClasses = classNames(
    isDesktop ? s.menuDesktop : s.menuOverlay,
    {[s.menuOverlayActive]: !isDesktop && open}, 
    className
  );

  return(
    <nav className={menuClasses} role="navigation">
      <div className={`${s.menuList} ${active ? 'active' : 'not-active'}`}>
        {children}
      </div>
    </nav>
  )
}

/**
 * Props for the MenuItem component.
 */
type MenuItemProps = {
  children: React.ReactNode,
  className?: string,
  isHidden?: boolean,
  closeMenu?: () => void;
  href?: string;
}

/**
 * A component representing a menu item.
 * 
 * @param children - The content to be displayed inside the menu item.
 * @param className - Optional additional class names to apply to the menu item.
 * @param isHidden - Whether the menu item should be hidden.
 * @param closeMenu - Optional function to call when the menu item is clicked to close the menu.
 * @param href - The URL to navigate to when the menu item is clicked.
 * @returns A JSX element representing the menu item.
 */
const MenuItem = ({children, className, isHidden, closeMenu, href}: MenuItemProps) => {
  const menuItemClasses = classNames(
    isHidden ? s.hidden : className,
    s.menuLink,
  )
  if(href) {
    return(
      <Link href={href} passHref className={menuItemClasses} role="menuitem" onClick={closeMenu}>
    {children}
    </Link>
    )
  }

  return(
    <>{children}</>
  )
}
