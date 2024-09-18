"use client"
import { useEffect, useState } from "react";
import { Location } from "@/content/types";
import { parseTime, formatTime, generateTimes } from "@/utilities/time";

interface TimePickerProps {
  location: Location | undefined;
  selectedDate: Date | null;
}

const TimePicker = ({ location, selectedDate }: TimePickerProps) => {
  const [timeOptions, setTimeOptions] = useState<string[]>([]);

  useEffect(() => {
    const updateTimeOptions = () => {
      if (!location || !selectedDate) return [];

      const { lastBooking, weekdayHours, weekendHours } = location;
      const hours: string[] = [];
      
      const isWeekend = [0, 6].includes(selectedDate.getDay()); // 0 = Sunday, 6 = Saturday
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
        const currentTime = now.getHours() * 100 + now.getMinutes(); // Convert to minutes for easier comparison
        
        return options.filter(option => {
          const [hours, minutes] = option.split(':').map(Number);
          const timeInMinutes = hours * 100 + minutes; // Convert to minutes
          return timeInMinutes >= currentTime;
        });
      }

      return options;
    };

    setTimeOptions(getFilteredTimeOptions());
  }, [location, selectedDate]);

  const parseTimeRange = (timeRange: string) => {
    const [start, end] = timeRange.split('-').map(time => time.trim());
    return { start, end };
  };

  return (
    <select>
      <option>Choose a time</option>
      {timeOptions.map((time, index) => (
        <option key={index} value={time}>{time}</option>
      ))}
    </select>
  );
};

export default TimePicker;
