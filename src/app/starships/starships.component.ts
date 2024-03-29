import { Component, OnInit } from '@angular/core';
import { AsyncPipe, NgClass, NgIf } from "@angular/common";
import { TableComponent } from "../../app/table/table.component";
import { StarshipsService } from "../services/starships.service";
import { Observable } from "rxjs";
import { Starship } from "../entities/starships";

@Component({
  selector: 'app-starships',
  standalone: true,
  imports: [
    NgClass,
    NgIf,
    TableComponent,
    AsyncPipe,
  ],
  templateUrl: './starships.component.html',
  styleUrl: './starships.component.scss'
})
export class StarshipsComponent implements OnInit {
  tableHeadItem: string[] = [
    'Название',
    'Модель',
    'Класс корабля',
    'Длина',
    'Грузоподъемность',
    'Max скорость',
    'Рейтинг гипердвигателя',
    'Команда',
    'Пассажиры',
    'Пилоты',
    'Фильмы',
    'Предприятие',
    'Дата создания',
    'Гарантия',
    'Стоимость'
  ]
  starships$!: Observable<Starship[]>

  constructor(
    private starshipsService: StarshipsService,
  ) {}

  ngOnInit() {
    this.starships$ = this.starshipsService.getStarships()
    this.getStarships()
  }

  getStarships(page?: string) {
    this.starshipsService.getStarships(page)
  }

}
