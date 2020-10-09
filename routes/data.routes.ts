import { Channel } from "../models/Channel";
import { User } from "../models/User";
import { IChannel, IProject, ITodo, IUser, IPersonalChannel } from "../interfaces";
const Router = require("express");
const auth = require("../middleware/auth.middleware");

const router = Router();

router.get(
  "/initial",
  auth,
  async (req: any, res: any) => {
    try {
      const userId: string = req.user.userId;

      const user: IUser = await User.findOne({ _id: userId });
      if (user) {
        res.json(user.channels).status(200);
      }

      res.status(502);
    } catch (error) {
      console.log("Error", error);
    }
  }
)

router.get(
  "/:channelName",
  auth,
  async (req: any, res: any) => {
    try {      
      const channelName: string = req.params.channelName;
      const userId: string = req.user.userId;
      
      if (channelName === "Personal") {
        const user: IUser = await User.findOne({ _id: userId  });
        const channel = user.personalChannel;

        res.json(channel).status(200);
      } 
      const channel: IChannel = await Channel.findOne({ channelName });

      res.json(channel.projects).status(200);
    } catch (error) {
      console.log("Error", error);
    }
  }
)

router.get(
  "/:channelName/:projectName",
  auth,
  async (req: any, res: any) => {
    try {
      const userId: string = req.user.userId;
      const channelName: string = req.params.channelName;
      const projectName: string = req.params.projectName;

      if (channelName === "Personal") {
        const user: IUser = await User.findOne({ _id: userId  });
        const project = user.personalChannel.filter((element: IProject) => element.projectName === projectName)[0];

        const todos = project.projectContent;
        
        res.json(todos).status(200);
      }

      const channel: IChannel = await Channel.findOne({ channelName });
      if (!channel) return res.json({ message: "This channel does not exist" }).status(502);
      
      const project: IProject = channel.projects.filter((element: IProject) => element.projectName === projectName)[0];
      const todos: ITodo[] = project.projectContent;
      
      res.json(todos).status(200);
    } catch (error) {
      console.log("Error", error);
    }
  }
)

module.exports = router;



