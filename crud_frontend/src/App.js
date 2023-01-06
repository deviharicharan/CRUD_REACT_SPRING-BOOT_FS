import "./App.css";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Homepage from "./components/Homepage";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AddUser from "./components/AddUser";
function App() {
  return (
    <div className="card shadow">
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/homepage" element={<Homepage />} />
          <Route exact path="/addUser" element={<AddUser />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
