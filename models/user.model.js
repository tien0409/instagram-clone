const mongoose = require ("mongoose");
const bcrypt = require ("bcryptjs");

const userSchema = new mongoose.Schema (
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
      minLength: 6,
    },
    authFbId: {
      type: String
    },
    authType: {
      type: String,
      enum: ["local", "facebook"]
    },
    avatar: {
      type: String,
      default: "/images/avatar_default.png",
    },
    followers: {
      type: Array,
      default: [],
    },
    following: {
      type: Array,
      default: [],
    },
    phoneNumber: {
      type: String,
      default: "",
    },
    gender: {
      type: String,
      default: "Male",
    },
  },
  {timestamps: true},
);

// hash password before save (update password, create user)
userSchema.pre ("save", async function (next) {
  if (!this.isModified ("password")) {
    return next ();
  }

  const salt = await bcrypt.genSalt (10);
  const passwordHashed = await bcrypt.hash (this.password, salt);
  this.password = passwordHashed;
});

// compare password with password input
userSchema.methods.isCorrectPassword = async function (password) {
  return await bcrypt.compare (password, this.password);
};

const User = mongoose.model ("user", userSchema);

module.exports = User;
