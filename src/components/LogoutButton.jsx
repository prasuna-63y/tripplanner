import { useNavigate } from "react-router-dom";

function LogoutButton() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    navigate("/");
  };

  return (
    <button onClick={handleLogout} className="logout-button">
  Logout
</button>
  );
}

export default LogoutButton;
