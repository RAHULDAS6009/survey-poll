import { Request, Response, text } from "express";
const surveyModel = require("../models/surveyModel")

// const surveyModel = new SurveyModel();
class surveyController {
    // - `GET /surveys`: Fetch all surveys.
    async getAllSurveys(req: Request, res: Response) {
        try {
            const surveys = await surveyModel.getAllSurveys();
            res.status(200).json({ surveys })
        } catch (error) {
            if (typeof error === "string") {
                res.send({
                    message: error.toUpperCase()
                })
            } else if (error instanceof Error) {
                res.send({ message: error.message })
            }
        }
    }

    // - `POST /surveys`: Create a new survey.
    async createSurvey(req: Request, res: Response) {
        const body = req.body;
        try {

            const survey = await surveyModel.createSurvey({
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
            res.status(201).send({
                message: "survey Created Successfully",
                survey
            })
        } catch (e) {
            if (typeof e === "string") {
                res.json({ msg: e.toUpperCase() })
            } else if (e instanceof Error) {
                res.json({ msg: e.message })
            }
        }

    }
    // - `GET /surveys/:id`: Fetch a specific survey.
    async fetchSurvey(req: Request, res: Response) {
        try {
            const survey = await surveyModel.getSurveyById({ id: parseInt(req.params.id) })
            res.json(survey)
        } catch (error) {
            if (typeof error === "string") {
                res.send({ msg: error.toUpperCase() })
            } else if (error instanceof Error) {
                res.send({ message: error.message })
            }
        }
    }
    // - `PUT /surveys/:id`: Update a specific survey.
    async updateSurvey(req: Request, res: Response) {
        
        console.log(req.body);
        try {


            const survey = await surveyModel.updateSurvey({
                id: parseInt(req.params.id),
                data: {
                    title: req.body.title,
                    questions: [
                        {
                            text: req.body.questions[0].text,
                            option: [{
                                text: req.body.questions[0].option[0].text,
                                // votes: req.body.questions[0].option[0].votes
                            }, {
                                text: req.body.questions[0].option[1].text,
                                // votes: req.body.questions[0].option[1].votes
                            }, {
                                text: req.body.questions[0].option[2].text,
                                // votes: req.body.questions[0].option[2].votes
                            }, {
                                text: req.body.questions[0].option[3].text,
                                // votes: req.body.questions[0].option[3].votes
                            }]
                        }
                    ]
                }
            })
            res.status(200).json(survey)
        } catch (error) {
            if (typeof error === "string") {
                res.status(400).json({ msg: error.toUpperCase() })
            } else if (error instanceof Error) {
                res.status(400).json({ msg: error.message })
            }
        }
    }
    // - `DELETE /surveys/:id`: Delete a specific survey.
    async deleteSurvey(req: Request, res: Response) {
        try {
            console.log(parseInt(req.params.id), typeof parseInt(req.params.id));

            const survey = await surveyModel.deleteSurvey({ id: parseInt(req.params.id) })
            console.log("hello 1");

            res.status(200).json({ survey, msg: "survey deleted" })
        } catch (error) {
            if (typeof error === "string") {
                console.log("hello 2");
                res.status(400).json({ msg: error.toUpperCase() })
            } else if (error instanceof Error) {
                console.log("hello 3");
                res.status(400).json({ msg: error.message })
            }
        }
    }
}

module.exports = new surveyController();