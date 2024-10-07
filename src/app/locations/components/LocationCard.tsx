import Card from "@/components/Card";
import CardImage from "@/components/Card/CardImage"
import CardBody from "@/components/Card/CardBody"
import { Location } from "@/content/types";
import CardTitle from "@/components/Card/CardTitle";
import Divider from "@/components/Divider";
import Button from "@/components/Button";
import style from "./styles.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhone, faEnvelope, faClock } from "@fortawesome/free-solid-svg-icons";

type LocationCardProps = {
  location: Location;
  className: string,
}

const LocationCard = ({location, className}: LocationCardProps) => {
  return(
    <Card id={`${location.id}`} imagePosition="left" className={className}>
      <CardImage src={location.image} alt={location.name} />
      <CardBody className={style.body}>
        <div className={style.infoBlock}>
          <CardTitle title={location.name} size="large"></CardTitle>
          <Divider />
          <p>{location.description}</p>
        </div>
        <div className={style.detailsBlock}>
          <div className={`${style.subBlock}`}>
            <CardTitle title="Address" size="small" />
            <Divider weight="thin" width="full-width"/>
            <div className={`${style.field} ${style.address}`}>
              <span>Urban Bites</span>
              <span>{location.address}</span>
              <span>{location.city}, {location.postcode}</span>
            </div>
            <span className={style.field}><FontAwesomeIcon icon={faPhone} /> <a href={`tel:${location.phone}`}>{location.phone}</a></span>
            <span className={style.field}><FontAwesomeIcon icon={faEnvelope} /> <a href={`mailto:${location.email}`}>{location.email}</a></span>
          </div>
          <div className={`${style.subBlock} hours`}>
            <CardTitle title="Opening Hours" size="small" />
            <Divider weight="thin" width="full-width"/>
            <span className={style.field}><FontAwesomeIcon icon={faClock} /> Mon-Fri: {location.weekdayHours}</span>
            <span className={style.field}><FontAwesomeIcon icon={faClock} />Sat-Sun: {location.weekendHours}</span>
            <span className={style.field}>Serving breakfast until {location.breakfastEnd}</span>
            <span className={style.field}>Last booking at {location.lastBooking}</span>
          </div>
          <div className={`${style.subBlock} ${style.ctaBlock}`}>
            <Button title="Directions" variant="beige" hover="background" href={location.mapLink} target="_blank" />
            <Button title="Book A Table" variant="beige" hover="background" href={`/bookings?locationId=${location.id}`} />
          </div>
        </div>
      </CardBody>
    </Card>
  )
}

export default LocationCard
