import { ReactNode } from 'react'
import style from './styles.module.scss'
import classNames from 'classnames'

type TooltipProps = {
  position: 'top' | 'bottom' | 'left' | 'right',
  children: ReactNode,
  className?: string,
}

const Tooltip = ({children, position = 'top', className}: TooltipProps) => {
  const TooltipClasses = classNames(style.tooltip, className, style[position])

  return (
    <div className={TooltipClasses}>
      {children}
    </div>
  )
}

export default Tooltip