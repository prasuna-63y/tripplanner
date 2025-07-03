import { useEffect, useState } from "react";

function NearbyAttractions({ lat, lng }) {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    const location = new window.google.maps.LatLng(parseFloat(lat), parseFloat(lng));
    const service = new window.google.maps.places.PlacesService(document.createElement("div"));

    const request = {
      location,
      radius: "5000",
      type: ["tourist_attraction"],
    };

    service.nearbySearch(request, (results, status) => {
      if (status === window.google.maps.places.PlacesServiceStatus.OK) {
        setPlaces(results.slice(0, 5));
      } else {
        console.error("Places API error:", status);
      }
    });
  }, [lat, lng]);

  return (
    <div>
      <h3></h3>
      <ul>
        {places.map((place, index) => (
          <li key={index}>{place.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default NearbyAttractions;
