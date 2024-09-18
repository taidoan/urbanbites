"use client"
import { useState, useEffect } from "react";

interface DatePickerProps {
  onDateChange: (date: Date | null) => void;
}

const DatePicker = ({ onDateChange }: DatePickerProps) => {
  const [inputType, setInputType] = useState('text');
  const [date, setDate] = useState<string>('');

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

  return (
    <input
      type={inputType}
      name="booking-date"
      placeholder="Choose a date"
      onFocus={() => setInputType('date')}
      onBlur={() => setInputType('text')}
      min={todaysDate}
      max={maxBookingDate}
      onChange={handleDateChange}
    />
  );
};

export default DatePicker;
