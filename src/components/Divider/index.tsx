import styles from './divider.module.scss';
import classNames from 'classnames';

type DividerProps = {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'default' | 'grey';
  className?: string;
  hero?: boolean;
  center?: boolean;
  weight?: 'thin' | 'thick';
  width?: 'full-width';
}

const Divider = ({variant = 'default', className, hero = false, center = false, weight = 'thick', width}: DividerProps) => {

  const dividerClass = classNames(
    styles.divider, 
    styles[variant], 
    { [styles.hero]: hero }, 
    { [styles.center]: center},
    { [styles.thin]: weight === 'thin'},
    { [styles.fullWidth]: width === 'full-width'},
    className)

  return(
    <div className={dividerClass}></div>
  )
}


export default Divider