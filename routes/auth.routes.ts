import { Router } from "express";

const router = Router();

router.post(
  "/register",
  async (req, res) => {
    res.status(201).json({ message: "Ye boy" });
    console.log(req.body);
  }
)
//router.get("/register", async (req, res) => {res.json({ message: "lol" })})

module.exports = router;