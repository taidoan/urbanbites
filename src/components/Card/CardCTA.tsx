"use client"

import Button from "../Button";
import s from "./styles.module.scss"
import { useCardContext } from './context';
import classNames from "classnames";

type CardCTAProps = {
  href?: string,
  title: string,
  variant?: 'primary' | 'secondary' | 'tertiary' | 'beige' | 'disabled',
  className?: string
}

const CardCTA = ({href, title, variant = 'beige', className}: CardCTAProps) => {
  const {textCentre} = useCardContext();
  const ctaClasses = classNames(className, s.cta, (textCentre ? s.centre : ''))
  return(
    <Button title={title} href={href} variant={variant} className={ctaClasses} />
  )
}

export default CardCTA