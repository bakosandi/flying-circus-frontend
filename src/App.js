import { Routes, Route } from "react-router-dom";
import UserContext from "./UserContext";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Profile from "./components/Profile";

function App() {
  return (
    <UserContext>
      <div className="App">
        <Routes>
          <Route path="/" element={<h1>Flying circus</h1>} />
          <Route path="/register" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </UserContext>
  );
}

export default App;
