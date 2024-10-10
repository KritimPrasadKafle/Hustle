
import Register from '../Components/Register.jsx'
import Login from '../Components/Login.jsx'
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';


function App() {
  const [isRegistered, setIsRegistered] = useState(false); // Track registration status

  return (
    <Router>
      <Routes>
        <Route
          path="/register"
          element={
            <Register onRegister={() => setIsRegistered(true)} /> // After registration, set flag
          }
        />
        <Route
          path="/login"
          element={
            isRegistered ? <Login /> : <Navigate to="/register" /> // Redirect if not registered
          }
        />
      </Routes>
    </Router>
  );
}



export default App;