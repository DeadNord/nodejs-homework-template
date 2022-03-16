// const { User } = require("../../models/index");

const getCurrentController = async (req, res, next) => {
  const { name, email } = req.user;
  res.json({
    status: "success",
    code: 200,
    data: {
      user: {
        name,
        email,
      },
    },
  });
};

module.exports = getCurrentController;
