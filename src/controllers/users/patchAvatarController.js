const { User } = require('../../models/index');

const patchAvatarController = async (req, res, next) => {
  const { _id, avatarURL } = req.user;

  const updateUserAvatar = await User.findByIdAndUpdate(
    { owner: _id },
    { avatarURL: '' },
    {
      new: true,
    },
  );
  if (updateUserAvatar) {
    res.json({
      status: 'success',
      code: 200,
      data: {
        result: avatarURL,
      },
    });
  }
  if (!updateUserAvatar) {
    res.status(404).json({
      status: 'error',
      code: 404,
      message: `Avatar ${avatarURL} not found`,
    });
  }
};

module.exports = patchAvatarController;
