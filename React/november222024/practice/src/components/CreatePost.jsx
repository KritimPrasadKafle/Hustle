import React, { useState } from 'react';

const CreatePost = () => {
  const [input, setInput] = useState('');
  const [isPosted, setIsPosted] = useState(false);
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState('');
  const [posts, setPosts] = useState([]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  function handleButton() {
    if (!input.trim()) {
      alert('You should at least put one value.');
      return;
    }
    setPosts([...posts, { text: input, image: preview }]);
    setImage(null);
    setPreview('');
    setInput('');
  }

  return (
    <div>
      <h1>Create Post</h1>
      <input type="file" onChange={handleImageChange} />
      <input type="text" onChange={(e) => setInput(e.target.value)} value={input} />
      <button onClick={handleButton}>Post</button>

      <div>
        {posts.map((post, index) => (
          <div key={index} style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
            {post.image && (
              <img src={post.image} alt="Uploaded Preview" style={{ width: '50px', height: '50px', borderRadius: '10px', marginRight: '10px' }} />
            )}
            <h2>{post.text}</h2>

          </div>
        ))}
      </div>
    </div>

  );
}



export default CreatePost;
