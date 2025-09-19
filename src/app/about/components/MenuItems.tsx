import Link from "next/link"
import s from "./MenuItems.module.scss"
import ExportedImage from "next-image-export-optimizer"
import { StaticImageData } from "next/image";

type MenuItemProps = {
  title: string,
  category: 'food' | 'drinks',
  image: StaticImageData,
  href: string,
}

const MenuItem = ({title, category, image, href}: MenuItemProps) => {
  return(
      <div className={s.menuItemBlock}>
        <Link href={`/menus?tab=${category}`}><span className={s.category}>{category}</span></Link>
        <Link href={href} passHref className={s.link}>
            <h3 className={s.title}>{title}</h3>
          </Link>
        <div className={`${s.image}`}>
        <ExportedImage src={image} alt={title} fill style={{objectFit: 'cover'}} placeholder="blur" sizes="33vw"  />
        </div>
      </div>
  )
}

export default MenuItem

