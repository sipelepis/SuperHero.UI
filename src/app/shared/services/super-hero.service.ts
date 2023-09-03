import { Injectable } from '@angular/core';
import { SuperHero } from '../model/super.hero';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class SuperHeroService {
  private url = "SuperHero";

  constructor(private http: HttpClient) { }
  public getSuperHeroes(): Observable<SuperHero[]> {    
    return this.http.get<SuperHero[]>(`${environment.apiUrl}/${this.url}`);
  }
  public postHero(hero: SuperHero): Observable<SuperHero[]>{
    return this.http.post<SuperHero[]>(`${environment.apiUrl}/${this.url}`, hero);
  }
  public putHero(hero: SuperHero): Observable<SuperHero[]>{
    return this.http.put<SuperHero[]>(`${environment.apiUrl}/${this.url}`, hero);
  }
  public popHero(hero: SuperHero): Observable<SuperHero[]>{
    return this.http.delete<SuperHero[]>(`${environment.apiUrl}/${this.url}/${hero.id}`);
  }
}
