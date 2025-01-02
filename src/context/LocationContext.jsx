import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const LocationContext = createContext();

export const LocationProvider = ({ children }) => {
  const [selectedLocation, setSelectedLocation] = useState('Hubli');
  const [locations, setLocations] = useState(['Hubli']);

  useEffect(() => {
    async function fetchLocation() {
      try {
        const { data } = await axios.get('/api/location/find/');
        if (data.success) {
          setLocations(data.data.map(item => item.name));
        } else {
          alert("Error Fetching Locations");
        }
      } catch (e) {
        console.log(`Error: ${String(e)}`);
      }
    }
    fetchLocation();
  }, [])


  return (
    <LocationContext.Provider value={{ selectedLocation, setSelectedLocation, locations }}>
      {children}
    </LocationContext.Provider>
  );
};

export const useLocation = () => {
  const context = useContext(LocationContext);
  if (!context) {
    throw new Error('useLocation must be used within a LocationProvider');
  }
  return context;
};