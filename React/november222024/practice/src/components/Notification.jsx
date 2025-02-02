import React, { useState } from 'react'

export const Notification = () => {
  return (
    <div style={{ background: "#dfe6e9", height: "100vh" }}>
      <ToggleMessage />
    </div >
  )
}

const ToggleMessage = () => {
  let [notificationCount, setNotificationCount] = useState(0);

  console.log("re-render");
  function increment() {
    setNotificationCount(notificationCount + 1);
  }
  return (
    <div>
      <button onClick={increment}>Increment</button>
      {notificationCount}
    </div>
  )

}
export default Notification
