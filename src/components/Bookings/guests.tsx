type GuestsSelectProps = {
  maxGuests: number,
  onGuestsChange: (guests: number) => void
}
const GuestsSelect = ({maxGuests, onGuestsChange}: GuestsSelectProps) => {
  const guestOptions = Array.from({length: maxGuests}, (_, i) => i + 1);
  const handleGuestsChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const guests = parseInt(e.target.value, 10)
    onGuestsChange(guests)
  }

  return(
    <select name="bookings-guest" onChange={handleGuestsChange}>
      {guestOptions.map(guestNumber => (
        <option key={guestNumber} value={guestNumber}>
          {guestNumber}
        </option>
      ))}
    </select>
  )
}

export default GuestsSelect