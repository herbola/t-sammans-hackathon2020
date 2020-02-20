import { Injectable } from "@angular/core";

import { config } from "../config/config";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Template } from "../models/template.model";

@Injectable()
export class TemplateService {
    private readonly baseUrl =
        config.BASE_URL + config.DATA_BASE_ENTRIES.TEMPLATE;
    constructor(private httpClient: HttpClient) {}
    public addTemplate(
        template: Template,
        callback: (template: Template) => any
    ) {
        this.httpClient
            .post<Template>(this.baseUrl, template)
            .subscribe(callback, error => console.error(error));
    }

    public getTemplate(id: string, callback: (template: Template) => any) {
        this.httpClient
            .get<Template>(`${this.baseUrl}/${id}`)
            .subscribe(callback, error => console.error(error));
    } 

    public updateTemplate( 
        template: Template,
        callback: (template: Template) => any
    ) {
        this.httpClient
            .put(`${this.baseUrl}/${template._id}`, template)
            .subscribe(callback, error => console.error(error));
    }

    public deleteTemplate(template: Template, callback: () => any) {
        this.httpClient
            .delete(`${this.baseUrl}/${template._id}`)
            .subscribe(callback, error => console.error(error));
    }

    public getAllTemplates(callback: (template: Template[]) => any) {
        this.httpClient
            .get<Template[]>(this.baseUrl, {
                headers: this.createRequestHeader()
            })
            .subscribe(callback, error => console.error(error));
    }
    private createRequestHeader(): HttpHeaders {
        // set headers here e.g.
        let headers = new HttpHeaders({
            "Content-Type": "application/json"
        });

        return headers;
    }
}
