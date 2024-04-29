import joi from "joi";

export const UpdateProductValidator = joi.object({
  title: joi.string().required(),
  description: joi.string().optional(),
  price: joi.number().required()
});
