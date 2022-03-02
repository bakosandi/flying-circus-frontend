import Signup from "./components/Signup";
import Login from "./components/Login";
import UserContext from "./components/UserContext";
import Profile from "./components/Profile";
import { Routes, Route } from "react-router-dom";
import EnglishTest from "./components/EnglishTest";

function App() {
  return (
    <UserContext>
      <div className="App">
        <Routes>
          <Route path="/" element={<h1>Flying circus</h1>} />
          <Route path="/register" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/test" element={<EnglishTest />} />
        </Routes>
      </div>
    </UserContext>
  );
}

export default App;
