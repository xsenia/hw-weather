import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-main-img',
  templateUrl: './main-img.component.html',
  styleUrls: ['./main-img.component.css']
})
export class MainImgComponent {

  @Input() currentCard!: any;

  ngOnChanges() {
    console.log('main img', this.currentCard.img);       
  }

  ngOnInit() {
    this.currentCard = '';
  }


}
