const express = require("express");
const { logger } = require("./middleware/eventLogger");
const errorHandler = require("./middleware/errorHandler");
require('dotenv').config();
const task = require("./routes/tasks");
const app = express();
const path = require("path");
const connectDB = require('./db/connect')
const PORT = 3000 || process.env.PORT;

app.use(express.json());
//middleware for logging events
app.use(logger);
//static files
app.use(express.static(path.join(__dirname, "public")));

// app.use("/", (req, res) => {
//   res.send("hello");
// });

app.use("/api/v1/tasks", task);

app.use("/nathan", (req, res) => {
  res.json({ success: true, message: "hello" });
});

app.use(errorHandler);

const startServer = async (req, res) => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(PORT, ()=> {
      console.log('up and running');
    })
} catch (err) {
  console.error(err);
}
}

startServer()


