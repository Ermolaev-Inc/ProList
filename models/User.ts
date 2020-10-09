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
      projectContent: [
        {
          todoName: { type: String },
          description: { type: String },
          status: { type: String },
          timeInProgress: { type: Number }
        }
      ]
    }
  ],
  channels: [
    { type: String }
  ]
})

export const User = model("User", UserSchema);