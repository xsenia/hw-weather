import { Component } from '@angular/core';
import { places, IPlace } from './mock/places';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {  

  public places: IPlace[] = places;  

    
}

