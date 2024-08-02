import s from "./styles.module.scss"

type CardProps = {
  title?: string,
  children?: React.ReactNode;
}

const Card = ({title, children}: CardProps) => {
  return(
    <div className={s.card}>
      <h3 className={s.title}>{title}</h3>
      {children}
    </div>
  )
}

export default Card