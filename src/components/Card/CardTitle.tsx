import classNames from "classnames"
import s from "./styles.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons"

type CardTitleProps = {
  title: string,
  classes?: string,
  size?: 'large' | 'small',
  orderTitle?: boolean,
  orderButtonAction?: (item: any) => void;
}

const CardTitle = ({title, classes, size, orderTitle, orderButtonAction}: CardTitleProps) => {
  const titleClass = classNames(
    s.title, 
    {[s.titleSmall]: size === 'small'}, 
    {[s.titleLarge]: size === 'large'},
    classes)
  if(orderTitle) {
    return(
      <div className={s.basketAddTitle}><h3 className={titleClass}>{title}</h3><FontAwesomeIcon icon={faCirclePlus} onClick={orderButtonAction} /></div>
    )
  }

  return(
    <h3 className={titleClass}>{title}</h3>
  )
}

export default CardTitle