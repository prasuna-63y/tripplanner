import { useState } from "react";
import axios from "axios"; 
import { useNavigate, Link } from "react-router-dom";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

   try {
    await axios.post("http://localhost:8080/api/users/register", {
      email,
      password
    });
    alert("Registration successful");
    navigate("/");
  } catch (error) {
    console.error("Registration error:", error.response || error.message);
    alert("Error registering user");
  }
};

  return (
    <div className="register-background">
       <h1 className="portal-title">🌏 A  Cultural Tourism Portal</h1>

      <form onSubmit={handleRegister}>
    

        <h2>Register</h2>
        <input type="email" required placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        <input type="password" required placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Register</button>
        <p>Already have an account? <Link to="/">Login here</Link></p>
      </form>
    </div>
  );
}

export default Register;
