const express = require("express");
const { protect } = require("../middleware/authMiddleware");
// const { getMessageById } = require("../controllers/messageControllers");
const {
  sendMessage,
  allMessages,
} = require("../controllers/messageControllers");
const router = express.Router();
router.route("/").post(protect, sendMessage);
// router.route("/.chatId").get(protect, allMessages);
router.route("/:chatId").get(protect, allMessages);

module.exports = router;
