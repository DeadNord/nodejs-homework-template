// const Joi = require("joi");

// module.exports = {
//   addContactValidation: (req, res, next) => {
//     const schema = Joi.object({
//       name: Joi.string().min(3).max(30).required(),
//       email: Joi.string()
//         .email({
//           minDomainSegments: 2,
//           tlds: { allow: ["com", "net"] },
//         })
//         .required(),
//       phone: Joi.string().min(3).max(30).required(),
//       favorite: Joi.boolean(),
//     });

//     const validationResult = schema.validate(req.body);
//     if (validationResult.error) {
//       res.status(400).json({
//         status: validationResult.error.details,
//         code: 400,
//       });
//     }

//     next();
//   },

//   putContactValidation: (req, res, next) => {
//     const schema = Joi.object({
//       name: Joi.string().min(3).max(30).required(),
//       email: Joi.string()
//         .email({
//           minDomainSegments: 2,
//           tlds: { allow: ["com", "net"] },
//         })
//         .required(),
//       phone: Joi.string().min(3).max(30).required(),
//       favorite: Joi.boolean(),
//     });

//     const validationResult = schema.validate(req.body);
//     if (validationResult.error) {
//       res.status(400).json({
//         status: validationResult.error.details,
//         code: 400,
//       });
//     }

//     next();
//   },
// };

const validation = schema => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      res.status(400).json({
        status: error.details,
        code: 400,
      });
    }
    next();
  };
};

module.exports = { validation };
