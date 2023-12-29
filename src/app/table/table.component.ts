import { Component, Input } from '@angular/core';
import { AsyncPipe, DatePipe, NgClass, NgForOf, NgIf } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { ModalComponent } from "../modal/modal.component";
import { Starship } from "../entities/starships";
import { People, ShipComponent } from "../starships/ship/ship.component";

export interface ModalData {
  name: string
  item: People | null
}

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [
    NgForOf,
    NgClass,
    DatePipe,
    FormsModule,
    ModalComponent,
    NgIf,
    ShipComponent,
    AsyncPipe
  ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {

  @Input({ required: true }) starships: Starship[] | null = []
  @Input({ required: true }) tableHeadItem: string[] | null = []

  constructor() {
    console.log(this.starships)
  }

}
