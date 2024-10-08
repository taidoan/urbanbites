import style from './styles.module.scss'
import { Event } from '@/content/types'
import Card from '@/components/Card'
import CardTitle from '@/components/Card/CardTitle'
import CardImage from '@/components/Card/CardImage'
import CardBody from '@/components/Card/CardBody'
import CardDate from '@/components/Card/CardDate'
import Divider from '@/components/Divider'
import EventInfo from './EventInfo'

type EventCardProps = {
  className?: string;
  entry: Event;
}

const EventCard = ({className, entry}: EventCardProps) => {
  return(
    <Card id={`${entry.id}`} event={true}>
      {typeof entry.date === 'object' ? (
        <CardDate day={entry.date.day} month={entry.date.monthText} />
      ) : (<></>)}
      <CardBody>
        <CardImage src={entry.image} alt={entry.name} />
        <CardTitle title={entry.name} />
        <Divider weight="thin" />
        <EventInfo type="date">{entry.date.fullDate}</EventInfo>
        <EventInfo type="time">{entry.time}</EventInfo>
        <EventInfo type="location">{entry.location}</EventInfo>
        <p>{entry.description}</p>
      </CardBody>
    </Card>
  )
}

export default EventCard