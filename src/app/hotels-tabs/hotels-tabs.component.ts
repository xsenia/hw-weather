import { Component, Input } from '@angular/core';
import { IHotel } from '../mock/hotels';

@Component({
  selector: 'app-hotels-tabs',
  templateUrl: './hotels-tabs.component.html',
  styleUrls: ['./hotels-tabs.component.css']
})
export class HotelsTabsComponent {

  @Input()
  public hotels: IHotel;

}
