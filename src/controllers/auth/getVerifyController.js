const { User } = require('../../models/index');

const nodemailer = require('nodemailer');
require('dotenv').config();
const VerificationEmail = process.env.EMAIL;
const EmailPassword = process.env.PASSWORD;

const config = {
  host: 'smtp.meta.ua',
  port: 465,
  secure: true,
  auth: {
    user: VerificationEmail,
    pass: EmailPassword,
  },
};

const getVerifyController = async (req, res, next) => {
  const verificationToken = req.query.verificationToken;
  const transporter = nodemailer.createTransport(config);

  const user = await User.find(verificationToken);
  if (user) {
    user.update({ verificationToken: null, verify: true });

    const msg = {
      from: VerificationEmail,
      to: user.email,
      subject: 'Nodemailer Test Success',
      text: 'Ваша почта успешно подтверждена. Регистрация завершена!',
    };
    await transporter
      .sendMail(msg)
      .then(info => console.log(info))
      .catch(err => console.log(err));

    res.json({
      status: 'success',
      code: 200,
      message: 'Verification successful',
    });
  }

  if (!user) {
    res.status(404).json({
      status: 'error',
      code: 404,
      message: `User not found`,
    });
  }
};

module.exports = getVerifyController;
