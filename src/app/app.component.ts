import { Component } from '@angular/core';
import { SuperHero } from './shared/model/super.hero';
import { SuperHeroService } from './shared/services/super-hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  displayedColumns: string[] = ['name', 'firstName', 'lastName', 'place', 'actions'];
  title = 'SuperHero.UI';
  heroToEdit?: SuperHero;
  heroes: SuperHero[] = [];
  constructor(private superHeroService: SuperHeroService) {

  }
  ngOnInit(): void {
    this.superHeroService
    .getSuperHeroes()
    .subscribe((result: SuperHero[])=>(this.heroes = result));
    console.log(this.heroes);
  }
  updateHeroList(heroes: SuperHero[]){
    this.heroes = heroes;
  }
  editHero(hero: SuperHero){
    this.heroToEdit = hero
  }
  initNewHero(){
    this.heroToEdit = new SuperHero();
  }
}
