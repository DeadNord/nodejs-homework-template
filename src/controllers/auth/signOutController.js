// const { Conflict } = require("http-errors");
const { User } = require("../../models/index");

const { User } = require("../../models");

const signOutController = async (req, res, next) => {
  const { _id } = req.user;
  await User.findByIdAndUpdate(_id, { token: null });

  res.status(204).json();
};

module.exports = signOutController;
