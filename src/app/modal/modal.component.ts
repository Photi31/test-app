import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ModalData } from "../../app/table/table.component";
import { JsonPipe, KeyValuePipe, NgForOf, NgIf, TitleCasePipe } from "@angular/common";
import { DataResponse } from "../services/data.service";

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [
    TitleCasePipe,
    NgForOf,
    KeyValuePipe,
    JsonPipe,
    NgIf
  ],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {
  @Input() modalData: ModalData = {
    name: '',
    item: {} as DataResponse,
  }

  @Output() setOpenModal = new EventEmitter()

  setCloseModal() {
    this.setOpenModal.emit()
  }

  protected readonly Object = Object;
}
