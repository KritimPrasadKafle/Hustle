import { useState } from "react";
import axios from "axios";

const Check = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  async function handleSubmit() {
    const data = {
      firstName,
      email,
      password,
    };
    console.log(data);

    const response = await axios.post("http://localhost:5552/", data);
    setFirstName("");
    setEmail("");
    setPassword("");
    console.log(response);
  }
  return (
    <div>
      <input
        type="text"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Check;
