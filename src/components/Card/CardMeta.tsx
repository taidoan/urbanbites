import classNames from "classnames";
import s from "./styles.module.scss"

type CardMetaProps = {
  classes?: string,
  children: React.ReactNode,
  border?: 'top' | 'bottom',
  justify?: 'space-between' | 'center' | 'left' | 'right'
}

const CardMeta = ({classes, children, border, justify = 'left'}: CardMetaProps) => {
  const metaClass = classNames(s.meta, classes, {[s.metaBorderTop]: border === 'top'}, {[s.metaBorderBottom]: border === 'bottom'}, {[s.metaJustifySpaceBetween]: justify === 'space-between'}, {[s.metaJustifyCenter]: justify === 'center'}, {[s.metaJustifyFlexStart]: justify === 'left'}, {[s.metaJustifyFlexEnd]: justify === 'right'}) 

  return(
    <div className={metaClass}>
      {children}
    </div>
  )
}

export default CardMeta