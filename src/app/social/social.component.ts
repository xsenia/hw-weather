import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { IPlace } from '../mock/places';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css']
})
export class SocialComponent implements OnInit, OnChanges {

  @Input() places!: IPlace;
  @Input() currentCard!: IPlace;
  

  ngOnChanges() {
    console.log(this.currentCard);       
  }

  ngOnInit() {
    this.currentCard = '';
  }

  

  

  

}
