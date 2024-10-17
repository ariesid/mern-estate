import express from "express";
import { test } from "../controllers/user.controller.js";

const router = express.Router();

// router.get("/test", (req, res) => {
//   res.json({
//     message: "Hello World from Express.js",
//     name: "John Doe",
//     age: 30,
//   });
// });

router.get("/test", test);

export default router;
