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
  personalChannel: [
    {
      projectName: { type: String },
      projectContent: [{
        name: { type: String },
        description: { type: String },
        status: { type: String },
        timeInProgress: { type: Number }
      }]
    }
  ]
})

export const User = model("User", UserSchema);