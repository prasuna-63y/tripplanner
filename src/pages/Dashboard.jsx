import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import LogoutButton from "../components/LogoutButton";
import Map from "../components/Map";
import CulturalInfo from "../components/CulturalInfo";
import NearbyAttractions from "../components/NearbyAttractions";

function Dashboard() {
  const [destinations, setDestinations] = useState([]);
  const [searchName, setSearchName] = useState("");
  const [searchResult, setSearchResult] = useState(null);
  const [notFound, setNotFound] = useState(false);
  const sliderRef = useRef();

  const user = JSON.parse(localStorage.getItem("loggedInUser"));
  const isAdmin = localStorage.getItem("isAdmin") === "true";

  useEffect(() => {
    axios.get("http://localhost:8080/api/destinations")
      .then((res) => {
        console.log("Fetched Destinations:", res.data);
        setDestinations(res.data);
      });
  }, []);

  useEffect(() => {
    if (searchName.trim() === "") {
      setSearchResult(null);
      setNotFound(false);
    }
  }, [searchName]);

  if (!user) {
    return <p className="error-message">You must log in first.</p>;
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

  const handleSearch = () => {
    const found = destinations.find(
      (d) => d.name.toLowerCase() === searchName.toLowerCase()
    );
    if (found) {
      setSearchResult(found);
      setNotFound(false);
    } else {
      setSearchResult(null);
      setNotFound(true);
    }
  };

  return (
    <div className="dashboard-background">

      {/* Top Bar */}
      <div className="top-bar">
        <div className="logo-title">
          🌏 <strong>A Cultural Tourism Portal</strong>
        </div>
        <LogoutButton />
      </div>

      <div className="dashboard-wrapper">
        <div className="main-content">
          {/* Search */}
          <h2>Search Destination</h2>
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search..."
              value={searchName}
              onChange={(e) => setSearchName(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>
          </div>

          {notFound && <p className="error-message">Destination not found.</p>}

          {/* Search Result */}
          {searchResult && (
            <div className="search-result">
              <h3>{searchResult.name}</h3>
              <p>
                Time: {searchResult.openingTime} - {searchResult.closingTime}<br />
                Coordinates: {searchResult.latitude}, {searchResult.longitude}
              </p>
              <Map latitude={searchResult.latitude} longitude={searchResult.longitude} />
              <CulturalInfo destination={searchResult.name} />
              <NearbyAttractions lat={searchResult.latitude} lng={searchResult.longitude} />
            </div>
          )}

          <h3 style={{ marginTop: "30px" }}>Your Destinations</h3>

          {/* Grid of Destination Cards */}
          <div className="destination-grid">
            {destinations.map((d, index) => (
              <div key={index} className="destination-card">
                <img
                  src={d.image || "https://via.placeholder.com/200"}
                  alt={d.name}
                  className="destination-image"
                />
                <div className="card-info">
                  <h4>{d.name}</h4>
                  <p>{d.openingTime} - {d.closingTime}</p>
                  <Link to={`/destination/${d.name}`}>
                    <button>Details</button>
                  </Link>

                  {/* Only show delete if user is admin */}
                  {isAdmin && (
                    <button
                      className="delete-btn"
                      onClick={() => {
                        if (window.confirm(`Delete ${d.name}?`)) {
                          handleDelete(d.name);
                        }
                      }}
                    >
                      Delete
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Only show Add New Destination button to Admin */}
          {isAdmin && (
            <div style={{ marginTop: "20px", textAlign: "center" }}>
              <Link to="/add">
                <button className="add-btn">+ Add Destination</button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
