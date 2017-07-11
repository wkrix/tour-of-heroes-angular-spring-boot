import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { environment } from '../../../environments/environment';

import { Hero } from './hero';

@Injectable()
export class HeroSearchService {

  constructor(private http: Http) { }

  search(term: string): Observable<Hero[]> {
    return this.http
      .get(`${environment.apiEndpoint}/heroes/search/findByName?name=${term}`)
      .map(response => response.json()._embedded.heroes as Hero[]);
  }
}
