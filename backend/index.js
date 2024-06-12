const express = require("express");
const cors = require("cors"); // Import CORS
const projectRoutes = require("./routes/project");
const { connectmongodb } = require("./connection");

const app = express();
const Port = 8000;

// Middleware for parsing URL-encoded and JSON bodies
app.use(express.urlencoded({ extended: false }));
app.use(express.json()); // This line is needed to parse JSON bodies

// Enable CORS for all routes
app.use(cors());

// Connection to MongoDB
connectmongodb("mongodb://127.0.0.1:27017/projects")
  .then(() => console.log("mongodb connected"))
  .catch((error) => console.error("MongoDB connection error:", error));

// Routes
app.use("/api/projects", projectRoutes);

app.listen(Port, () => console.log(`Server started on port ${Port}`));
