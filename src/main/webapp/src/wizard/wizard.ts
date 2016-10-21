import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'wizard',
	styleUrls: ['wizard.css'],
	templateUrl: 'wizard.html'
})

export class Wizard 
{
	@Input() finishText = 'Finish';
	@Input() step = 1;
	@Output() finish = new EventEmitter();
	@Output() stepChange = new EventEmitter();
	private steps = 0;
	private isOnFinalStep = () => this.step === this.steps;
	private isOnFirstStep = () => this.step === 1;

	public addStep()
	{
		const newSteps = this.steps + 1;
		this.steps = newSteps;
		return newSteps;
	} 
}

