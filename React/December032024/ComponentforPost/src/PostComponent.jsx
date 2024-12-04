import { useState } from "react";

// Component for displaying a single post
const PostComponent = ({ name, subtitle, time, image, description }) => {
  const style = {
    width: 300,
    backgroundColor: "white",
    borderRadius: 10,
    border: "1px solid gray",
    padding: 20,
    margin: 10,
    color: "black",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
  };

  return (
    <div style={style}>
      <div style={{ display: "flex", marginBottom: 10 }}>
        <img
          src={image}
          alt="Profile"
          style={{ width: 40, height: 40, borderRadius: 20 }}
        />
        <div style={{ marginLeft: 10, fontSize: 14 }}>
          <b>{name}</b>
          <div>{subtitle}</div>
          {time && (
            <div style={{ display: "flex", alignItems: "center", marginTop: 5 }}>
              <div>{time}</div>
              <img
                src="https://media.istockphoto.com/id/931336618/vector/clock-vector-icon-isolated.jpg?s=612x612&w=0&k=20&c=I8EBJl8i6olqcrhAtKko74ydFEVbfCQ6s5Pbsx6vfas="
                alt="Clock"
                style={{ width: 12, height: 12, marginLeft: 5 }}
              />
            </div>
          )}
        </div>
      </div>
      <div style={{ fontSize: 14, marginTop: 10 }}>{description}</div>
    </div>
  );
};

export default PostComponent;