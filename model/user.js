const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now()
  },
  country: {
      type: String,
      required: true
  },
  experience: {
      type: String,
      required: true
  }
});

// export model user with UserSchema
module.exports = {
    model: mongoose.model("user", UserSchema),
    schema: UserSchema
};