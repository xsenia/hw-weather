import { Component } from '@angular/core';
import { places, IPlace } from './mock/places';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {  

  public places: IPlace[] = places; 
  public currentType: IPlace[]; 
  public currentCard:  IPlace[];

  public getCurrentType(placeType: IPlace) {
    this.currentType = placeType;
  }

  public getCard(card: IPlace) {
    console.log('card ',card);
    this.currentCard = card;
  }

    
}

