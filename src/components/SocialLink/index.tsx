import Link from "next/link";
import s from "./styles.module.scss"
import ExportedImage from "next-image-export-optimizer";

type SocialLinkProps = {
  network: 'instagram' | 'tiktok' | 'facebook',
  handle: string,
  tagline: string,
}

const SocialLink = ({network, handle, tagline}: SocialLinkProps) => {
  let url
  let title = handle

  if (network === 'instagram') {
    url = `https://instagram.com/${handle}`
    title = `@${handle}`
  } else if (network === 'facebook'){
    url = `https://facebook.com/${handle}`
  } else if (network === 'tiktok'){
    url = `https://tiktok.com/${handle}`
  } else {
    url = `#`
  }

  return(
    <div className={s.item}>
      <Link href={url} passHref target="_blank"><ExportedImage src={`${process.env.NEXT_PUBLIC_BASE_URL}/assets/images/icons/${network}.svg`} width={80} height={80} alt={network} className={s.icon} /></Link>
      <div className={s.text}>
        <span className={s.tagline}>{tagline}</span>
        <Link href={url} passHref className={s.link} target="_blank">
          {title}
        </Link>
      </div>
    </div>
  )
} 

export default SocialLink