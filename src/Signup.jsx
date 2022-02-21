import UserForm from "./UserForm";

const signup = (email, password) => {
  return fetch("/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  }).then((res) => {
    return res.json();
  });
};

const Signup = (props) => {
  const handleSignup = (email, password) => {
    signup(email, password).then(() => {
      props.onSuccess();
    });
  };
  return (
    <div>
      <UserForm onSubmit={handleSignup} />
    </div>
  );
};

export default Signup;
