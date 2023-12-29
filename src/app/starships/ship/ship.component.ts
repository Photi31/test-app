import { Component, Input, OnInit } from '@angular/core';
import { Starship } from "../../entities/starships";
import { AsyncPipe, DatePipe, JsonPipe, NgClass, NgIf } from "@angular/common";
import { ModalData } from "../../table/table.component";
import { ModalComponent } from "../../modal/modal.component";
import { DataService } from "../../services/data.service";
import { People } from "../../entities/people";
import { Film } from "../../entities/film";
import { forkJoin } from "rxjs";

@Component({
  selector: 'app-ship',
  standalone: true,
  imports: [
    NgClass,
    DatePipe,
    ModalComponent,
    NgIf,
    ModalComponent,
    JsonPipe,
    AsyncPipe
  ],
  templateUrl: './ship.component.html',
  styleUrl: './ship.component.scss'
})
export class ShipComponent implements OnInit{
  pilot!: People
  film!: Film

  openModal = false
  modalData: ModalData = {
    name: '',
    item: {} as People,
  }
  @Input({required: true}) ship!: Starship

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    if (this.ship.pilots[0]) {
      this.getData()
    }
  }
  getData() {
    const pilot = this.dataService.getData(this.ship.pilots[0])
    const film = this.dataService.getData(this.ship.films[0])
    forkJoin([pilot, film]).subscribe(res => {
      this.pilot = res[0] as People
      this.film = res[1] as Film
      console.log(res)
    })
  }

  setOpenModal(modalData: ModalData) {
    this.openModal = true
    this.modalData = modalData
    console.log(modalData)
  }

  setCloseModal() {
    this.openModal = false
  }
}
