require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
const auth = require('./middleware/auth');
const productRoutes = require("./routes/productRoutes");
const registerRoutes = require("./routes/registerRoutes");
const loginRoutes = require("./routes/loginRoutes");
const authRoutes = require("./routes/authRoutes");


connectDB();

const app = express();

app.set("trust proxy", 1);

app.use(
  cors({
    origin: ["https://jak-shopping.netlify.app"],
    methods: ["GET", "POST", "PUT", "DELETE","OPTION"],
    credentials: true,
  })
);

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

app.use("/api/products", productRoutes);
app.use("/register", registerRoutes);
app.use("/login",loginRoutes);
app.use("/auth",authRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log("Server running on port " + PORT));
