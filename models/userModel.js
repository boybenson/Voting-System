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

  isAdmin: {
    type: Boolean,
    default: false,
  },
});

// schema static method for login
userSchema.statics.login = async function (voterId, password) {
  const user = await this.findOne({ voterId });
  if (user) {
    const isMatch = await bcrypt.compare(password, user.password);
    if (isMatch) {
      return user;
    } else {
      const err = new Error();
      err.status = 403;
      return err;
    }
  }
};

// Pre hook to hash password before saving
userSchema.pre("save", async function () {
  const saltRounds = 10;
  const hashPass = await bcrypt.hash(this.password, saltRounds);
  this.password = hashPass;
});

// creating the user model
const userModel = mongoose.model("user", userSchema);

export default userModel;
