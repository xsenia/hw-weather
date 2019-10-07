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
  public currentCard: any;

  

  public getCurrentType(placeType: any) {
    this.currentType = placeType;
  }

  public getCard(card: any) {
    console.log('card ',card);
    this.currentCard = card;
  }

  ngOnInit() {
    console.log('places', this.places);
  }

    
}

