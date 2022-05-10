const { Conflict } = require('http-errors');
const { User } = require('../../models/index');
const bcrypt = require('bcrypt');
const gravatar = require('gravatar');

const HOST = process.env.HOST;
const { v4 } = require('uuid');

const VerificationEmail = process.env.EMAIL;
const { nodemailerSendMsg } = require('../../services/nodemailer/index');

const signUpController = async (req, res, next) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

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
    subject: 'Nodemailer Test',
    text: `Перейди по ссылке ${HOST}/api/auth/verify/${verificationToken} для верификации`,
    html: `Перейди по <a href="${HOST}/api/auth/verify/${verificationToken}">ссылке</a> для верификации`,
  };

  nodemailerSendMsg(msg);

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
