import "./App.css";
import Navbar from "./components/Navbar";
import Login from "./components/Login";

function App() {
  return (
    <div className="card shadow">
      <div className="card-body">
        <Navbar />
        <div className="App h1">Hello Admin!!</div>
        <Login />
      </div>
    </div>
  );
}

export default App;
