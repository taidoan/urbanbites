import React, { Children } from "react";
import s from "./styles.module.scss"
import CardDate from "./CardDate";
import classNames from "classnames";
import { capitaliseFirstLetter } from "@/utilities/letters";

type CardProps = {
  children?: React.ReactNode;
  event?: boolean
  review?: boolean,
  shadow?: 'normal' | 'soft',
  className?: string,
  id?: string | undefined,
  imagePosition? : 'left' | 'right' | 'top' | 'bottom'
}

const Card = ({children, event = false, shadow = 'normal', className, id, imagePosition}: CardProps) => {
  const childrenArray = Children.toArray(children)

  if (event && !childrenArray.some(child => React.isValidElement(child) && child.type === CardDate)) {
    console.warn('Card component with event=true must include a <CardDate> component.');
  }

  const positionClass = imagePosition ? s[`image${capitaliseFirstLetter(imagePosition)}`] : '';

  const classes = classNames(
    s.card, 
    (event ? s.showOverflow : ''), 
    (shadow === 'soft' ? s.softShadow : ''),
    positionClass,
    className)

  return(
    <div className={classes} id={id}>
      {children}
    </div>
  )
}

export default Card
