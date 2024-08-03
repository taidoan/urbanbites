import React, { Children } from "react";
import s from "./styles.module.scss"
import CardDate from "./CardDate";
import classNames from "classnames";

type CardProps = {
  children?: React.ReactNode;
  event?: boolean
  review?: boolean,
}

const Card = ({children, event = false}: CardProps) => {
  const childrenArray = Children.toArray(children)

  if (event && !childrenArray.some(child => React.isValidElement(child) && child.type === CardDate)) {
    console.warn('Card component with event=true must include a <CardDate> component.');
  }

  const classes = classNames(s.card, (event ? s.showOverflow : ''))

  return(
    <div className={classes}>
      {children}
    </div>
  )
}

export default Card