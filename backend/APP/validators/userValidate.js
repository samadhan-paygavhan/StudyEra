import yup from "yup";

export const userSchema = yup.object({
  fullName: yup
    .string()
    .trim()
    .min(6, "Fullname must be atleast of 6 characters")
    .required(),
  email: yup.string().email("The email is not valid").required(),
  password: yup
    .string()
    .min(8, "Password must be atleast 8 character")
    .required(),
});

export const validateUser = (schema) => async (req, res, next) => {
  try {
    await schema.validate(req.body);
    next();
  } catch (err) {
    return res.status(400).json({
      errors: err.errors,
    });
  }
};
