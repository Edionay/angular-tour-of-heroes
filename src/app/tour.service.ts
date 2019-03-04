import { Injectable } from '@angular/core';
import { Tour } from './tour'
import { TOURLIST } from './mock-tour'
import { Observable, of } from 'rxjs'
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class TourService {

  constructor(private messageService: MessageService) { }

  getTourList(): Observable<Tour[]> {
    this.messageService.add('HeroService: fetched heroes');
    return of(TOURLIST)
  }
}
