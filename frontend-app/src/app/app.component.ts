import { Component } from "@angular/core";
import { TemplateService } from "./services/template.service";
@Component({
    selector: "ns-app",
    moduleId: module.id,
    templateUrl: "app.component.html",
    providers: [TemplateService]
})
export class AppComponent {
    constructor() {
        
    }
}
