'use client'
import Link from "next/link";
import React, { useEffect } from "react";

type LogoProps = {
  active?: boolean,
  action?: () => void,
  footer?: boolean,
  className?: string,
}

const Logo = ({ active, action, footer, className }: LogoProps) => {
  useEffect(() => {
    const logoElement = document.querySelector('.site-logo') as HTMLElement | null;
    if (!logoElement) return;

    logoElement.classList.add('fade-out');

    const timeoutId = setTimeout(() => {
      logoElement.classList.remove('fade-out');
      logoElement.classList.add('fade-in');

      setTimeout(() => {
        logoElement.classList.remove('fade-in');
      }, 100);
    }, 100);

    return () => clearTimeout(timeoutId);
  }, [active]);

  const logoVariant = active ? 'logo-orange-brown' 
                  : footer ? 'logo-cream' 
                  : 'logo-orange-white';

  return (
    <Link href="/" onClick={action}>
      <svg className={`site-logo ${className}`} viewBox="0 0 148 54">
        <use xlinkHref={`/assets/images/logo-sprite.svg#${logoVariant}`} role="img"></use>
      </svg>
    </Link>
  );
}

export default Logo;
