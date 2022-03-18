const { Conflict } = require("http-errors");
const { User } = require("../../models/index");
const bcrypt = require("bcrypt");

const signUpController = async (req, res, next) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  // if (user) {
  //   throw new Conflict(`User with ${email} already exist`);
  // }
  // if (user) {
  //   res.status(409).json({
  //     status: "409 Conflict",
  //     code: 409,
  //     data: {
  //       message: `User with ${email} already exist`,
  //     },
  //   });
  // }

  if (user) {
    res.status(409).json(Conflict(`User with ${email} already exist`));
  }

  const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));

  // Create avatar

  // add avatarURL

  await User.create({ email, password: hashPassword });

  res.status(201).json({
    status: "success",
    code: 201,
    data: {
      user: {
        email,
      },
    },
  });
};

module.exports = signUpController;
