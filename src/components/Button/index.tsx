import Link from 'next/link';
import classNames from 'classnames';
import s from './styles.module.scss'

type ButtonProps = {
  title: string;
  variant?: 'primary' | 'secondary' | 'tertiary' | 'danger' | 'success' | 'warning' | 'info' | 'disabled';
  href?: string;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
}

/**
 * A button component that can either be a simple button or a link styled as a button.
 * 
 * If the `href` prop is provided, the component renders a link (`<a>`) inside a `<Link>` component.
 * Otherwise, it renders a `<button>` element.
 * 
 * @param props - The props for the button component.
 * @returns The rendered button or link element.
 * 
 * @example
 * ```tsx
 * // Basic Button
 * <Button title="Submit" />
 * 
 * // Button with Different Variant
 * <Button title="Delete" variant="danger" />
 * 
 * // Disabled Button
 * <Button title="Disabled" variant="disabled" />
 * 
 * // Button with Additional Class
 * <Button title="Extra Style" className="extra-class" />
 * 
 * // Button with Type Attribute
 * <Button title="Submit Form" type="submit" />
 * 
 * // Button as a Link
 * <Button title="Go to Google" href="https://www.google.com" />
 * 
 * // Button with Click Handler
 * <Button 
 *   title="Click Me" 
 *   onClick={() => alert('Button Clicked!')} 
 * />
 * ```
 */
const Button = ({ title, variant = 'primary', href, className, type = 'button', onClick }: ButtonProps) => {
  const buttonClass = classNames(s.btn, className, s[variant]);

  if (!href) {
    return (
      <button className={buttonClass} disabled={variant === 'disabled'} type={type} onClick={onClick}>
        {title}
      </button>
    );
  }

  return (
    <Link href={href} passHref legacyBehavior>
      <a className={buttonClass}>
        {title}
      </a>
    </Link>
  );
}

export default Button;
