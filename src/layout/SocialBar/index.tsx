
import SocialLink from "../../components/SocialLink"

const SocialBar = () => {{
  return(
    <section className={`social-bar`}>
      <div className={`social-bar__container`}>
        <SocialLink network='instagram' handle='urbanbites' tagline='#UrbanEscape'/>
        <SocialLink network='facebook' handle='urbanbites' tagline='Get Updates' />
        <SocialLink network='tiktok' handle='urbanbites' tagline='Our Content' />
      </div>
    </section>
  )
}}

export default SocialBar