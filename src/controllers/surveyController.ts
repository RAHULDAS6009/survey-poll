import { Request, Response } from "express";

class surveyController {
    // - `GET /surveys`: Fetch all surveys.
    async getAllSurveys(req: Request, res: Response) {
        res.send("Hello world")
    }

    // - `POST /surveys`: Create a new survey.
    async createSurvey(req: Request, res: Response) {
        res.send("Hello world")

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