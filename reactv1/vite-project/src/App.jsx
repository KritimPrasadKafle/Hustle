// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

const { useEffect } = require("react");
const { useState } = require("react")

// import { useState } from "react"

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <p>Count</p>
//         <button onClick={() => setCount(count+1)}>Increment</button>
//       </div>
//     </>
//   )
// }

// function NotiificationComponent(){
//   let [notificationCount, setNotificationCount] = useState(0);


// }

// export default App



// import React from "react";
// import { useState } from "react";

// function App() {
//   return (
//     <>
//   <h1>Hello</h1>
//   <NotiificationComponent />
//   </>
//   )


// }

// const NotiificationComponent = () => {
//   let [notificationCount, setNotificationCount] = useState(0);

//   console.log("re-render");
//   function increment(){
//     setNotificationCount(notificationCount+1);
//   }

//   return (
//     <div>
//       <button onClick={increment}>Increase Count</button>
//       <button>{notificationCount}</button>
//     </div>
//   )
  
// }

// export default App;


// function App() {
//   const [posts, setPosts] = useState([]);

//   const postComponents = posts.map((post) => {
//     <PostComponent name = {post.name} subtitle={post.subtitle} time={post.time} description={post.description} />
//   })

//   function addPost(){
//     setPosts([...posts, {
//       name: "Kritim",
//       subtitle: "sdfdds",
//       time: "2m ago",
//       description: "sdfdfsdf"
//     }])
//   }
//   return (
//     <div style={{background: "#dfe6e9", height: "100vh", }}>
//       <button onClick={addPost}>Add post</button>
//       <div style={{display: "flex", justifyContent: "center" }}>
//         <div>
//           {postComponents}
//         </div>
//       </div>
//     </div>
//   )
// }

// function PostComponent({name, subtitle, time, image, description}){
//   return (

//   <div>
//     <b>{name}</b>

//     <div>{subtitle}</div>
//     {(time !== undefined) ? <h1> {time}</h1> : null}
  
//   <div>{description}</div>
//   </div>
  
//   )
  
  
// }

// export default App;


// import { useEffect, useState } from "react";

// function App() {
//   const [currentTab, setCurrentTab] = useState(1);
//   const [tabData, setTabData] = useState({});
//   const [loading, setLoading] = useState(true);

//   useEffect(function() {
//     setLoading(true);
//     fetch("https://jsonplaceholder.typicode.com/todos/" + currentTab)
//       .then(async res => {
//         const json = await res.json();
//         setTabData(json);
//         setLoading(false);
//       });

//   }, [])
  
//   return <div>
//     <button onClick={function() {
//       setCurrentTab(1)
//     }} style={{color: currentTab == 1 ? "red" : "black"}}>Todo #1</button>
//     <button onClick={function() {
//       setCurrentTab(2)
//     }} style={{color: currentTab == 2 ? "red" : "black"}}>Todo #2</button>
//     <button onClick={function() {
//       setCurrentTab(3)
//     }} style={{color: currentTab == 3 ? "red" : "black"}}>Todo #3</button>
//     <button onClick={function() {
//       setCurrentTab(4)
//     }} style={{color: currentTab == 4 ? "red" : "black"}}>Todo #4</button>
// <br /> 
//     {loading ? "Loading..." : tabData.title}
//   </div>
// }

// export default App


// const Timer = () => {
//   const [second, setSecond] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setSecond(prev => prev + 1);
//     }, 1000);
//     return () => clearInterval(interval);
//   }, []);
//   return <div>{second} second elapsed</div>
// }

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users');

        const data = response.json();
        setUsers(users);
      } catch(error){
        console.error('Error fetching data:', error);
        
      }finally{
        setLoading(false);
      }
    };
    fetchUser();
  }, []);

  if (loading){
    return <div>Loading...</div>
  }
  return (
    <ul>
      {users.map(user => (
        <li key = {user.id}>{user.name}</li>
      ))}
    </ul>
  )
}

export default UserList;



const Greeting = ({name}) => {
  return <div>Hello, {name}</div>

}

const App = () => {
  <Greeting name = "Alice" />
}


const ToogleMessage = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div>
      <button onClick={() => setIsVisible(!isVisible)}>Toogle Message</button>
      {isVisible && <p>This message is conditionally rendered!</p>}
    </div>
  )
}



const Card = ({children}) => {
  return (
    <div>{children}</div>
  )
}

const App1 = () => {
  return <div>
    <Card>
      <h1>Card Title</h1>
      <p>This is some contentt inside the card.</p>
    </Card>
    <Card>
      <h2>Another Card</h2>
      <p>This card has different content!</p>
    </Card>
  </div>
}

const ItemList = ({items}) => {
  return <ul>
    {items.map((item) => {
      <li key = {item.id}>{item.name}</li>
    })}
  </ul>
}

const App2 = () => {
  const items = [
    {id: 1, name: 'Item1'},
    {id: 2, name: 'Item2'},
    {id: 3, name: 'Item3'},
  ]
  return <ItemList items = {items} />
}