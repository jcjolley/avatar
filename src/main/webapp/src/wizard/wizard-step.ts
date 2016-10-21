import { Component, Input } from '@angular/core';
import { Wizard } from './wizard';

@Component({
	selector: 'wizard-step',
	host: { '[style.display]': 'isCurrent ? "flex" : "none"' },
	template: `<ng-content></ng-content>`,
	styleUrls: []
})

export class WizardStep
{
	private isCurrent: Boolean;
	private step: Number;

	constructor( private parent:Wizard ){}

	ngOnInit() 
	{
		this.step = this.parent.addStep();

		this.isCurrent = this.step === this.parent.step;

		this.parent.stepChange.subscribe( (step:number) => {
			this.isCurrent = this.step === step;
		});
	}
}
