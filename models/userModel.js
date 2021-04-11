import mongoose from "mongoose";
import bcrypt from "bcrypt";

// user schema
const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  voterId: {
    type: Number,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// Pre hook to hash password before saving
userSchema.pre("save", async function () {
  const saltRounds = 10;
  const hashPass = await bcrypt.hash(this.password, saltRounds);
  this.password = hashPass;
});

// creating the user model
const userModel = mongoose.model("user", userSchema);

export default userModel;
