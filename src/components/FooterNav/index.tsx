import Link from "next/link";
import s from "./styles.module.scss"

export const FooterNav = () => {
  return(
    <nav>
      <ul className={s.list}>
        <li><Link href="/locations" passHref>Locations</Link></li>
        <li><Link href="/bookings" passHref>Bookings</Link></li>
        <li><Link href="/order" passHref>Order</Link></li>
        <li><Link href="/careers" passHref>Careers</Link></li>
        <li><Link href="/menus" passHref>Menus</Link></li>
        <li><Link href="/events" passHref>Events</Link></li>
        <li><Link href="/help" passHref>FAQs</Link></li>
        <li><Link href="/contact" passHref>Contact</Link></li>
      </ul>
    </nav>
  )
}

export const PrivacyNav = () => {
  return(
    <nav>
      <ul className={s.list}>
        <li><Link href="/terms" passHref className={s.noHover}>Terms & Conditions</Link></li>
        <li><Link href="/privacy" passHref className={s.noHover}>Privacy</Link></li>
        <li><Link href="/cookies" passHref className={s.noHover}>Cookies</Link></li>
      </ul>
    </nav>
  )
}