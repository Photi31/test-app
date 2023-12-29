import {Component, Input, OnInit} from '@angular/core';
import { Starship } from "../../entities/starships";
import {AsyncPipe, DatePipe, JsonPipe, NgClass, NgIf} from "@angular/common";
import {ModalData} from "../../table/table.component";
import {ModalComponent} from "../../modal/modal.component";
import {PeopleService} from "../../services/people.service";

export interface People {
  birth_year: string
  eye_color: string
  films: string[]
  gender: string
  hair_color: string
  height: string
  homeworld: string
  mass: string
  name: string
  skin_color: string
  created: string
  edited: string
  species: string[]
  starships: string[]
  url: string
  vehicles: string[]
}

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

  openModal = false
  modalData: ModalData = {
    name: '',
    item: {} as People,
  }
  @Input({required: true}) ship!: Starship

  constructor(private peopleService: PeopleService) {}

  ngOnInit(): void {
    if (this.ship.pilots[0]) {
      this.getPeople()
    }
  }
  getPeople() {
    this.peopleService.getPeople(this.ship.pilots[0]).subscribe(res => {
      this.pilot = res
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
