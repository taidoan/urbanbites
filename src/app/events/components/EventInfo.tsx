import { ReactNode } from "react"
import style from './styles.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCalendar, faClock, faGlobeEurope } from "@fortawesome/free-solid-svg-icons"

type EventInfoProps = {
  type: 'date' | 'time' | 'location';
  children: ReactNode;
}

const EventInfo = ({type, children}: EventInfoProps) => {
  const labels: Record<string, string> = {
    date: 'Date',
    time: 'Time',
    location: 'Location'
  }

  const icons: Record<string, ReactNode> = {
    date: <FontAwesomeIcon icon={faCalendar} />,
    time: <FontAwesomeIcon icon={faClock} />,
    location: <FontAwesomeIcon icon={faGlobeEurope} />
  }

  const label = labels[type] || 'Unknown'
  const icon = icons[type] || null


  return (
    <div className={style.eventInfoPill}>
      {icon && <span className={style.eventInfoIcon}>{icon}</span>}
      <span className={style.eventInfoLabel}>{label}: </span>
      <span className={style.eventInfoChildren}>{children}</span>
    </div>
  )
}

export default EventInfo  