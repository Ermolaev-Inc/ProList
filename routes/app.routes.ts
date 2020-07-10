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

module.exports = router;