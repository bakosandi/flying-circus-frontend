import Signup from "./Signup";
import Login from "./Login";

function App() {
  const handleSignupOnSuccess = () => {
    console.log("Done");
  };
  const handleLoginOnSuccess = () => {
    console.log("Done login");
  };

  return (
    <div className="App">
      <Signup onSuccess={handleSignupOnSuccess} />
      <Login onSuccess={handleLoginOnSuccess} />
    </div>
  );
}

export default App;
