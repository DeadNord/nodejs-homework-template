const { Schema, model } = require("mongoose");
const Joi = require("joi");

const userSchema = Schema(
  {
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    subscription: {
      type: String,
      enum: ["starter", "pro", "business"],
      default: "starter",
    },
    token: {
      type: String,
      default: null,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  },
);

const joiSchema = Joi.object({
  password: Joi.string().required(),
  email: Joi.string().required(),
  // subscription:
  // token:
});

// const favoriteSchema = Joi.object({
//   favorite: Joi.bool().required(),
// });

const User = model("user", userSchema);

module.exports = { User, joiSchema };
