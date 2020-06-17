import { Router, json } from "express";
import { User } from "../models/User";
import { ILocalStorageData, IUser } from "../interfaces";
const router = Router();

router.post(
  "/create",
  async (req: any, res: any) => {
    try {
      const userData: ILocalStorageData = req.body;
      console.log("lol");
      
    } catch (error) {
      res.status(500).json({ message: "Something is wrong :( "});
    }
  }
)

module.exports = router;