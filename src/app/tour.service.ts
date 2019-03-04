import { Injectable } from '@angular/core';
import { Tour } from './tour'
import { TOURLIST } from './mock-tour'

@Injectable({
  providedIn: 'root'
})
export class TourService {

  constructor() { }

  getHeroes(): Tour[] {
    return TOURLIST;
  }
}
