import Navbar from "./Components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<h2>Welcome to the Home page</h2>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
