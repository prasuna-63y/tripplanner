import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import AddDestination from "./pages/AddDestination";
import DestinationDetails from "./pages/DestinationDetails";




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/add" element={<AddDestination />} />
        <Route path="/destination/:name" element={<DestinationDetails />} />


     
      </Routes>
    </BrowserRouter>
  );
}

export default App;
