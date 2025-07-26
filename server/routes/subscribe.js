import express from "express";
const router = express.Router();
import sendWhatsappMessage from "../utils/sendWhatsappMessage.js";

import user from "../models/user.js";

router.post("/subscribe", async (req, res) => {
  const { Name, Number, Pincode } = req.body;

  const existingUser = await user.findOne({ Number: Number });

  if (existingUser) {
    return res.status(403).json({ error: "User already exist" });
  } else {
    try {
      await user.create({ Name, Number, Pincode });
      await sendWhatsappMessage({ customerName: Name, phoneNumber: Number });
      res.status(201).json({ Name });
    } catch (error) {
      console.error("Error saving subscriber:", error.message);
      res.status(500).json({ error: "Internal server error" });
    }
  }
});

export default router;
