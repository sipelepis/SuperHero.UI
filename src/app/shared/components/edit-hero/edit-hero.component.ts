import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { SuperHero } from '../../model/super.hero';
import { MatHint } from '@angular/material/form-field';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SuperHeroService } from '../../services/super-hero.service';
@Component({
  selector: 'app-edit-hero',
  templateUrl: './edit-hero.component.html',
  styleUrls: ['./edit-hero.component.css']
})
export class EditHeroComponent implements OnInit {
  contactForm: FormGroup;
  @Input() hero?: SuperHero;
  @Output() heroesUpdated = new EventEmitter<SuperHero[]>();
  checkFLName(inputName: string, name: string){
    if(this.contactForm.get(inputName)?.hasError('required')){
      return `${name} must have a value!`
    }else if(this.contactForm.get(inputName)?.hasError('pattern')){
      return `Not a valid value for ${name}`
    }
    return "";
  }
  constructor(private formBuilder: FormBuilder, private superHeroService: SuperHeroService) {
    this.contactForm = this.formBuilder.group({
      nameValidator: ['', [Validators.required, Validators.pattern(/^[a-z ,.'-]+$/i)]],
      firstnameValidator: ['', [Validators.required, Validators.pattern(/^[a-z ,.'-]+$/i)]],
      lastnameValidator: ['', [Validators.required, Validators.pattern(/^[a-z ,.'-]+$/i)]],
      placeValidator: ['', [Validators.required, Validators.pattern(/^[a-z ,.'-]+$/i)]],
    });
  }
  createHero(hero: SuperHero){
    this.superHeroService
    .postHero(hero)
    .subscribe((heroes: SuperHero[]) => this.heroesUpdated.emit(heroes));
  }
  putHero(hero: SuperHero) {
    this.superHeroService
    .putHero(hero)
    .subscribe((heroes: SuperHero[]) => this.heroesUpdated.emit(heroes));
  }
  popHero(hero: SuperHero){
    this.superHeroService
    .popHero(hero)
    .subscribe((heroes: SuperHero[]) => this.heroesUpdated.emit(heroes));

  }
  ngOnInit(): void {

  }
}
