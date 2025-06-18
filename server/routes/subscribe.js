import express from "express";

const router = express.Router();

router.post("/subscribe", (req, res) => {
  const { name, mobileNum, pincode } = req.body;
  console.log({ name, mobileNum, pincode });

  res.status(200).json({ message: "subscribed successfully", name });
});

export default router;
