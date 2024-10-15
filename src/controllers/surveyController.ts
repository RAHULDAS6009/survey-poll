import { Request, Response } from "express";
const surveyModel = require("../models/surveyModel")

// const surveyModel = new SurveyModel();
class surveyController {
    // - `GET /surveys`: Fetch all surveys.
    async getAllSurveys(req: Request, res: Response) {
        surveyModel.getAllSurveys()
        res.send("Hello world")
    }

    // - `POST /surveys`: Create a new survey.
    async createSurvey(req: Request, res: Response) {
        const body = req.body;
        const result = await surveyModel.createSurvey({
            title: body.title,

            questions: {
                create: [{
                    text: body.question.text,
                    option: {
                        create: [{
                            text: body.question.option1.text
                        }, {
                            text: body.question.option2.text
                        }, {
                            text: body.question.option2.text
                        }, {
                            text: body.question.option3.text
                        }]
                    }
                }]
            }
        })

        res.send({
            msg: "survey Created Successfully",
            result
        })
    }
    // - `GET /surveys/:id`: Fetch a specific survey.
    async fetchSurvey(req: Request, res: Response) {
    }
    // - `PUT /surveys/:id`: Update a specific survey.
    async updateSurvey(req: Request, res: Response) {
    }
    // - `DELETE /surveys/:id`: Delete a specific survey.
    async deleteSurvey(req: Request, res: Response) {
    }
}

module.exports = new surveyController();