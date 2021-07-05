const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const { CLOUD_NAME } = require("../configs/env");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      minLength: 4,
      maxLength: 15,
    },
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minLength: 6,
    },
    avatar: {
      type: String,
      default: `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/v1625386800/avatar_default_tmzgck.png`,
    },
    postsCreated: {
      type: Array,
      default: [],
    },
    followers: {
      type: Array,
      default: [],
    },
    following: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true },
);

// hash password before save (update password, create user)
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }

  const salt = await bcrypt.genSalt(10);
  const passwordHashed = await bcrypt.hash(this.password, salt);
  this.password = passwordHashed;
});

// compare password with password input
userSchema.methods.isCorrectPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

const User = mongoose.model("user", userSchema);

module.exports = User;
