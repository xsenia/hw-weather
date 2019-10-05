import { Component, OnInit, Input } from '@angular/core';
import { IPlace } from "../mock/places"

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.css']
})
export class PlacesComponent implements OnInit {

  @Input() places: IPlace;

  public placeType: string = '';

  public setCurrentType(event: any): void {
    this.placeType = event.target.dataset.type;
  }

  ngOnInit() {
    this.placeType = 'Отели';
  }

}
