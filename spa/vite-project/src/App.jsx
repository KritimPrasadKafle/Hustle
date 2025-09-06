// // import React from 'react';
// // import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
// // export default function App(){
// //   return <div>
// //     <BrowserRouter>
// //     <Link to = "/">Hell</Link>
// //     |
// //     <Link to = "/hell/class-11">Class 11</Link>
// //     |
// //     <Link to = "/hell/class-12">Class 12</Link>
// //     <Routes>
// //       <Route path = "/hell/class-11" element = {<Class11Program />} />
// //       <Route path = "/hell/class-12" element = {<Class12Program />} />
// //       <Route path = "/" element = {<Landing />} />

// import { useEffect } from "react";
// import { useState } from "react";
// import { useRef } from "react";

// // const { useRef } = require("react");



// //     </Routes>
// //     </BrowserRouter>    
// //   </div>

// // }


// // function Landing(){
// //   return <div>
// //     Welcome to the hell
// //   </div>
// // }

// // function Class11Program(){
// //   return <div>Program for class 11</div>
// // }

// // function Class12Program(){
// //   return <div>Program for class 12</div>
// // }

// // // export default App;

// function App(){
//   return (

//   // <FocusInput />
//   <Chat />
//   )
// }


// function FocusInput(){
//   const inputRef = useRef(null);

//   const handleFocus = () => {
//     inputRef.current.focus();
//   };

//   return (
//     <div>
//       <input type="text" ref={inputRef} placeholder="Click the button to focus me" />
//       <button onClick={handleFocus}>Focus the input</button>
//     </div>
//   )

// }


// function Chat() {
//   const [messages, setMessages] = useState(["Hello!", "How are you?"]);
//   const chatBoxRef = useRef(null);

//   // Function to simulate adding new messages
//   const addMessage = () => {
//     setMessages((prevMessages) => [...prevMessages, "New message!"]);
//   };

//   // Scroll to the bottom whenever a new message is added
//   useEffect(() => {
//     chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
//   }, [messages]);

//   return (
//     <div>
//       <div 
//         ref={chatBoxRef} 
//         style={{ height: "200px", overflowY: "scroll", border: "1px solid black" }}
//       >
//         {messages.map((msg, index) => (
//           <div key={index}>{msg}</div>
//         ))}
//       </div>
//       <button onClick={addMessage}>Add Message</button>
//     </div>
//   );
// }

// // export default Chat;

// export default App;


// export const useFetch = (url) => {
//   const [data, setData] = useState(null);
//   const [error, setError] = useState<Error | null>(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       setLoading(true);
//       try{
//         const response = await fetch(url);
//         const result = response.json();
//         setData(result);
//       }catch(err){
//         setError(err);
//       }finally{
//         setLoading(false);
//       }

//     };
//     fetchData();

//   }, [url]);

//   return {data, loading, error};


// }



import { useRef, useState, useEffect } from 'react'
import './App.css'

export const usePrev = (value) => {
  const ref = useRef();

  // Update the ref with the current value after each render
  useEffect(() => {
    console.log(ref.current);
    
    ref.current = value;
  }, [value]);

  // Return the previous value (current value of ref before it is updated)
  return ref.current;
};

function App() {
  const [count, setCount] = useState(0);
  const prevCount = usePrev(count); // Track the previous count value

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Counter with usePrev Hook</h1>
      <p>Current Count: {count}</p>
      <p>Previous Count: {prevCount}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)} style={{ marginLeft: '10px' }}>Decrement</button>
    </div>
  );
}

export default App
