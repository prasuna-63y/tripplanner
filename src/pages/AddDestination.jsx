import { useState } from "react";

import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddDestination() {
  const [name, setName] = useState("");
  const [openingTime, setOpeningTime] = useState("");
  const [closingTime, setClosingTime] = useState("");
  const [latitude, setLatitude] = useState("");
  const [destinations, setDestinations] = useState([]);

  const [longitude, setLongitude] = useState("");
  const [image, setImage] = useState("");

  const [imageUrl, setImageUrl] = useState(null);
  const navigate = useNavigate();

  // Validate lat/lng format
  const isValidCoordinate = (val) => /^-?\d+(\.\d+)?$/.test(val);


 
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isValidCoordinate(latitude) || !isValidCoordinate(longitude)) {
      alert("Invalid latitude or longitude format.");
      return;
    }

    const handleDelete = (nameToDelete) => {
  axios.delete(`http://localhost:8080/api/destinations/${nameToDelete}`)
    .then(() => {
      alert("Destination deleted!");
      setDestinations(destinations.filter(d => d.name !== nameToDelete));
    })
    .catch((err) => {
      console.error("Delete failed:", err);
      alert("Failed to delete destination.");
    });
};

    const newDestination = {
      name,
      openingTime,
      closingTime,
      latitude,
      longitude,
      image,
    };

   axios.post("http://localhost:8080/api/destinations", newDestination)
  .then(() => {
    alert("Destination added!");
    navigate("/dashboard");
    window.location.reload(); // 🔁 Force reload to re-fetch
  })
  .catch((err) => {
    console.error("Error adding destination:", err);
    alert("Failed to add destination.");
  });

};

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Destination</h2>

      <input
        type="text"
        placeholder="Destination Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      /><br />

      <label>Opening Time</label><br />
      <input
        type="time"
        value={openingTime}
        onChange={(e) => setOpeningTime(e.target.value)}
        required
      /><br />

      <label>Closing Time</label><br />
      <input
        type="time"
        value={closingTime}
        onChange={(e) => setClosingTime(e.target.value)}
        required
      /><br />

      <input
        type="text"
        placeholder="Latitude"
        value={latitude}
        onChange={(e) => setLatitude(e.target.value)}
        required
      /><br />
     
      <input
        type="text"
        placeholder="Longitude"
        value={longitude}
        onChange={(e) => setLongitude(e.target.value)}
        required
      /><br />
      

   <input
  type="text"
  placeholder="Image URL"
  value={image}
  onChange={(e) => setImage(e.target.value)}
  required
/>



      <button type="submit">Save</button><br />
      <button type="button" onClick={() => navigate("/dashboard")} style={{ marginTop: "10px" }}>
        Go Back to Dashboard
      </button>
      
    </form>
  );
}

export default AddDestination;
