import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {NgClass, NgIf} from "@angular/common";
import {TableComponent} from "../../app/table/table.component";

export interface Starship {
  MGLT: string;
  cargo_capacity: string;
  consumables: string;
  cost_in_credits: string;
  created: string;
  crew: string;
  edited: string;
  hyperdrive_rating: string;
  length: string;
  manufacturer: string;
  max_atmosphering_speed: string;
  model: string;
  name: string;
  passengers: string;
  films: string[];
  pilots: string[];
  starship_class: string;
  url: string;
}

interface StarshipsResponse {
 count: number
  next: string | null
  previous: string | null
  results: Starship[]
}

@Component({
  selector: 'app-starships',
  standalone: true,
  imports: [
    NgClass,
    NgIf,
    TableComponent,
  ],
  templateUrl: './starships.component.html',
  styleUrl: './starships.component.scss'
})
export class StarshipsComponent implements OnInit{

  starships: Starship[] = []

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getStarships()
  }

  getStarships(page?: string) {
    this.http.get<StarshipsResponse>(`https://swapi.py4e.com/api/starships/?page=${page ?? 1}`).subscribe(res => {
      this.starships = res.results
      console.log(res.results)
    })
  }

}
