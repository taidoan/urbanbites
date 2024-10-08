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
    <div>
      {icon && <span>{icon}</span>}
      <span>{label}: </span>
      <span>{children}</span>
    </div>
  )
}

export default EventInfo  