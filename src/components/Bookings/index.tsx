"use client"
import style from "./styles.module.scss"
import Card from "../Card"
import CardBody from "../Card/CardBody"
import { Locations } from "@/content/locations"
import { useState } from "react"
import DatePicker from "./date"
import TimePicker from "./time"
import { Location } from "@/content/types"
import GuestsSelect from "./guests"
import Button from "../Button"

const BookingsBar = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedLocation, setSelectedLocation] = useState<Location | undefined>(undefined);

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  const handleLocationChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const locationId = parseInt(e.target.value, 10);
    const location = Locations.find(loc => loc.id === locationId);

    if (location) {
      setSelectedLocation(location);
    }
  };

  return(
    <Card>
      <CardBody>
        <form action="#">
          <fieldset>
            <div className={`field_location`}>
              <label>Location:</label>
              <select name="location" onChange={handleLocationChange} defaultValue="">
                <option value="" disabled>Select a location</option>
                {Locations.map(location => (
                  <option key={location.id} value={location.id}>{location.name}</option>
                ))}
              </select>
            </div>
            <div className={`field_date`}>
              <label>Date:</label>
              <DatePicker onDateChange={handleDateChange} />
            </div>
            <div className={`field_time`}>
              <label>Time:</label>
              <TimePicker location={selectedLocation} selectedDate={selectedDate} />
            </div>
            <div className={`field_guests`}>
              <label>Guests:</label>
              <GuestsSelect maxGuests={9} />
            </div>
            <Button title="confirm" type="submit"/>
          </fieldset>
        </form>
      </CardBody>
    </Card>
  )
}

export default BookingsBar
