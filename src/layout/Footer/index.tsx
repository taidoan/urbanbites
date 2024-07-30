import Logo from "@/components/Logo";

const Footer = () => {
  const today = new Date()
  return(
    <footer className="site-footer">
      <div className="site-footer__grid">
        <div className="site-footer__top">
          <Logo footer={true} />
        </div>
        <div className="site-footer__bottom">
          <span>© {today.getFullYear()} Urban Bites. All rights reserved.</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer