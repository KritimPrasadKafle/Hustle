const express = require('express');
const app = express();
const users = require("./mock_data.json");
const fs = require('fs');
const mongoose = require('mongoose');
const { timeStamp } = require('console');

app.use(express.json());
//Connection

mongoose.connect('mongodb+srv://kritim10kafle:0123456789@cluster0.yjzcg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/Test')
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));
const PORT = 8000;


const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  jobTitle: {
    type: String,
  },
  gender: {
    type: String,
  },
}, { timeStamp: true });

const User = mongoose.model("user", userSchema);

app.get("/alluser", async (req, res) => {
  const users = await User.find();
  res.json(users);
})

app.get("/user", async (req, res) => {
  const allDbUsers = await User.find({});
  const html = `
    <ul>
    ${allDbUsers.map((user) => `<li>${user.firstName} - ${user.email}</li>`).join("")}
    </ul >
    `;
  res.send(html);
});

app.get("/user/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const user = await User.findById(id);
    if (user) {
      return res.json(user);
    } else {
      return res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    return res.status(500).json({ message: "Internal server error", error });
  }
});

app.patch("/user/:id", async (req, res) => {
  const userId = req.params.id;
  const user = await User.findByIdAndUpdate(userId, { lastName: "Changed" });
  console.log(user);

  if (user) {
    return res.json(user);
  } else {
    return res.status(404).json({ error: "user not found" });
  }
})
app.delete("/user/:id", async (req, res) => {
  const userId = req.params.id;

  try {
    const user = await User.findByIdAndDelete(userId); // Find and delete the user by _id
    if (user) {
      return res.status(200).json({ message: "User deleted successfully", user });
    } else {
      return res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    return res.status(500).json({ error: "Internal server error", details: error.message });
  }
});

app.post("/api/user", async (req, res) => {
  const body = req.body;

  if (!body || !body.first_name || !body.last_name || !body.email || !body.job_title || !body.gender) {
    return res.status(400).json({ msg: "All fields are req..." });
  }

  const result = await User.create({
    firstName: body.first_name,
    lastName: body.last_name,
    email: body.email,
    gender: body.gender,
    jobTitle: body.job_title,

  });

  console.log("result", result);

  return res.status(201).json({ msg: "success" })
});
// app.use(express.urlencoded({ exteded: false }))
app.use(express.json())
//Routes
app.get("/api/users", (req, res) => {
  res.json(users);
})

app.route("/api?users/:id")
  .get((req, res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    if (user) {
      return res.json(user);
    } else {
      return res.json({ message: "User not found" });
    }
  }).patch((req, res) => {
    return res.json({ status: "pending" })
  }).delete((req, res) => {
    //TODO: delete the user with id

    return res.json({ status: "pending" })
  })


app.post("/api/users", (req, res) => {
  //TODO: Create new user
  const body = req.body;
  users.push({ ...body, id: users.length + 1 });
  fs.writeFile("./mock_data.json", JSON.stringify(users), (err, data) => {
    return res.json({ status: "Pending" });
  });
})
app.patch("/api/users/:id", (req, res) => {
  //TODO: update the user with id

  return res.json({ status: "pending" })
})
app.delete("/api/users/:id", (req, res) => {
  //TODO: delete the user with id

  return res.json({ status: "pending" })
})





app.get("/users", (req, res) => {
  const html = `
    <ul>
    ${users.map((user) => `<li>${user.first_name}</li>`).join("")}
    </ul >
    `;
  res.send(html);
});

app.get("/api/users/:id", (req, res) => {
  const id = Number(req.params.id);
  const user = users.find((user) => user.id === id);
  if (user) {
    return res.json(user);
  } else {
    return res.json({ message: "User not found" });
  }
})

app.listen(PORT, () => {
  console.log(`Server is up and running in ${PORT} `);

});