import {
    Component,
    OnInit,
    DoCheck,
    ChangeDetectorRef,
    ChangeDetectionStrategy
} from "@angular/core";
import { TemplateService } from "~/app/services/template.service";
import { Template } from "~/app/models/template.model";

@Component({
    selector: "Home",
    template: `
        <ActionBar>
            <Label text="Home"></Label>
        </ActionBar>
        <GridLayout height="210" columns="100,*">
            <Button *ngFor="let tmp of templates" [text]="tmp.name"></Button>
            <!-- Add your page content here -->
        </GridLayout>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit, DoCheck {
    ngDoCheck(): void {
        console.log("hej");
        this.changeDetectionRef.detectChanges();
        console.log(this.templates);
    }
    templates: Template[] = [];
    constructor(
        private templateService: TemplateService,
        private changeDetectionRef: ChangeDetectorRef
    ) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        this.templateService.getAllTemplates(templates => {
            this.templates = templates;
            console.log(this.templates);
        });
        // Init your component properties here.
    }
    onTap(event) {
        this.templateService.addTemplate(
            new Template({ name: "hej" }),
            template => {
                console.log("hej");
            }
        );
    }
}
