"use client"
import { useEffect, useState } from "react";
import { Location } from "@/content/types";
import { tooltips } from "./messages";
import { parseTime, formatTime, generateTimes } from "@/utilities/time";
import Tooltip from "../Tooltip";

interface TimePickerProps {
  selectedLocation: Location | null;
  selectedDate: Date | null;
  disabled: boolean,
  onTimeChange: (time: string | null) => void
}

const TimePicker = ({ selectedLocation, selectedDate, disabled, onTimeChange }: TimePickerProps) => {
  const [timeOptions, setTimeOptions] = useState<string[]>([]);
  const [showTooltip, setShowTooltip] = useState(false);
  const handleTimeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const time = e.target.value;
    onTimeChange(time);
  };

  useEffect(() => {
    const updateTimeOptions = () => {
      if (!selectedLocation || !selectedDate) return [];

      const { lastBooking, weekdayHours, weekendHours } = selectedLocation;
      const hours: string[] = [];
      
      const isWeekend = [0, 6].includes(selectedDate.getDay());
      const timeRange = isWeekend ? weekendHours : weekdayHours;

      const addTimes = (timeRange: string) => {
        const { start, end } = parseTimeRange(timeRange);
        const times = generateTimes(start, end, 15); // Interval of 15 minutes
        hours.push(...times);
      };

      if (timeRange) {
        addTimes(timeRange);
      }

      if (lastBooking) {
        const lastBookingTime = parseTime(lastBooking);
        const lastBookingFormatted = formatTime(lastBookingTime);

        const filteredHours = hours.filter(time => {
          const timeDate = parseTime(time);
          return timeDate < lastBookingTime;
        });

        filteredHours.push(lastBookingFormatted);

        return Array.from(new Set(filteredHours)).sort();
      }

      return Array.from(new Set(hours)).sort();
    };

    const getFilteredTimeOptions = () => {
      const options = updateTimeOptions();
      if (!options) return [];
      
      if (selectedDate && selectedDate.toDateString() === new Date().toDateString()) {
        const now = new Date();
        const currentTime = now.getHours() * 100 + now.getMinutes(); 
        
        return options.filter(option => {
          const [hours, minutes] = option.split(':').map(Number);
          const timeInMinutes = hours * 100 + minutes;
          return timeInMinutes >= currentTime;
        });
      }

      return options;
    };

    setTimeOptions(getFilteredTimeOptions());
  }, [selectedLocation, selectedDate]);

  const parseTimeRange = (timeRange: string) => {
    const [start, end] = timeRange.split('-').map(time => time.trim());
    return { start, end };
  };

  const getTooltipMessage = () => {
    if(!selectedLocation) {
      return tooltips.chooseLocation()
    } else if (!selectedDate) {
      return tooltips.chooseDate()
    }
  }

  return (
    <div className="tooltip__wrapper" onMouseEnter={() => disabled && setShowTooltip(true)} onMouseLeave={() => setShowTooltip(false)}>
      <select disabled={disabled} onChange={handleTimeChange} required>
        <option>Choose a time</option>
        {timeOptions.map((time, index) => (
          <option key={index} value={time}>{time}</option>
        ))}
      </select>
      {disabled && showTooltip && (
        <Tooltip position="bottom">{getTooltipMessage()}</Tooltip>
      )}
    </div>
  );
};

export default TimePicker;
