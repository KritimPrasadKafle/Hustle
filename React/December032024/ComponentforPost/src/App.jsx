import { useState } from "react";
import PostComponent from './PostComponent.jsx';

function App() {
  const [posts, setPosts] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    subtitle: "",
    time: "",
    image: "",
    description: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Add a new post
  const addPost = () => {
    if (!formData.name || !formData.subtitle || !formData.description) {
      alert("Please fill in all required fields.");
      return;
    }
    setPosts([...posts, { ...formData }]);
    setFormData({ name: "", subtitle: "", time: "", image: "", description: "" });
  };

  return (
    <div style={{ background: "#dfe6e9", minHeight: "100vh", padding: 20 }}>
      <h2 style={{ textAlign: "center" }}>Post Creator</h2>
      <div
        style={{
          maxWidth: 400,
          margin: "0 auto 20px",
          background: "#fff",
          padding: 20,
          borderRadius: 10,
          boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
        }}
      >
        <h3>Create a New Post</h3>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          style={{ width: "100%", margin: "10px 0", padding: 8 }}
        />
        <input
          type="text"
          name="subtitle"
          placeholder="Subtitle (e.g., followers)"
          value={formData.subtitle}
          onChange={handleChange}
          style={{ width: "100%", margin: "10px 0", padding: 8 }}
        />
        <input
          type="text"
          name="time"
          placeholder="Time (optional)"
          value={formData.time}
          onChange={handleChange}
          style={{ width: "100%", margin: "10px 0", padding: 8 }}
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={formData.image}
          onChange={handleChange}
          style={{ width: "100%", margin: "10px 0", padding: 8 }}
        />
        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          rows="4"
          style={{ width: "100%", margin: "10px 0", padding: 8 }}
        />
        <button
          onClick={addPost}
          style={{
            width: "100%",
            padding: 10,
            backgroundColor: "#0984e3",
            color: "#fff",
            border: "none",
            borderRadius: 5,
            cursor: "pointer",
          }}
        >
          Add Post
        </button>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {posts.map((post, index) => (
          <PostComponent key={index} {...post} />
        ))}
      </div>
    </div>
  );
}

export default App;