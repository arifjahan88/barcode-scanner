const express = require("express");
const cors = require("cors");
const { connectDb } = require("./utils/connectDb.js");
require("dotenv").config();
const port = process.env.PORT || 5000;
const app = express();

//middleWire
app.use(cors());
app.use(express.json());

//MongoDb connection
connectDb();

//Routes
app.use("/api/v1/products", require("./routes/products.route"));

app.get("/", async (req, res) => {
  res.send("Shapno Dashboard server is running");
});

//Error Handeling
app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMassage = err?.response?.data?.error || err.message || "Something went wrong";
  res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMassage,
    stack: err.stack,
  });
});

// //All
app.all("*", (req, res) => {
  res.status(404).json({ message: "Route not found" });
});

app.listen(port, () => console.log(`Shapno Dashboard Server running on ${port}`));
