const { authMiddleware } = require("../src/middlewares/index");
const jwt = require("jsonwebtoken");
const { SECRET_KEY } = process.env;
