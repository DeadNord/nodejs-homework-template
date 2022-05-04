const { Conflict } = require('http-errors');
const { User } = require('../../models/index');
const bcrypt = require('bcrypt');
const gravatar = require('gravatar');

const HOST = process.env.HOST;
const { v4 } = require('uuid');

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

const signUpController = async (req, res, next) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  const transporter = nodemailer.createTransport(config);
  // const msg = {
  //   subject: 'Thank you for registation.',
  //   text: `Registration user: ${email}. Verify you email`,
  //   html: `<h1>Registration user: ${email}. Verify you email</h1>`,
  // };

  if (user) {
    res.status(409).json(Conflict(`User with ${email} already exist`));
  }

  const verificationToken = v4();
  const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));

  const avatarURL = gravatar.url(email);

  await User.create({
    email,
    password: hashPassword,
    avatarURL,
    verificationToken,
  });

  const msg = {
    from: VerificationEmail,
    to: email,
    subject: 'Nodemailer Test Verify',
    text: 'Test',
    // text: `Перейди по ссылке ${HOST}/api/auth/verify/${verificationToken}`,
  };

  await transporter
    .sendMail(msg)
    .then(info => console.log(info))
    .catch(err => console.log(err));

  res.status(201).json({
    status: 'success',
    code: 201,
    data: {
      user: {
        email,
      },
    },
  });
};

module.exports = signUpController;
