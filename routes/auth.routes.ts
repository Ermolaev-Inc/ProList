import { Router } from "express";
import { check, validationResult } from "express-validator";
import { User } from "../models/User";
import bcrypt from "bcryptjs";
const router = Router();

router.post(
  "/register",
  [
    check("login", "Min - 3 characters").isLength({ min: 3 }),
    check("password", "Min - 6 characters").isLength({ min: 6 })
  ],
  async (req: any, res: any) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
          message: "Min - 6 characters"
        })
      }
      const {login, password} = req.body;
      const candidate = await User.findOne({ login });
      if (candidate) {
        return res.status(400).json({ message: "This username is already registered" });
      }
      console.log("lol")
      const hashedPassword = await bcrypt.hash(password, 12);
      const user = new User({ login, password: hashedPassword });
      await user.save();
      res.status(201).json({ message: "The user is created" });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Try again :(" });
    }
  }
)

module.exports = router;