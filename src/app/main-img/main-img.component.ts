import { Component, OnInit, Input } from '@angular/core';
import { IPlace } from '../mock/places';

@Component({
  selector: 'app-main-img',
  templateUrl: './main-img.component.html',
  styleUrls: ['./main-img.component.css']
})
export class MainImgComponent {

  @Input() currentCard!: any;
  @Input() places: any;

  public imgSrc: any;

 

  ngOnChanges() {
    // console.log('main img', this.currentCard.img);       
    // console.log('places main img ', this.places); 
    this.imgSrc = this.currentCard.img;      
  }

  ngOnInit() {
    this.currentCard = '';
    this.imgSrc  = this.places[0]['img'];
    

    //console.log('main img', this.currentCard.img);       
    console.log('первая картинка ', this.imgSrc);  
  }


}
