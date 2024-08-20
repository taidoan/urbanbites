import s from "./styles.module.scss"

type AuthorProps = {
  name: string,
}

const Author = ({name}: AuthorProps) => {
  return(
      <span className={s.authorName}>{name}</span>
  )
}

export default Author