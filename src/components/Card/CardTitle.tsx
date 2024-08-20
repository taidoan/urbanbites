import classNames from "classnames"
import s from "./styles.module.scss"

type CardTitleProps = {
  title: string,
  classes?: string,
  size?: 'large' | 'small'
}

const CardTitle = ({title, classes, size = 'large'}: CardTitleProps) => {
  const titleClass = classNames(s.title, {[s.titleSmall]: size === 'small'}, classes)
  return(
    <h3 className={titleClass}>{title}</h3>
  )
}

export default CardTitle