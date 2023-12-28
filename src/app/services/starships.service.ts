import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Starship } from "../starships/starships.component";
import { catchError, EMPTY, map } from "rxjs";

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
  constructor(private http: HttpClient) { }

  getStarships(page?: string) {
   return this.http.get<StarshipsResponse>(`https://swapi.py4e.com/api/starships/?page=${page ?? 1}`)
     .pipe(
       catchError((err: HttpErrorResponse) => {
         console.error(err.message)
         return EMPTY
       })
     )
     .pipe(
       map((res: StarshipsResponse) => res.results)
     )
  }
}
