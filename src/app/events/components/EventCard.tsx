import style from './styles.module.scss'
import { Event } from '@/content/types'
import Card from '@/components/Card'
import CardTitle from '@/components/Card/CardTitle'
import CardImage from '@/components/Card/CardImage'
import CardBody from '@/components/Card/CardBody'
import CardDate from '@/components/Card/CardDate'
import Divider from '@/components/Divider'
import EventInfo from './EventInfo'
import classNames from 'classnames'

type EventCardProps = {
  className?: string;
  entry: Event;
}

const EventCard = ({className, entry}: EventCardProps) => {
  const eventCardClasses = classNames(style.eventCard, className);

  return(
    <Card id={`${entry.name}`} event={true} className={eventCardClasses}>
      {typeof entry.date === 'object' ? (
        <CardDate day={entry.date.day} month={entry.date.monthText} />
      ) : (<></>)}
      <CardBody className={style.eventCardBody}>
        <CardImage src={entry.image} alt={entry.name} classes={style.eventImage} />
        <div className={style.eventCardContent}>
          <CardTitle title={entry.name} />
          <Divider weight="thin" variant="grey" width="full-width" />
          <div className={style.eventInfo}>
            <EventInfo type="date">{entry.date.fullDate}</EventInfo>
            <EventInfo type="time">{entry.time}</EventInfo>
            <EventInfo type="location">{entry.location}</EventInfo>
          </div>
          <p>{entry.description}</p>
        </div>
      </CardBody>
    </Card>
  )
}

export default EventCard