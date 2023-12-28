import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Starship } from "../starships/starships.component";
import { BehaviorSubject } from "rxjs";

export interface StarshipsResponse {
  count: number
  next: string | null
  previous: string | null
  results: Starship[]
}

@Injectable({
  providedIn: 'root'
})
export class StarshipsService {

  starships$ = new BehaviorSubject<Starship[]>([])
  constructor(private http: HttpClient) { }

  getStarships(page?: string) {
   this.http.get<StarshipsResponse>(`https://swapi.py4e.com/api/starships/?page=${page ?? 1}`)
     .subscribe((res: StarshipsResponse) => {
       this.starships$.next(res.results)
     })
  }
}
