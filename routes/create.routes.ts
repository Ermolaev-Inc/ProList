import { Router } from "express";
import { User } from "../models/User";
const router = Router();

router.post(
  "/project",
  async (req: any, res: any) => {
    try {
      const userData = req.body;
      const userId = userData.authInfo.userId;
      const user = await User.update({ _id: userId }, {$push: {personalChannel: {projectName:"New Project"}}}, {upsert: false});
      if (!user) {
        return res.status(400).json({ message: "This user does not exis" });
      }
      await user.save();  
      res.status(201).json({ message: "Success" });
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