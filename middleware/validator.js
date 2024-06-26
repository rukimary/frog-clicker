const Joi = require("joi");

const validate = {
  register: (req, res, next) => {
    const schema = Joi.object({
      name: Joi.string().required().min(2),
      email: Joi.string().email().required(),
      password: Joi.string().required().min(4),
      // confirmPassword: Joi.string().required(),
    });

    const validationResult = schema.validate(req.body);

    if (validationResult.error) {
      return res.status(422).json({
        error: validationResult.error.details[0].message,
      });
    } else {
      next();
    }
  },
};

module.exports = validate;
