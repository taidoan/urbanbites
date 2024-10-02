import { Location } from "@/content/types";
import { FormEvent } from "react";
import LocationSelect from "./location";
import DatePicker from "./date";
import TimePicker from "./time";
import GuestsSelect from "./guests";
import { EmailField, NameField, PhoneField } from "./details";
import Button from "../Button";
import style from "./styles.module.scss"
import { error } from "./messages";

type BookingFormProps = {
  selectedLocation: Location | null,
  onLocationChange: (location: Location | null) => void,

  selectedDate: Date | null,
  onDateChange: (date: Date | null) => void,

  selectedTime: string | null,
  onTimeChange: (time: string | null) => void,

  selectedGuests: number,
  onGuestsChange: (guests: number) => void,

  onNextStep: () => void,
  expandedForm: boolean,

  errorMessage: string | null;
  setErrorMessage: (message: string | null) => void;
  name: string,
  onNameChange: (name: string) => void;
  email: string,
  onEmailChange: (email: string) => void;
  phone: string,
  onPhoneChange: (phone: string) => void;

  onSubmit: (event: FormEvent<HTMLFormElement>) => void,
}

const BookingForm = ({ 
  selectedDate,
  selectedLocation,
  selectedTime,
  selectedGuests,
  expandedForm,
  name,
  email,
  phone,
  onDateChange,
  onLocationChange,
  onTimeChange,
  onGuestsChange,
  onNextStep,
  onSubmit,
  onNameChange,
  onEmailChange,
  onPhoneChange,
  errorMessage,
  setErrorMessage,
}: BookingFormProps) => {

  return (
    <form onSubmit={onSubmit} className={style.bookingForm}>
      <div className={`${style.field} ${style.location}`}>
        <label>Location:</label>
        <LocationSelect onLocationChange={onLocationChange} />
      </div>
      <div className={`${style.field} ${style.date}`}>
        <label>Date:</label>
        <DatePicker onDateChange={onDateChange} selectedLocation={selectedLocation} disabled={!selectedLocation} />
      </div>
      <div className={`${style.field} ${style.time}`}>
        <label>Time:</label>
        <TimePicker selectedLocation={selectedLocation} selectedDate={selectedDate} disabled={!selectedLocation || !selectedDate} onTimeChange={onTimeChange} />
      </div>
      <div className={`${style.field} ${style.guests}`}>
        <label>Guests:</label>
        <GuestsSelect maxGuests={9} selectedGuests={selectedGuests} onGuestsChange={onGuestsChange} />
      </div>
      {expandedForm && (
        <div className={style.expandedFields}>
          <div className={`${style.field} ${style.name}`}>
            <label>Name:</label>
            <NameField name={name} onNameChange={onNameChange} />
          </div>
          <div className={`${style.field} ${style.email}`}>
            <label>Email:</label>
            <EmailField email={email} onEmailChange={onEmailChange} />
          </div>
          <div className={`${style.field} ${style.phone}`}>
            <label>Phone Number:</label>
            <PhoneField phone={phone} onPhoneChange={onPhoneChange} />
          </div>
        </div>
      )}
      {!expandedForm ? (
        <Button title="Next" onClick={onNextStep} type="button" hover="background" variant="tertiary" className={style.nextForm} />
      ) : (
        <div className={style.buttonGroup}>
          <Button title="Confirm" type="submit" hover="background" className={style.submitForm} />
          <Button title="reset" type="reset" hover="background" variant="tertiary" className={style.resetForm} />
        </div>
      )}

    </form>
  )
}

export default BookingForm