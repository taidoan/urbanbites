"use client"
import style from "./styles.module.scss"
import Card from "../Card"
import CardBody from "../Card/CardBody"
import { FormEvent, useState } from "react"
import { Location } from "@/content/types"
import BookingForm from "./form"
import Button from "../Button"

const BookingsBar = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null)
  const [selectedGuests, setSelectedGuests] = useState<number>(1)
  const [expandedForm, setExpandedForm] = useState(false)
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [submittedForm, setSubmittedForm] = useState(false);
  const [formData, setFormData] = useState<any>(null);


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
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const formData = {
      location: selectedLocation,
      locationName: selectedLocation?.name,
      locationPhone: selectedLocation?.phone,
      locationAddress: selectedLocation?.address,
      locationCity: selectedLocation?.city,
      locationPostcode: selectedLocation?.postcode,
      locationEmail: selectedLocation?.email,
      date: selectedDate?.toLocaleDateString(),
      time: selectedTime,
      guests: selectedGuests,
      name: name,
      email: email,
      phone: phone
    }

    setFormData(formData)
    
    console.log("Form Data:", formData)
    setSubmittedForm(true);
  }

  
  return(
    <Card className={style.bookingCard}>
      <CardBody>
        {!submittedForm ? (
          <BookingForm
            selectedLocation={selectedLocation}
            selectedDate={selectedDate}
            selectedTime={selectedTime}
            selectedGuests={selectedGuests}
            expandedForm={expandedForm}
            name={name}
            email={email}
            phone={phone}
            onDateChange={handleDateChange}
            onLocationChange={handleLocationChange}
            onTimeChange={handleTimeChange}
            onGuestsChange={handleGuestsChange}
            onNextStep={handleNextStep}
            onSubmit={handleSubmit}
            onNameChange={setName} 
            onEmailChange={setEmail} 
            onPhoneChange={setPhone} 
          />
        ) : (
        <>
          <h4 className={style.confirmedTitle}>Booking Confirmed</h4>
          <p>Thank you, {formData.name}!</p>
          <p>Your booking at <strong>Urban Bites {formData.locationName}</strong> has been confirmed and an email confirmation has been sent to {formData.email}</p>
          <p><strong>{formData.date}</strong> - <strong>{formData.time}</strong> - <strong>{formData.guests} Guests</strong></p>
          <div className={style.divider}></div>
          <h4 className={style.locationDetailsTitle}>Location Details</h4>
          <div className={style.locationDetails}>
            <p><span><strong>Address:</strong> {formData.locationAddress}, {formData.locationCity}, {formData.locationPostcode}</span></p>
            <p><span><strong>Phone:</strong> {formData.locationPhone}</span></p>
            <p><span><strong>Email:</strong> {formData.locationEmail}</span></p>
          </div>
          <p>We look forward to welcoming you soon!</p>
          <Button type="button" title="Make Another Booking" variant="beige" onClick={() => {setSubmittedForm(false)}} className={style.anotherBookingButton} />
        </>
        )}
      </CardBody>
    </Card>
  )
}

export default BookingsBar
