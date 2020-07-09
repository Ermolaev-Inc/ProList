import { Schema, model } from "mongoose";

const UserSchema = new Schema({
  login: {
    type: String,
    required: true,
    unique: true,
    minlength: 3,
    maxlength: 20
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  },
  personalChannel: {
    default: [
      {
        name: { type: String },
        completed: { type: Boolean }
      }
    ]
  }
})

export const User = model("User", UserSchema);