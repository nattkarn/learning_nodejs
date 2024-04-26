import joi from "joi";

const CreateProductValidator = joi.object({
  id: joi.number().optional(),
  title: joi.string().required(),
  description: joi.string().optional(),
  price: joi.number().optional().default(0),
});

export default CreateProductValidator;
