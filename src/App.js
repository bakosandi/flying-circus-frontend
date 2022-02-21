import Signup from "./Signup";

function App() {
  const handleSignupOnSuccess = () => {
    console.log("Done");
  };

  return (
    <div className="App">
      <Signup onSuccess={handleSignupOnSuccess} />
    </div>
  );
}

export default App;
