import Link from "next/link"
import s from "./MenuItems.module.scss"
import ExportedImage from "next-image-export-optimizer"
import crispycalamari from "@images/about/menu/crispycalamari.jpg"
import rissotto from "@images/about/menu/risotto.jpg"
import orchardbliss from "@images/about/menu/orchardbliss.jpg"
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
        <Link href={`/menus/${category}`}><span className={s.category}>{category}</span></Link>
        <div className={s.bottom}>
          <Link href={href} passHref className={s.link}>
            <h3 className={s.title}>{title}</h3>
          </Link>
          <Link href={href} passHref className={s.end}><svg className={s.linkButton} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 50">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M24.5 48C38.031 48 49 37.255 49 24S38.031 0 24.5 0 0 10.745 0 24s10.969 24 24.5 24Zm11.353-26.121-9.188-9a3.108 3.108 0 0 0-4.33 0 2.957 2.957 0 0 0 0 4.242L26.293 21H15.312c-1.69 0-3.062 1.343-3.062 3s1.371 3 3.063 3h10.981l-3.96 3.879a2.957 2.957 0 0 0 0 4.242 3.108 3.108 0 0 0 4.332 0l9.187-9a2.957 2.957 0 0 0 0-4.242Z"/>
</svg></Link>
        </div>
        <div className={s.image}>
        <ExportedImage src={image} alt={title} fill style={{objectFit: 'cover'}} placeholder="blur"/>
        </div>
      </div>
  )
}

export default MenuItem

