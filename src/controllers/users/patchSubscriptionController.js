const { User } = require("../../models/index");

const patchSubscriptionController = async (req, res, next) => {
  const { _id } = req.user;
  const { subscription } = req.body;

  const updateUser = await User.findByIdAndUpdate(
    { owner: _id },
    { subscription },
    {
      new: true,
    },
  );
  if (updateUser) {
    res.json({
      status: "success",
      code: 200,
      data: {
        result: updateUser,
      },
    });
  }
  if (!updateUser) {
    res.status(404).json({
      status: "error",
      code: 404,
      message: `Subscription plan:${subscription} not found`,
    });
  }
};

module.exports = patchSubscriptionController;
