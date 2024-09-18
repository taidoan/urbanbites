type GuestsSelectProps = {
  maxGuests: number,
}
const GuestsSelect = ({maxGuests}: GuestsSelectProps) => {
  const guestOptions = Array.from({length: maxGuests}, (_, i) => i + 1);

  return(
    <select name="bookings-guest">
      {guestOptions.map(guestNumber => (
        <option key={guestNumber} value={guestNumber}>
          {guestNumber}
        </option>
      ))}
    </select>
  )
}

export default GuestsSelect