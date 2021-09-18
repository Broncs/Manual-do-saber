require("dotenv").config();

const express = require("express");

const app = express();
const tasks = require("./routes/alunos");
const port = process.env.PORT || 3000;
const connectDb = require("./db/connect");
const notFound = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

// middleware
app.use(express.static("./public"));
app.use(express.json()); 

// routes
app.use("/api/v1/alunos", tasks);
app.use(notFound);
app.use(errorHandlerMiddleware);

const start = async () => {
  try {
    await connectDb(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`Server is running on port http://localhost:${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
