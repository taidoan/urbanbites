"use client"
import { Locations } from "@/content/locations"
import { useState, useEffect } from "react"
import { Location } from "@/content/types"

type LocationSelectProps = {
  onLocationChange: (location: Location | null) => void;
  selectedLocation?: Location | null;
}

const LocationSelect = ({ onLocationChange, selectedLocation }: LocationSelectProps) => {
  const [selectedLocationId, setSelectedLocationId] = useState<number | undefined>(undefined)

  useEffect(() => {
    if (selectedLocation) {
      setSelectedLocationId(selectedLocation.id);
    }
  }, [selectedLocation]);

  const handleLocationChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const locationId = parseInt(e.target.value, 10)
    const location = Locations.find(loc => loc.id === locationId)
    setSelectedLocationId(locationId);
    onLocationChange(location || null);
  }

  return (
    <select name="location" onChange={handleLocationChange} value={selectedLocationId || ""} required>
      <option value="" disabled>Select a location</option>
      {Locations.map(location => (
        <option key={location.id} value={location.id}>{location.name}</option>
      ))}
    </select>
  )
}

export default LocationSelect