import { Router } from "express";
import { User } from "../models/User";
import { Channel } from "../models/Channel";
import bcrypt from "bcryptjs";
const router = Router();

router.post(
  "/channel",
  async (req: any, res: any) => {
    try {
      const { channelName, password, userId } = req.body;

      const user = await User.findOne({ _id: userId });
      if (!user) {
        return res.status(401).json({ message: "You are not auth" });
      }

      const hashedPassword = await bcrypt.hash(password, 12); 
      const newChannel = new Channel({channelName, password: hashedPassword});
      await newChannel.save();

      await User.updateOne({ _id: userId }, { $push: { channels: channelName } }, { upsert: false });

      res.status(201).json({ message: "Success" })
    } catch (error) {
      res.status(500).json({ message: "Something is wrong :(" });
    }
  }
)

router.post(
  "/project",
  async (req: any, res: any) => {
    try {
      const { channelName, projectName } = req.body;

      const channel = await Channel.findOne({ channelName });
      if (channel) {
        await Channel.updateOne({ channelName }, { $push: { projects: { projectName } } }, { upsert: false });
        res.status(201).json({ message: "Success" });
      } else {
        res.status(500).json({ message: "Channel does not exist" });
      }

    } catch (error) {
      res.status(500).json({ message: "Something is wrong :(" });
    }
  }
)

/* router.post(
  "/todo",
  async (req: any, res: any) => {
    try {
      const userData: ILocalStorageData = req.body;
      const userId = userData.userData.userId;
      const user: IUser = await User.findOne({ _id: userId });
      if (!user) {
        return res.status(400).json({ message: "This user does not exist" });
      }
      user.personalChannel.default.push({ name: "SecondTodo", description: "", status: "COMPLETED", timeInProgress: 1551515 });
      await user.save();
      res.status(201).json({ message: "Success" })
    } catch (error) {
      res.status(500).json({ message: "Something is wrong :( "});
    }
  }
) */

module.exports = router;