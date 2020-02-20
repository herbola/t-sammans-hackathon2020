import { Request, Response } from "express";
import { Template, ITemplate } from "../models/template.model";

export class TemplateService {
  public getAllTemplates(request: Request, response: Response) {
    Template.find({}, (error: Error, templates: ITemplate[]) => {
      error ? response.send(error) : response.json(templates);
    });
  }
  public addTemplate(request: Request, response: Response) {
    const newTemplate = new Template(request.body);

    newTemplate.save((error: Error, template: ITemplate) => {
      if (error) {
        console.log(error);
        response.send(error);
      } else {
        response.json(template);
      }
    });
  }
  public deleteTemplate(request: Request, response: Response) {
    const templateId = request.params.id;
    Template.findByIdAndDelete(templateId, (error: Error) => {
      if (error) {
        response.send(error);
        console.log(error);
      } else {
        const message = "Deleted successfully";
        //const message = template ? "Deleted successfully" : `failed to delete template with id ${templateId}`;
        response.status(200).json(message);
      }
    });
  }

  public updateTemplate(request: Request, response: Response) {
    const templateId = request.params.id;
    Template.findByIdAndUpdate(templateId, request.body, (error: Error) => {
      if (error) {
        response.send(error);
      } else {
        response.json(`didnt find template with id ${templateId}`);
      }
    });
  }
}
