import { Router } from "express";

const router = Router();

router.post(
  "/register",
  async (req, res) => {
    try {
      console.log(req.body);
    } catch (error) {
      console.log("Error", error);
    }
  }
)