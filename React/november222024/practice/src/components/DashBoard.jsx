import React from 'react'
import { Link } from 'react-router-dom'
import AddPost from './AddPost'

const DashBoard = () => {

  return (
    <div>
      <h1>Dashboard</h1>
      <Link to="notification">

        <button>Notification</button>
      </Link>
      <Link to="postcomponent">
        <button>Post Component</button>

      </Link>



    </div>
  )
}

export default DashBoard
