import { Component } from '@angular/core';
import {hotels, IHotel} from './mock/hotels';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: {text: string, subtitle: {text: string}} = {
    text: 'Курс Angular - ng170919',
    subtitle: {text: 'Подзаголовок'}
  };

  public hotels: IHotel[] = hotels;

  

  public ngOnInit(): void {
    
  }

  
}

