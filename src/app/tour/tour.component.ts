import { Component, OnInit } from '@angular/core';
import { Tour } from '../tour'
import { TourService } from '../tour.service'

@Component({
  selector: 'app-tour',
  templateUrl: './tour.component.html',
  styleUrls: ['./tour.component.css']
})
export class TourComponent implements OnInit {

  tourList: Tour[]
  selectedTour: Tour

  onSelect(tour: Tour): void {
    this.selectedTour = tour
  }

  constructor(private tourService: TourService) {

   }

  ngOnInit() {
    this.getHeroes()
  }

  getHeroes(): void {
    this.tourService.getTourList().subscribe(tourList => {
      this.tourList = tourList
    })
  }
}
