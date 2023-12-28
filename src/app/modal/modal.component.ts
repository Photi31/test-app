import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ModalData } from "../../app/table/table.component";
import { NgForOf, TitleCasePipe } from "@angular/common";

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [
    TitleCasePipe,
    NgForOf
  ],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {
  @Input() modalData: ModalData = {
    name: '',
    listItem: [],
  }

  @Output() setOpenModal = new EventEmitter()

  setCloseModal() {
    this.setOpenModal.emit()
  }

}
