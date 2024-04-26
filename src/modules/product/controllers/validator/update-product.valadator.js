import joi from "joi";

const UpdateProductValidator = joi.object({
  title: joi.string().optional(),
  description: joi.string().optional(),
  price: joi.number().optional()
});

export default UpdateProductValidator;
