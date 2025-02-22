const express = require("express");
const logger = require("morgan");
const cors = require("cors");
require("dotenv").config();

const {
  authRouter,
  usersRouter,
  contactsRouter,
  filesRouter,
} = require("./src/routes/api/index");
const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api/users", usersRouter);
app.use("/api/contacts", contactsRouter);
app.use("/api/files", filesRouter);

app.use((req, res, next) => {
  res.status(404).json({ message: "Not found" });
  next();
});

app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
  next();
});

module.exports = app;
