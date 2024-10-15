const surveyController = require("../controllers/surveyController")

const express = require("express");
const router = express.Router();

// - `GET /surveys`: Fetch all surveys.
router.get('/', surveyController.getAllSurveys)
// - `POST /surveys`: Create a new survey.
router.post("/", surveyController.createSurvey)
// - `GET /surveys/:id`: Fetch a specific survey.
router.get("/:id", surveyController.fetchSurvey)
// - `PUT /surveys/:id`: Update a specific survey.
router.put("/:id", surveyController.updateSurvey)
// - `DELETE /surveys/:id`: Delete a specific survey.
router.delete("/:id", surveyController.deleteSurvey)

module.exports = router;