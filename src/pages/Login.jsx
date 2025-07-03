import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAdmin, setIsAdmin] = useState(false); // Admin checkbox
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:8080/api/users/login", {
        email,
        password,
      });

      if (res.data) {
        localStorage.setItem("loggedInUser", JSON.stringify(res.data));
        localStorage.setItem("isAdmin", isAdmin); // ✅ Save admin flag
        alert("Login successful!");
        navigate("/dashboard");
      } else {
        alert("Invalid credentials");
      }
    } catch (error) {
      console.error("Login failed", error);
      alert("Login failed. Please try again.");
    }
  };

  return (
    <div className="login-background">
      <h1 className="portal-title">🌏 A Cultural Tourism Portal</h1>

      <form onSubmit={handleLogin}>
        <h2>Login Your Account</h2>
        <input
          type="email"
          required
          placeholder="Username"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          required
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className="login-options">
          <label>
            <input type="checkbox" /> Stay Signed In
          </label>
          <Link to="/forgot-password">Forgot Password?</Link>
        </div>

        {/* ✅ Admin Checkbox */}
        <div style={{ marginTop: "10px", textAlign: "left" }}>
          <label>
            <input
              type="checkbox"
              checked={isAdmin}
              onChange={() => setIsAdmin(!isAdmin)}
            />
            {' '}Login as Admin
          </label>
        </div>

        <button type="submit">Log In</button>
        <p>Don't have an account? <Link to="/register">Register here</Link></p>
      </form>
    </div>
  );
}

export default Login;
