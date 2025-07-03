import { useEffect, useState } from "react";

function CulturalInfo({ destination }) {
  const [info, setInfo] = useState(null);

  useEffect(() => {
    if (!destination) return;

    const data = localStorage.getItem(`culturalInfo-${destination}`);
    if (data) {
      setInfo(JSON.parse(data));
    }
  }, [destination]);

  if (!info) return <p>No cultural info yet. Please fill it.</p>;

  return (
    <div className="cultural-info-container">
      <h3>Cultural Information</h3>
      <div className="cultural-grid">
        <div className="cultural-card"><h4>Food</h4><p>{info.food}</p></div>
        <div className="cultural-card"><h4>Temples</h4><p>{info.temples}</p></div>
        <div className="cultural-card"><h4>Festivals</h4><p>{info.festivals}</p></div>
      </div>
    </div>
  );
}

export default CulturalInfo;
