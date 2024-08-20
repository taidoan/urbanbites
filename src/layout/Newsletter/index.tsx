import Divider from "@/components/Divider"
import NewsletterForm from "@/components/NewsletterForm"

const NewsletterBar = () => {
  return (
    <section className={`newsletter-bar`}>
      <div className='newsletter-bar__container'>
        <div>
          <h2 className={`newsletter-bar__title`}>Stay Updated</h2>
          <Divider variant="tertiary" />
          <p className={`newsletter-bar__paragraph`}>Sign up with your email to receive the latest news and and exclusive events at Urban Bites. </p>
        </div>
        <NewsletterForm />
      </div>
    </section>
  )
}

export default NewsletterBar