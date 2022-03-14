const { User } = require("../models/index");
const { Unauthorized } = require("http-errors");
const { SECRET_KEY } = process.env;
const jwt = require("jsonwebtoken");

const authMiddleware = async (req, res, next) => {
  // const { authorization = "" } = req.headers;
  // const { bearer, token } = authorization.split(" ");
  const [, token] = req.headers["authorization"].split(" ");

  // console.log(bearer);
  // console.log(token);
  try {
    // if (bearer !== "Bearer") {
    //   // throw new Unauthorized("Not authorized");
    //   res.status(401).json(Unauthorized("Not authorized"));
    // }
    const { id } = jwt.verify(token, SECRET_KEY);
    const user = await User.findById(id);
    if (!user || !user.token) {
      // throw new Unauthorized("Not authorized");
      res.status(401).json(Unauthorized("Not authorized"));
    }
    req.user = user;
    next();
  } catch (error) {
    if (error.message === "Invalid signature") {
      error.status = 401;
    }
    next(error);
  }
};

module.exports = authMiddleware;
