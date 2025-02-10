import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Image1 from './Components/Image1';
import Bodybuilder from "../src/Components/BodyBuilder.jsx";
import Gallery from './Components/Gallery';
// import Services from '../src/Components/Service.jsx'
// import ErrorBoundary from './ErrorBoundary';
const App = () => {
  return (
    // <div>
    <>
      {/* <ErrorBoundary> */}

      < Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Image1 />
            <Bodybuilder />
          </>
        } />
        <Route path="/gallery" element={<Gallery />} />
        {/* <Route path="/services" element={<Services />} /> */}
      </Routes>
      {/* </ErrorBoundary> */}
    </>

  );
};

export default App;