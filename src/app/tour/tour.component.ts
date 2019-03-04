import { Component, OnInit } from '@angular/core';
import { Tour } from '../tour'
import { TOURLIST } from '../mock-tour'

@Component({
  selector: 'app-tour',
  templateUrl: './tour.component.html',
  styleUrls: ['./tour.component.css']
})
export class TourComponent implements OnInit {

  tourList = TOURLIST
  selectedTour: Tour

  onSelect(tour: Tour): void {
    this.selectedTour = tour
  }

  constructor() { }

  ngOnInit() {
  }

}
