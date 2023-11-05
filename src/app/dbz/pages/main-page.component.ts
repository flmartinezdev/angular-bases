import { Character } from './../interfaces/character.interface';
import {Component} from "@angular/core";
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})



export class MainPageComponent{

//inyeccion de dependencias->esto habilita toda la informacion  en mi componente main page que se encuentre en este servicio

  constructor(private dbzService: DbzService){}
  // debe ser privado los servicios
  get characters(): Character[]{
    return [...this.dbzService.characters]
  }

  onDeleteCharacter(id: string):void{
    this.dbzService.deleteCharacterById(id);
  }

  onNewCharacter(character : Character) : void{
    this.dbzService.addCharacter(character);
  }
}


