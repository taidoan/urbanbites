
import s from "./styles.module.scss"
import classNames from "classnames"
import { CardProvider } from "./context"

type CardBodyProps = {
  size?: 'normal' | 'large',
  children?: React.ReactNode;
  textCentre?: boolean
}

const CardBody = ({size = 'normal', children, textCentre = false}: CardBodyProps) => {
  const bodyClass = classNames(s.body, {
    [s.bodyPaddingLarge]: size === 'large',
    [s.textCentre]: textCentre,
  });
  
  return(
    <CardProvider textCentre={textCentre}>
      <div className={bodyClass}>
        {children}
      </div>
    </CardProvider>
  )
}

export default CardBody