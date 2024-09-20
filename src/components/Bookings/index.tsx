"use client"
import style from "./styles.module.scss"
import Card from "../Card"
import CardBody from "../Card/CardBody"
import { Locations } from "@/content/locations"
import { FormEvent, useState } from "react"
import DatePicker from "./date"
import TimePicker from "./time"
import { Location } from "@/content/types"
import GuestsSelect from "./guests"
import Button from "../Button"
import LocationSelect from "./location"

const BookingsBar = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null)
  const [selectedGuests, setSelectedGuests] = useState<number>(1)
  const [expandedForm, setExpandedForm] = useState(false)

    // Additional fields for expanded form
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [phone, setPhone] = useState<string>("");


  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  const handleLocationChange = (location: Location | null) => {
    setSelectedLocation(location)
  };

  const handleTimeChange = (time: string | null) => {
    setSelectedTime(time)
  }

  const handleGuestsChange = (guests: number) => {
    setSelectedGuests(guests)
  }

  const handleNextStep = () => {
    if(!selectedLocation || !selectedDate || !selectedTime || !selectedGuests) {
      console.log('Please fill in all required fields')
      return
    }

    setExpandedForm(true)
    console.log("Form Expanded:", expandedForm)
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!selectedLocation) {
      console.log("Please select a location.");
      return;
    }

    if (expandedForm && (!name || !email || !phone)) {
      console.log("Please fill in all fields in the expanded form.");
      return; // Prevent submission until all fields are filled
    }

    const formData = {
      location: selectedLocation,
      phone: selectedLocation.phone,
      date: selectedDate,
      time: selectedTime,
      guests: selectedGuests
    }
    
    console.log("Form Data:", formData)
  }
  

  return(
    <Card>
      <CardBody>
        <form onSubmit={handleSubmit} className={style.bookingsForm}>
            <div className={`field_location`}>
              <label>Location:</label>
              <LocationSelect onLocationChange={handleLocationChange} />
            </div>
            <div className={`field_date`}>
              <label>Date:</label>
              <DatePicker onDateChange={handleDateChange} selectedLocation={selectedLocation} disabled={!selectedLocation} />
            </div>
            <div className={`field_time`}>
              <label>Time:</label>
              <TimePicker selectedLocation={selectedLocation} selectedDate={selectedDate} disabled={!selectedLocation || !selectedDate} onTimeChange={handleTimeChange} />
            </div>
            <div className={`field_guests`}>
              <label>Guests:</label>
              <GuestsSelect maxGuests={9} onGuestsChange={handleGuestsChange}/>
            </div>
            {expandedForm && (
              <div>
       <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
              <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
              <input type="tel" placeholder="Phone number" value={phone} onChange={(e) => setPhone(e.target.value)} required />
              </div>
            )}
            {!expandedForm ? (
              <Button title="Next" onClick={handleNextStep} type="button"/>
            ) : ( <Button title="Confirm" type="submit"/> )}
        </form>
      </CardBody>
    </Card>
  )
}

export default BookingsBar
