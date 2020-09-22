const Router = require("express");
const auth = require("../middleware/auth.middleware");
import { IUser } from "../interfaces";
import { User } from "../models/User";

const router = Router();

router.get(
  "/initial",
  auth,
  async (req: any, res: any) => {
    try {
      const user = await User.findOne({ _id: req.user.userId });
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
      const channelName = req.params.channelName;
      const user = await User.findOne({ _id: req.user.userId });

      if (channelName === "Personal") {
        // TODO
      } else {
        // TODO
      }
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
      // TODO
    } catch (error) {
      console.log("Error", error);
    }
  }
)

module.exports = router;