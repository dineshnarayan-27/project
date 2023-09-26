const express = require("express");
const {
  summaryController,
  summaryController1,
  summaryController2,
  paragraphController,
  chatbotController,
  jsconverterController,
  scifiImageController,
} = require("../controllers/openiaController");

const router = express.Router();

//route
router.post("/summary1", summaryController);
router.post("/summary2", summaryController1);
router.post("/summary3", summaryController2);
router.post("/paragraph", paragraphController);
router.post("/chatbot", chatbotController);
router.post("/js-converter", jsconverterController);
router.post("/scifi-image", scifiImageController);

module.exports = router;