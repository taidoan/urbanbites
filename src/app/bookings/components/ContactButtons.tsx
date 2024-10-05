/**
 * A React component that renders a contact button or link based on the provided properties.
 * This component can be used to create either an email or phone contact button/link.
 * 
 * @component
 * @param {ContactButtonProps} props - The properties for the ContactButton component.
 * @param {'email' | 'phone'} props.method - The method of contact, which determines the icon and styling.
 * @param {string} props.content - The text content to display within the button or link.
 * @param {string} [props.className] - Optional additional class names to apply for custom styling.
 * @param {string} [props.href] - Optional URL to navigate to when the button/link is clicked. If not provided, a button element is rendered.
 * @param {() => void} [props.onClick] - Optional click handler function for the button. Ignored if `href` is provided.
 * @param {string} [props.target] - Specifies where to open the linked document. Common values are `_self`, `_blank`, `_parent`, `_top`.
 * 
 * @returns {JSX.Element} A button or link element styled according to the method of contact.
 * 
 * @example
 * // Render a phone contact button
 * <ContactButton method="phone" content="Call Us" onClick={() => console.log('Calling...')} />
 * 
 * @example
 * // Render an email contact link
 * <ContactButton method="email" content="Email Us" href="mailto:example@example.com" target="_blank" />
 */


import style from "./ContactButtons.module.scss"
import Link from "next/link"
import classNames from "classnames"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'

type ContactButtonProps = {
  method: 'email' | 'phone',
  content: string,
  className?: string,
  href?: string,
  onClick?: () => void;
  target?: string;
}

const ContactButton = ({method, content, className, href, target, onClick}: ContactButtonProps) => {
  const ContactButtonClasses = classNames(
    style.button, className, style[method]
  )
  
  if (!href) {
    return (
      <button className={ContactButtonClasses} onClick={onClick}>
        {method === 'email' || method === 'phone' ? (
          <FontAwesomeIcon icon={method === 'email' ? faEnvelope : faPhone} />
        ) : null}
        <span className={style.method}>{method}:</span>
        {content}
      </button>
    )
  }

  return (
    <Link href={href} className={ContactButtonClasses} target={target} rel={target === '_blank' ? 'noopener noreferrer' : undefined}>
      {method === 'email' || method === 'phone' ? (
        <FontAwesomeIcon icon={method === 'email' ? faEnvelope : faPhone} />
      ) : null}
      <span className={style.method}>{method}:</span>
      {content}
    </Link>
  )
}

export default ContactButton