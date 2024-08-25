import styles from './divider.module.scss';
import classNames from 'classnames';

type DividerProps = {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'default';
  className?: string;
  hero?: boolean;
  center?: boolean;
}

const Divider = ({variant = 'default', className, hero = false, center = false}: DividerProps) => {
  const dividerClass = classNames(styles.divider, styles[variant], { [styles.hero]: hero }, {[styles.center]: center}, className)

  return(
    <div className={dividerClass}></div>
  )
}

export default Divider