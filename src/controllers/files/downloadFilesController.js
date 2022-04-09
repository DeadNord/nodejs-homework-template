const downloadFilesController = async (req, res, next) => {
  res.status(200).json({
    status: "success",
    code: 200,
  });
};

module.exports = downloadFilesController;
