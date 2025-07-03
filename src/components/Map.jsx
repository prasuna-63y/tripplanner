import { useEffect, useRef } from "react";

function Map({ latitude, longitude }) {
  const mapRef = useRef();

  useEffect(() => {
    const lat = parseFloat(latitude);
    const lng = parseFloat(longitude);
    const center = { lat, lng };

    const map = new window.google.maps.Map(mapRef.current, {
      center,
      zoom: 13,
    });

    new window.google.maps.Marker({
      position: center,
      map,
      title: "Destination",
    });
  }, [latitude, longitude]);

  return <div ref={mapRef} style={{ width: "100%", height: "400px", marginTop: "20px" }} />;
}

export default Map;
