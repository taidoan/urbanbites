"use client"
import { useState, useEffect } from "react";
import { Location } from "@/content/types";
import { tooltips } from "./messages";
import Tooltip from "../Tooltip";
import tooltipStyle from "../Tooltip/styles.module.scss"
import classNames from "classnames";

interface DatePickerProps {
  onDateChange: (date: Date | null) => void;
  disabled: boolean,
  selectedLocation: Location | null;
}

const DatePicker = ({ disabled, onDateChange, selectedLocation }: DatePickerProps) => {
  const [inputType, setInputType] = useState('text');
  const [date, setDate] = useState<string>('');
  const [showTooltip, setShowTooltip] = useState(false);

  const [isActive, setIsActive] = useState(false);
  const handleMouseEnter = () => setIsActive(true);
  const handleMouseLeave = () => setIsActive(false);

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
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}        
        required
      />
      {disabled && showTooltip && (
        <Tooltip position="bottom" className={classNames({ [tooltipStyle.active]: !isActive })}>{getTooltipMessage()}</Tooltip>
      )}
    </div>
  );
};

export default DatePicker;
