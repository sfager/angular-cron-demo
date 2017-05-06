import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
    moduleId: module.id,
    selector: 'app-cron',
    template: `
    <div class="row">
        <div class="col-md-6">
        <form #parseForm="ngForm" (ngSubmit)="parseCron(parseForm)">
            <div class="form-group">
                <label for="expression" class="form-label">Enter CRON Expression</label>
                <input type="text" id="expression" name="expression" class="form-control" ngModel>
            </div>
             <button type="submit" class="btn btn-primary">Parse</button>
        </form>
        <br />
        <p>
            <strong>Pretty Cron: </strong><span>{{prettyCronMessage}}</span>
        </p>
        <p>
            <strong>Next Run Time: </strong><span>{{nextRunTime}}</span>
        </p>
        </div>
    </div>
    `,
    styles: [
        `form {
            margin-bottom: 25px;    
        }`
    ]
})

export class CronComponent implements OnInit {

    prettyCronMessage: string;
    nextRunTime: string;

    constructor() { }

    ngOnInit() {
    }

    parseCron(parseForm: NgForm) {
        const expression = parseForm.value.expression;

        this.prettyCronMessage = prettyCron.toString(expression);
        this.nextRunTime = prettyCron.getNext(expression);

        console.log(prettyCron.getNext(expression));
    }
}