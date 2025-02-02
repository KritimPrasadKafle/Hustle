import React, { useState } from 'react'; // Import useState
import PostComponent from './PostComponent';

export const AddPost = () => {
  const [posts, setPosts] = useState([]);

  const postComponents = posts.map((post, index) => (
    <PostComponent
      key={index}
      name={post.name}
      subtitle={post.subtitle}
      time={post.time} // Corrected from post.title to post.time
      image={post.image}
      description={post.description}
    />
  ));

  function addPost() {
    setPosts([
      ...posts,
      {
        name: "harkirat",
        subtitle: "10000 followers",
        time: "2m ago", // Corrected from title to time
        image: "https://appx-wsb-gcp-mcdn.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg",
        description: "This is a test post",
      },
    ]);
  }

  return (
    <div style={{ background: "#dfe6e9", height: "100vh" }}>
      <button onClick={addPost}>Add post</button>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div>{postComponents}</div>
      </div>
    </div>
  );
};

export default AddPost;