import { Pipe, PipeTransform } from '@angular/core';
import { IPlace } from '../mock/places';

@Pipe({
  name: 'menu'
})
export class MenuPipe implements PipeTransform {

  transform(places: IPlace[]): IPlace[] {
    
    let typesSet: any = new Set();
    places.forEach((elem) => {      
      typesSet.add(elem.type);      
    });
    return typesSet;
  }

}
