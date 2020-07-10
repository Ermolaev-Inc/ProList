import jwt from "jsonwebtoken";
import config from "config";

module.exports = (req: any, res: any, next: any) => {
  if (req.method === "OPTIONS") {
    return next();
  }
  try {
    const token = req.headers.authorization.split(" ")[1];
    if (!token) {
      return res.status(401).json({ message: "Not auth" });
    }
    const decoded = jwt.verify(token, config.get("jwtSecret"));
    req.user = decoded;
    next()
  } catch (error) {
    console.log("Error", error);
  }
}