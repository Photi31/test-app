import { Component, Input } from '@angular/core';
import { Starship } from "../../app/starships/starships.component";
import { DatePipe, NgClass, NgForOf, NgIf } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { ModalComponent } from "../modal/modal.component";

export interface ModalData {
  name: string
  listItem: string[]
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
    NgIf
  ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {
  openModal = false
  modalData: ModalData = {
    name: '',
    listItem: [],
  }

  @Input({ required: true }) starships: Starship[] | null = []
  @Input({ required: true }) tableHeadItem: string[] | null = []


  setOpenModal(modalData: ModalData) {
    this.openModal = true
    this.modalData = modalData
    console.log(modalData)
  }

  setCloseModal() {
    this.openModal = false
  }
}
