import { useState, useEffect } from "react";
import axios from "axios";
import { AiOutlineEdit } from "react-icons/ai";

interface User {
  _id: string;
  firstName: string;
  email: string;
  password: string;
}

const CheckCheck = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [editId, setEditId] = useState<string | null>(null); // Tracks the user being edited
  const [newFirstName, setNewFirstName] = useState<string>(""); // Tracks new input value

  useEffect(() => {
    axios
      .get("http://localhost:5552/user")
      .then((response) => {
        console.log("API Response:", response.data);
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleEditClick = (userId: string, currentFirstName: string) => {
    setEditId(userId);
    setNewFirstName(currentFirstName); // Populate the input with the current name
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewFirstName(e.target.value);
  };

  const handleSave = (userId: string) => {
    axios
      .put(`http://localhost:5552/user/edit/${userId}`, {
        firstName: newFirstName,
      })
      .then((response) => {
        console.log("Updated user:", response.data);
        setUsers((prevUsers) =>
          prevUsers.map((user) =>
            user._id === userId ? { ...user, firstName: newFirstName } : user
          )
        );
        setEditId(null); // Exit edit mode
      })
      .catch((error) => {
        console.error("Error updating user:", error);
      });
  };

  const handleCancel = () => {
    setEditId(null); // Exit edit mode without saving
  };

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user._id}>
            {editId === user._id ? (
              <div style={{ display: "flex", alignItems: "center" }}>
                <input
                  type="text"
                  value={newFirstName}
                  onChange={handleInputChange}
                  autoFocus
                  style={{ marginRight: "8px" }}
                />
                <button
                  onClick={() => handleSave(user._id)}
                  style={{ marginRight: "4px" }}
                >
                  Save
                </button>
                <button onClick={handleCancel}>Cancel</button>
              </div>
            ) : (
              <div style={{ display: "flex", alignItems: "center" }}>
                <span>{user.firstName}</span>
                <button
                  style={{ marginLeft: "8px" }}
                  onClick={() => handleEditClick(user._id, user.firstName)}
                >
                  <AiOutlineEdit />
                </button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CheckCheck;
