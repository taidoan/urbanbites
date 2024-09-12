import s from './styles.module.scss'

type CardDateProps = {
  day: number,
  month: string,
}

const getDaySuffix = (day: number): string => {
  if (day >= 11 && day <= 13) {
    return 'th';
  }
  switch (day % 10) {
    case 1: return 'st';
    case 2: return 'nd';
    case 3: return 'rd';
    default: return 'th';
  }
};

const getMonthAbbreviation = (month: string): string => {
  const monthMap: { [key: string]: string } = {
    January: 'Jan',
    February: 'Feb',
    March: 'Mar',
    April: 'Apr',
    May: 'May',
    June: 'Jun',
    July: 'Jul',
    August: 'Aug',
    September: 'Sep',
    October: 'Oct',
    November: 'Nov',
    December: 'Dec'
  };
  const normalizedMonth = month.charAt(0).toUpperCase() + month.slice(1).toLowerCase();
  return monthMap[normalizedMonth] || month;
};

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