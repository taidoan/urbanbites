"use client"
import { useState, useEffect } from "react";
import { Location } from "@/content/types";
import { tooltips } from "./messages";

interface DatePickerProps {
  onDateChange: (date: Date | null) => void;
  disabled: boolean,
  selectedLocation: Location | null;
}

const DatePicker = ({ disabled, onDateChange, selectedLocation }: DatePickerProps) => {
  const [inputType, setInputType] = useState('text');
  const [date, setDate] = useState<string>('');
  const [showTooltip, setShowTooltip] = useState(false);

  const todaysDate = new Date().toISOString().split('T')[0];
  const maxDate = new Date();
  maxDate.setMonth(maxDate.getMonth() + 3);
  const maxBookingDate = maxDate.toISOString().split('T')[0];

  useEffect(() => {
    if (date) {
      const dateObj = new Date(date);
      if (!isNaN(dateObj.getTime())) {
        onDateChange(dateObj);
      } else {
        onDateChange(null);
      }
    } else {
      onDateChange(null);
    }
  }, [date]);

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value);
  };

  const getTooltipMessage = () => {
    if(!selectedLocation) {
      return tooltips.chooseLocation()
    }
  }

  return (
    <div className="tooltip__wrapper" onMouseEnter={() => disabled && setShowTooltip(true)} onMouseLeave={() => setShowTooltip(false)}>
      <input
        type={inputType}
        name="booking-date"
        placeholder="Choose a date"
        onFocus={() => setInputType('date')}
        onBlur={() => setInputType('text')}
        min={todaysDate}
        max={maxBookingDate}
        onChange={handleDateChange}
        disabled={disabled}
        required
      />
      {disabled && showTooltip && (
        <div>{getTooltipMessage()}</div>
      )}
    </div>
  );
};

export default DatePicker;
