import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Wizard } from '../wizard/wizard';
import { WizardStep } from '../wizard/wizard-step';

import '../../public/css/styles.css';

@Component({
  	selector: 'my-app',
  	templateUrl: 'app.component.html',
  	styleUrls: ['app.component.css']
})

export class AppComponent implements OnInit 
{ 
	registerForm: FormGroup;
	private step = 1;

	constructor(private formBuilder: FormBuilder) {}

	ngOnInit() 
	{
		this.registerForm = this.formBuilder.group(
		{
			name:  [],
			race:  ['', Validators.required],
			age:   [],
			class: ['', Validators.required],
			alignment: [],
			stats: this.formBuilder.group(
			{
				strength:     ['', Validators.required],
				dexterity:    ['', Validators.required],
				constitution: ['', Validators.required],
				intelligence: ['', Validators.required],
				wisdom:       ['', Validators.required],
				charisma:     ['', Validators.required],
			})
		});
	}

	save(model: FormGroup)
	{
		
	}

	onFinish() 
	{
	}
}
