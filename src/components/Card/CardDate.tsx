import s from './styles.module.scss'
import { getDaySuffix, getMonthAbbreviation } from '@/utilities/date';

type CardDateProps = {
  day: number,
  month: string | number,
}

const CardDate = ({day, month}: CardDateProps) => {
  const suffix = getDaySuffix(day);
  const abbreviatedMonth = getMonthAbbreviation(month);
  return(
    <div className={s.eventDate}>
      <span className={s.day}>{day}</span>
      <span className={s.daySuffix}>{suffix}</span>
      <span className={s.month}>{abbreviatedMonth}</span>
    </div>
  )
}

export default CardDate