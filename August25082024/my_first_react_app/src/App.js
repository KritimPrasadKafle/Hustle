import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

// const Person = (props) => {
//   return (
//     <>
//       <h1>
//         Name: {props.name}
//       </h1>
//       <h2>Last Name : {props.LastName}</h2>
//       <h3>Age: {props.LastName}</h3>
//     </>
//   )
// }

const App = () => {

  // const name = null;
  // const isShowing = false;

  const [counter, setCounter] = useState(0);
  useEffect(() => {


  });


  return (
    <div className="App">

      <button onClick={() => setCounter((prevCount) => prevCount - 1)}>-</button>
      <h1>{counter}</h1>
      <button onClick={() => setCounter((prevCount) => prevCount + 1)}>+</button>








      {/* <Person 
      name="Jane" 
      LastName='Doe' 
      age='24' 

      />
      <Person 
      name={'John'} 
      LastName={'Doe'} 
      age='34' 
      />


      <h1>Hello, {2 + 2}!</h1>
      {name ? (
        <>
          <h1>{name}</h1>
        </>
      ) : (
        <><h1>test</h1> <h2>There is no name</h2></>)} */}

    </div >
  );
}

export default App;
