import s from "./styles.module.scss"
import Link from "next/link"

type QuickLinkProps = {
  title: string,
  tagline: string,
  variant: 'locations' | 'events' | 'bookings',
  href: string
}

const QuickLink = ({title, tagline, variant, href}: QuickLinkProps) => {
  const classes = `${s.card} ${s[`card--${variant}`]}`;

  return(
    <Link href={href} passHref className={s.link}>
      <div className={classes}>
        <span className={s.tagline}>{tagline}</span>
        <h3 className={s.title}>{title}</h3>
      </div>
    </Link>
  )
}

export default QuickLink