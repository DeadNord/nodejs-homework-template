const { Unauthorized } = require("http-errors");

const { User } = require("../../models/index");
const bcrypt = require("bcrypt");
const { JWT_SECRET_KEY } = process.env;
const jwt = require("jsonwebtoken");

const signInController = async (req, res, next) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user) {
    res.status(401).json(Unauthorized(`Email ${email} not found`));
  }

  const passCompare = bcrypt.compareSync(password, user.password);

  if (!passCompare) {
    res.status(401).json(Unauthorized(`Password wrong`));
  }

  const payload = {
    id: user._id,
  };
  const token = jwt.sign(payload, JWT_SECRET_KEY, { expiresIn: "1h" });
  await User.findByIdAndUpdate(user._id, { token });
  res.status(200).json({
    status: "success",
    code: 200,
    data: {
      token,
    },
  });
};

module.exports = signInController;
