"use client"
import style from "./styles.module.scss"
import Card from "../Card"
import CardBody from "../Card/CardBody"
import { FormEvent, useState } from "react"
import { Location } from "@/content/types"
import BookingForm from "./form"

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
    <Card>
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
          <p>Your reservation has been successfully confirmed and an email confirmation has been sent.</p>
          <div className={style.confirmedDetails}>
            <span><strong>Date:</strong> {formData.date}</span>
            <span><strong>Time:</strong> {formData.time}</span>
            <span><strong>Guests:</strong> {formData.guests}</span>
            <span><strong>Location:</strong> {formData.locationName}</span>
            <span><strong>Address:</strong> {formData.locationAddress}, {formData.locationCity}, {formData.locationPostcode}</span>
            <span><strong>Phone:</strong> {formData.locationPhone}</span>
            <span><strong>Email:</strong> {formData.locationEmail}</span>
          </div>
          <p>We look forward to welcoming you soon!</p>
        </>
        )}
      </CardBody>
    </Card>
  )
}

export default BookingsBar
