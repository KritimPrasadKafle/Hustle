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
      <Link to="createPost">
        <button>Create Post</button>
      </Link>
      <Link to="useEffect">
        <button>UseEffect</button>
      </Link>
      <Link to="props">
        <button>Props</button>
      </Link>

      <Link to="iterate">
        <button>Iterate</button>
      </Link>

      <Link to="reference">
        <button>Reference</button>
      </Link>

      <Link to="checking">
        <button>Checking</button>
      </Link>
      <Link to="context">
        <button>CheckPoint</button>
      </Link>



    </div>
  )
}

export default DashBoard
