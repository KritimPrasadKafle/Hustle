import React from 'react'

const Render = ({ image, title, description, rating }) => {
  // Function to render stars based on rating
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} style={{ color: i <= rating ? 'gold' : 'gray' }}>
          &#9733;
        </span>
      );
    }
    return stars;
  };

  return (
    <div style={styles.Render}>
      <img src={image} alt={title} style={styles.image} />
      <div style={styles.content}>
        <h3>{title}</h3>
        <p>{description}</p>
        <div>{renderStars(rating)}</div>
      </div>
    </div>
  );
};

// Styling for the Render component
const styles = {
  Render: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    width: '250px',
    overflow: 'hidden',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    margin: '10px',
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: '150px',
    objectFit: 'cover',
  },
  content: {
    padding: '15px',
  },
}

export const Props = () => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      <Render
        image="https://via.placeholder.com/250x150"
        title="Sample Render"
        description="This is a sample Render with an image, description, and rating."
        rating={4}
      />
      <Render
        image="https://via.placeholder.com/250x150"
        title="Another Render"
        description="This Render also contains an image, description, and a rating."
        rating={5}
      />
    </div>
  );
}
export default Render

