import { Component, Input } from '@angular/core';
import { IPlace } from '../mock/places';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css']
})
export class SocialComponent {

  @Input() places!: IPlace;

}
