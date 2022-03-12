const authMiddleware = require("./authMiddleware");
const validationMiddleware = require("./validationMiddleware");
const controllerWrapper = require("./controllerWrapper");

module.exports = { authMiddleware, validationMiddleware, controllerWrapper };

// const { users: ctrl } = require("..");
