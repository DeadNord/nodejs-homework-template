const { Conflict } = require('http-errors');
const { User } = require('../../models/index');
const bcrypt = require('bcrypt');
const gravatar = require('gravatar');

const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const VerificationEmail = process.env.SENDGRID_EMAIL;

const signUpController = async (req, res, next) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  const msg = {
    to: email,
    from: VerificationEmail,
    subject: 'Thank you for registation.',
    text: `Registration user: ${email}. Verify you email`,
    html: `<h1>Registration user: ${email}. Verify you email</h1>`,
  };

  if (user) {
    res.status(409).json(Conflict(`User with ${email} already exist`));
  }

  const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));

  const avatarURL = gravatar.url(email);

  await User.create({
    email,
    password: hashPassword,
    avatarURL,
  });

  await sgMail.send(msg);

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
