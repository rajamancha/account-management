import Joi from "joi";

export const createAccount = Joi.object().keys({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  address: Joi.string().required(),
  phone: Joi.string()
    .pattern(/^[+91]{3}[0-9]{10}$/)
    .length(13)
    .required()
    .messages({
      "string.pattern.base": "Phone number should be a valid Indian number with country code (+91) and a length of 10 digits.",
      "string.length": "Phone number should be a valid Indian number with country code (+91) and a length of 10 digits.",
      "any.required": "Phone number is required.",
    }),
});
