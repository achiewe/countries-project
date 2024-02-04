import { useState, useEffect } from "react";

const LocationComponent = () => {
  const [location, setLocation] = useState<any>(null);
  const [country, setCountry] = useState<string | null>(null);

  const fetchCountry = async (latitude: number, longitude: number) => {
    console.log("000");
    const apiKey = "AIzaSyBuJxOhdikzTvOD-1xKhPl0DdRiYoXuKEY"; // Replace with your API key
    const apiUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${apiKey}`;

    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data);

    if (data.results && data.results.length > 0) {
      console.log("111");
      const countryResult = data.results.find(
        (result: any) =>
          result.types.includes("country") || result.types.includes("political")
      );
      if (countryResult) {
        console.log("222");
        const countryName = countryResult.formatted_address;
        setCountry(countryName);
      }
    }
  };

  useEffect(() => {
    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            setLocation({ latitude, longitude });
            fetchCountry(latitude, longitude);
          },
          (error) => {
            console.error("Error getting location:", error.message);
          }
        );
      } else {
        console.error("Geolocation is not supported by your browser");
      }
    };

    getLocation();
  }, []);

  return (
    <div>
      {location ? (
        <p>
          Your location is: {location.latitude}, {location.longitude}
          {<span>, Country: {country}</span>}
        </p>
      ) : (
        <p>Fetching location...</p>
      )}
    </div>
  );
};

export default LocationComponent;
