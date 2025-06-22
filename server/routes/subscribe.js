import express from "express";
const router = express.Router();

import user from "../models/user.js";

router.post("/subscribe", async (req, res) => {
  const { Name, Number, Pincode } = req.body;
  console.log({ Name, Number, Pincode });

  try {
    await user.create({ Name, Number, Pincode });
    res.status(201).json({ Name });
  } catch (error) {
    console.error("Error saving subscriber:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
