import "./App.css";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Homepage from "./components/Homepage";

function App() {
  return (
    <div className="card shadow">
      <Navbar name="Login" />
      <Homepage />
      <div className="card-body">
        <div className="App h1">Hello Admin!!</div>
        <Login />
      </div>
    </div>
  );
}

export default App;
