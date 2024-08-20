import s from "./styles.module.scss"
import Button from "../Button"

const NewsletterForm = () => {
  return(
    <form className={s.form}>
        <input type="email" placeholder="Email Address" className={s.input} required />
        <Button type="submit" variant="tertiary" title='Sign Up' className={s.submit} />
    </form>
  )
}

export default NewsletterForm