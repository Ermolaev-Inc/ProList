import { Schema, model } from "mongoose";

const ChannelSchema = new Schema({
  channelName: {  type: String },
  projects: [
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
  ]
})

export const Channel = model("Channel", ChannelSchema, "channels");