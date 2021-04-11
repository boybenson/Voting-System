import jwt from "jsonwebtoken";

// generate token
export const generateToken = (id) => {
  const token = jwt.sign({ id }, process.env.JWT_TOKEN, { expiresIn: "7h" });
  return token;
};
