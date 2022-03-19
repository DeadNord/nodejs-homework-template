const { User } = require("../../models/index");

const patchAvatarController = async (req, res, next) => {
  const { _id, avatarURL } = req.user;

  // Создай папку tmp в корне проекта и сохраняй в неё загруженную аватарку.
  // Обработай аватарку пакетом jimp и задай для нее размеры 250 на 250
  // Перенеси аватарку пользователя из папки tmp в папку public/avatars и дай ей уникальное имя для конкретного пользователя.
  // Полученный URL /avatars/<имя файла с расширением> сохрани в поле avatarURL пользователя

  const updateUserAvatar = await User.findByIdAndUpdate(
    { owner: _id },
    { avatarURL: "" },
    {
      new: true,
    },
  );
  if (updateUserAvatar) {
    res.json({
      status: "success",
      code: 200,
      data: {
        result: avatarURL,
      },
    });
  }
  if (!updateUserAvatar) {
    res.status(404).json({
      status: "error",
      code: 404,
      message: `Avatar ${avatarURL} not found`,
    });
  }
};

module.exports = patchAvatarController;
