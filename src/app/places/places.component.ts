import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IPlace } from "../mock/places"

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.css']
})
export class PlacesComponent implements OnInit {

  @Input() places: any;
  @Output() typeSelected: EventEmitter<any> = new EventEmitter();
  @Output() getCurrentCard: EventEmitter<any> = new EventEmitter();

  public placeType: string = '';

  public setCurrentType(event: any): void {
    this.placeType = event.target.dataset.type;
    this.typeSelected.emit(this.placeType);
  }

  public getCard(event: any) {    
    let target = event.target;
    let targetId: any = target.closest('.cards').getAttribute('id'); 
    let currentCard = this.places[targetId];
    this.getCurrentCard.emit(currentCard);
  }

  ngOnInit() {
    this.placeType = 'Отели';
  }
  

}
