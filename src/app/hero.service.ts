import { Injectable } from '@angular/core';
import { Hero } from '../app/hero';
import { HEROES } from '../app/mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {

    this.messageService.add('Heroes Service: Fetched heroes');
    return of(HEROES);
  }
}
