import { useState } from "react";
import '../src/login.css'

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', { email, password });
      localStorage.setItem('token', response.data.token);
      console.log('Login successfull');

    } catch (err) {
      console.error('Error loggin in', err);

    }

  }



  return (
    <form onSubmit={handleSubmit}>
      <label for="Email">Email*</label>
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />

      <label for="password">Password*</label>
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />

      <button type="submit">Login</button>
    </form>
  )

}