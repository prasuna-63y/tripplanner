import { useParams, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react";
import Map from "../components/Map";
import CulturalInfo from "../components/CulturalInfo";
import NearbyAttractions from "../components/NearbyAttractions";

function DestinationDetail() {
  const { name } = useParams();
    const navigate = useNavigate();
  const [destination, setDestination] = useState(null);

 useEffect(() => {
  fetch(`http://localhost:8080/api/destinations/${encodeURIComponent(name)}`)
    .then(res => {
      if (!res.ok) throw new Error(res.statusText);
      return res.json();
    })
    .then(data => {
      console.log("DETAILS:", data);
      setDestination(data);
    })
    .catch(err => console.error("DETAILS FETCH ERROR:", err));
}, [name]);


  if (!destination) return <p>Loading...</p>;

  return (
    <div className="destination-details-page">
      <div className="details-wrapper">
        <div className="details-map">
          <Map latitude={destination.latitude} longitude={destination.longitude} />
        </div>
        <div className="details-content">
          <h2>{destination.name}</h2>
          <p><strong>Open:</strong> {destination.openingTime} - {destination.closingTime}</p>
          <p><strong>Coordinates:</strong> {destination.latitude}, {destination.longitude}</p>
          <CulturalInfo destination={destination.name} />
         

          <NearbyAttractions lat={destination.latitude} lng={destination.longitude} />
        </div>
      </div>
    </div>
  );
}

export default DestinationDetail;
