import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  // Input se envia desde el hijo al padre, se puede dejar vacio o ingresando el nombre de la propiedad-chracterList
  @Input()
  public chracterList: Character[] = [{
    name: 'Trunks',
    power: 10,
  }]


  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();


  deleteCharacterById(id?: string): void{
    if (!id) return;
    this.onDelete.emit(id);
  }

}
