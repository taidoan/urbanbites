import Card from "@/components/Card";
import CardImage from "@/components/Card/CardImage"
import CardBody from "@/components/Card/CardBody"
import { Location } from "@/content/types";
import CardTitle from "@/components/Card/CardTitle";
import Divider from "@/components/Divider";
import Button from "@/components/Button";
import style from ".//LocationCard.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhone, faEnvelope, faClock } from "@fortawesome/free-solid-svg-icons";

type LocationCardProps = {
  location: Location;
}

const LocationCard = ({location}: LocationCardProps) => {
  return(
    <Card id={`${location.id}`} imagePosition="left">
      <CardImage src={location.image} alt={location.name} />
      <CardBody className={style.body}>
        <div className={style.infoBlock}>
          <CardTitle title={location.name}></CardTitle>
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
            <span className={style.field}><FontAwesomeIcon icon={faPhone} /> {location.phone}</span>
            <span className={style.field}><FontAwesomeIcon icon={faEnvelope} /> {location.email}</span>
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
            <Button title="Directions" variant="beige" hover="background"/>
            <Button title="Book A Table" variant="beige" hover="background"/>
          </div>
        </div>
      </CardBody>
    </Card>
  )
}

export default LocationCard
