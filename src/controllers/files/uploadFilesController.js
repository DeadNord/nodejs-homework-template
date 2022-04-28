const uploadFilesController = async (req, res, next) => {
  res.status(201).json({
    status: "success",
    code: 201,
  });
};

module.exports = uploadFilesController;
