import { FooterNav, PrivacyNav } from "@/components/FooterNav";
import Logo from "@/components/Logo";

const Footer = () => {
  const today = new Date()
  return(
    <footer className="site-footer">
      <div className="site-footer__grid">
        <div className="site-footer__top">
          <Logo footer={true} className="site-footer__logo" />
          <FooterNav />
        </div>
        <div className="site-footer__bottom">
          <span>© {today.getFullYear()} Urban Bites. All rights reserved.</span>
          <PrivacyNav />
        </div>
      </div>
    </footer>
  )
}

export default Footer