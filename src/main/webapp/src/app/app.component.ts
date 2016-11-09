import { Component, OnInit} from '@angular/core';
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
	races: String[];
	classes: String[];
	alignments: String[];

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
				strength:     [0, Validators.required],
				dexterity:    [0, Validators.required],
				constitution: [0, Validators.required],
				intelligence: [0, Validators.required],
				wisdom:       [0, Validators.required],
				charisma:     [0, Validators.required],
			})
		});

		this.races = [
		"Dragonborn",
		"Drow",
		"Dwarf",
		"Elf",
		"Gnome",
		"Half-Elf",
		"Half-Orc",
		"Human",
		"Tiefling",
		];

		this.classes = [
		"Barbarian",
		"Bard",
		"Cleric",
		"Druid",
		"Fighter",
		"Monk",
		"Paladin",
		"Ranger",
		"Rogue",
		"Sorceror",
		"Warlock",
		"Wizard"
		];

		this.alignments = [
		"Lawful Good",
		"Neutral Good",
		"Chaotic Good",
		"Lawful Neutral",
		"Neutral",
		"Chaotc Neutral",
		"Lawful Evil",
		"Neutral Evil",
		"Chaotic Evil"
		];
	}

	randomStat()
	{
		let rolls: number[] = [0, 0, 0, 0];
		for(var i = 0; i < 4; i++)
		{
			rolls[i] = Math.floor(Math.random() * 6) + 1;
		}

		for (var i = 0; i < 4; i++)
		{
			let temp: number;
			if (rolls[i] > rolls[i + 1])
			{
				// SWAP the values
				rolls[i + 1] = [rolls[i], rolls[i] = rolls[i + 1]][0];
			}
		}

		return (rolls[0] + rolls[1] + rolls[2]);
	}

	rollStats()
	{
		this.registerForm.value.stats.strength = this.randomStat();
		this.registerForm.value.stats.dexterity = this.randomStat();
		this.registerForm.value.stats.consitution = this.randomStat();
		this.registerForm.value.stats.intelligence = this.randomStat();
		this.registerForm.value.stats.wisdom = this.randomStat();
		this.registerForm.value.stats.charisma = this.randomStat();
	}


	save(model: FormGroup)
	{
		
	}

	onFinish() 
	{
	}
}
