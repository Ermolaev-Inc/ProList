import { Router } from "express";
const auth = require("../middleware/auth.middleware");
import { User } from "../models/User";
const router = Router();

router.get(
  "/data",
  auth,
  async (req: any, res: any) => {
    try {
      let user = await User.findOne({ _id: req.user.userId });
      res.json(user);
    } catch (error) {
      res.status(500).json({ message: "Something is wrong" });
    }
  }
)

router.get(
  "/todos/:projectName",
  auth,
  async (req: any, res: any) => {
    try {
      let user = await User.findOne({ _id: req.user.userId });
      const projectName = req.params.projectName;
      if (user) {
        user.personalChannel.map((project: any) => {
          if (project.projectName === projectName) {
            res.json(project.projectContent);
          }
        })
      } else {
        console.log("You are not auth");
      }
    } catch (error) {
      console.log("Error", error);
    }
  }
)

router.get(
  "/todos/",
  async (req: any, res: any) => {
    res.status(200);
  }
)

module.exports = router;