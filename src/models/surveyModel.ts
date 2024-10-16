import { Prisma, PrismaClient, Survey } from "@prisma/client";
const prisma = new PrismaClient();

class surveyModel {
  static async getAllSurveys(): Promise<Survey[]> {
    return await prisma.survey.findMany();
  }

  static async getSurveyById({ id }: { id: number }): Promise<Survey | null> {
    return await prisma.survey.findUnique({
      where: {
        id: id
      },
    });
  }

  static async createSurvey(data: Prisma.SurveyCreateInput): Promise<Survey> {
    return await prisma.survey.create({
      data: data,
    });
  }

  static async updateSurvey({
    id,
    data,
  }: {
    id: number;
    data: Prisma.SurveyUpdateInput;
  }): Promise<Survey> {
    return await prisma.survey.update({
      where: { id: id },
      data: data,
    });
  }

  static async deleteSurvey({ id }: { id: number }): Promise<Survey> {
    return await prisma.survey.delete({ where: { id } });
  }
}

module.exports = surveyModel;
