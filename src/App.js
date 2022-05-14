import logo from "./logo.svg";
import { Routes, Route, Link } from "react-router-dom";
import Login from "./routes/Login";
import Room from "./routes/Room";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="Board" element={<Room />} />
    </Routes>
  );
}

export default App;
