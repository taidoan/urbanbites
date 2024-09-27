
import s from "./styles.module.scss"
import classNames from "classnames"
import { CardProvider } from "./context"

type CardBodyProps = {
  size?: 'normal' | 'large',
  children?: React.ReactNode;
  textCentre?: boolean
  className?: string,
}

const CardBody = ({size = 'normal', children, textCentre = false, className}: CardBodyProps) => {
  const bodyClass = classNames(s.body, {
    [s.bodyPaddingLarge]: size === 'large',
    [s.textCentre]: textCentre,
  }, className);
  
  return(
    <CardProvider textCentre={textCentre}>
      <div className={bodyClass}>
        {children}
      </div>
    </CardProvider>
  )
}

export default CardBody